/** 世界自然演化：時間推進時，未被玩家介入的正史照常發生，NPC 依編年史推進。 */
import type {
  FanrenWorldState,
  NpcReaction,
  NpcRuntimeState,
  WorldEventState,
} from '../types';
import { CANON_NPCS } from '../data/canonNpcs';
import { eventsInWindow, getNpc, resolveNpcAtDay } from './canonLoader';

export interface EvolutionResult {
  npcStates: Record<string, NpcRuntimeState>;
  worldEventStates: Record<string, WorldEventState>;
  firedEventIds: string[];
  firedSummaries: string[];
  reactions: NpcReaction[];
}

/**
 * 推進世界從 oldDay 到 newDay。
 * - 未分歧的正史事件：照常觸發，套用後果。
 * - 未分歧的 NPC：依編年史重新定位到 newDay。
 * - 玩家所在地的 NPC：產生「相對玩家行動」的反應。
 */
export function evolveWorld(
  state: FanrenWorldState,
  oldDay: number,
  newDay: number,
  heldEventIds?: Set<string>
): EvolutionResult {
  const npcStates: Record<string, NpcRuntimeState> = { ...state.npcStates };
  const worldEventStates: Record<string, WorldEventState> = { ...state.worldEventStates };
  const firedEventIds: string[] = [];
  const firedSummaries: string[] = [];
  const reactions: NpcReaction[] = [];

  // 1) 觸發此區間內的正史事件（未被玩家改寫者）
  const due = eventsInWindow(oldDay, newDay);
  for (const ev of due) {
    if (heldEventIds?.has(ev.id)) continue; // 互動式介入事件：暫不自動觸發，待玩家抉擇
    const prev = worldEventStates[ev.id];
    if (prev?.fired || prev?.diverged) continue;
    worldEventStates[ev.id] = { id: ev.id, fired: true, firedDay: ev.scheduledDay, diverged: false };
    firedEventIds.push(ev.id);
    // 事件在玩家所在地 → 以「親歷」框定；否則為遠方傳聞
    const here = ev.locationId === state.currentLocationId;
    firedSummaries.push(`${here ? '【你親歷此事】' : '【天下事】'}${ev.title}：${ev.summary}`);
    // 套用後果：涉及 NPC 的狀態交給編年史重算（下一步），此處標記
  }

  // 2) NPC 依編年史推進到 newDay（未分歧者）
  for (const npc of CANON_NPCS) {
    const rt = npcStates[npc.id];
    if (!rt || rt.diverged) continue; // 已分歧者保持玩家造成的狀態
    const resolved = resolveNpcAtDay(npc, newDay);
    npcStates[npc.id] = {
      ...rt,
      realm: resolved.realm,
      locationId: resolved.locationId,
      status: resolved.status,
      lastSyncDay: newDay,
    };
  }

  // 3) 玩家所在地、且知名度已建立的 NPC → 產生反應
  for (const id in npcStates) {
    const rt = npcStates[id];
    if (rt.locationId !== state.currentLocationId) continue;
    if (!rt.knownToPlayer) continue;
    if (rt.status === 'dead' || rt.status === 'unknown') continue;
    const npc = getNpc(id);
    if (!npc) continue;
    reactions.push({
      npcId: id,
      npcName: npc.name,
      action: npcReaction(rt),
      towardPlayer: rt.relationship !== 0,
    });
  }

  return { npcStates, worldEventStates, firedEventIds, firedSummaries, reactions };
}

function npcReaction(rt: NpcRuntimeState): string {
  if (rt.relationship >= 50) return '神色親近，似有意與你結交或相助。';
  if (rt.relationship <= -50) return '目露敵意，對你頗為戒備。';
  if (rt.relationship < 0) return '冷眼旁觀，對你存有疑慮。';
  return '各行其是，並未特別在意你。';
}

/** 玩家介入正史 → 標記分歧並阻止對應事件照常發生。 */
export function markDivergence(
  state: FanrenWorldState,
  cause: string,
  affectedEventIds: string[],
  affectedNpcIds: string[],
  day: number
): { worldEventStates: Record<string, WorldEventState>; npcStates: Record<string, NpcRuntimeState>; note: string } {
  const worldEventStates = { ...state.worldEventStates };
  const npcStates = { ...state.npcStates };
  for (const eid of affectedEventIds) {
    worldEventStates[eid] = { id: eid, fired: worldEventStates[eid]?.fired ?? false, diverged: true, outcomeNote: cause };
  }
  for (const nid of affectedNpcIds) {
    if (npcStates[nid]) npcStates[nid] = { ...npcStates[nid], diverged: true, divergenceNote: cause };
  }
  return { worldEventStates, npcStates, note: `因你的行動，原本的命運軌跡已生變數：${cause}` };
}
