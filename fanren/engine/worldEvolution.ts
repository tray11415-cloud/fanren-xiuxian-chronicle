/** 世界自然演化：時間推進時，未被玩家介入的正史照常發生，NPC 依編年史推進。 */
import type {
  FanrenWorldState,
  NpcReaction,
  NpcRuntimeState,
  WorldEventState,
} from '../types';
import { CANON_NPCS } from '../data/canonNpcs';
import { CANON_NPC_FATES } from '../data/canonNpcFates';
import { eventsInWindow, getNpc, resolveNpcAtDay } from './canonLoader';
import { chapterToDay } from './clock';
import { factionsOfPlace } from './mapIntel';

// 結局里程碑依世界日索引（一次性）
const FATE_KIND_VERB: Record<string, string> = {
  death: '隕落歸天', ascend: '飛升而去', rebirth: '以新身重生', seal: '遭封/ 沉眠', exit: '退隱離場', other: '塵埃落定',
};
const SCHEDULED_FATES = CANON_NPC_FATES.map((f) => ({ ...f, fateDay: chapterToDay(f.fateChapter) })).sort((a, b) => a.fateDay - b.fateDay);

export interface EvolutionResult {
  npcStates: Record<string, NpcRuntimeState>;
  worldEventStates: Record<string, WorldEventState>;
  npcFateStates: Record<string, WorldEventState>;
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
  // 大事件（tier=major）逐條入敘事；逐章節拍（tier=beat）照常入史，但敘事摘要只取最近數條，
  // 其餘以一句彙總帶過——長閉關一次跨數十章時，避免敘事與 LLM 脈絡被節拍洪水淹沒。
  const due = eventsInWindow(oldDay, newDay);
  const MAX_BEAT_LINES = 5;
  const shownBeatIds = new Set(
    due.filter((e) => e.tier === 'beat').slice(-MAX_BEAT_LINES).map((e) => e.id)
  );
  let skippedBeats = 0;
  for (const ev of due) {
    if (heldEventIds?.has(ev.id)) continue; // 互動式介入事件：暫不自動觸發，待玩家抉擇
    const prev = worldEventStates[ev.id];
    if (prev?.fired || prev?.diverged) continue;
    worldEventStates[ev.id] = { id: ev.id, fired: true, firedDay: ev.scheduledDay, diverged: false };
    firedEventIds.push(ev.id);
    // 事件在玩家所在地 → 以「親歷」框定；否則為遠方傳聞
    const here = ev.locationId === state.currentLocationId;
    if (ev.tier === 'beat') {
      if (!shownBeatIds.has(ev.id)) { skippedBeats++; continue; }
      const tag = here ? '【你親歷此事】' : ev.involvedNpcIds.includes('韓立') ? '【正史·韓立行跡】' : '【天下事】';
      firedSummaries.push(`${tag}${ev.title}：${ev.summary}`);
      continue;
    }
    firedSummaries.push(`${here ? '【你親歷此事】' : '【天下事】'}${ev.title}：${ev.summary}`);
    // 套用後果：涉及 NPC 的狀態交給編年史重算（下一步），此處標記
  }
  if (skippedBeats > 0) {
    firedSummaries.push(`【正史進程】其間另有 ${skippedBeats} 件原著事件相繼發生，俱已載入編年史。`);
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

  // 2b) 主要 NPC 結局里程碑：跨過結局日 → 公告其命運（走完原著結局），死亡者鎖定 dead。
  const fateStates: Record<string, WorldEventState> = { ...(state.npcFateStates || {}) };
  for (const f of SCHEDULED_FATES) {
    if (f.fateDay <= oldDay || f.fateDay > newDay) continue;
    if (fateStates[f.id]?.fired) continue;
    const rt = npcStates[f.id];
    if (rt?.diverged) continue; // 玩家已改寫其命運 → 不套用正史結局
    fateStates[f.id] = { id: f.id, fired: true, firedDay: f.fateDay, diverged: false };
    if (f.kind === 'death' && rt) npcStates[f.id] = { ...rt, status: 'dead' };
    // 僅公告較重要者，避免洪水（major / 露臉多者）
    if (f.importance === 'major' || f.appearances >= 4) {
      firedSummaries.push(`【天下事・命數】${f.name}${FATE_KIND_VERB[f.kind] || '塵埃落定'}——${f.text}`);
    }
  }

  // 3) 玩家所在地、且知名度已建立的 NPC → 產生反應（含地圖勢力地盤脈絡）
  const placeFactions = factionsOfPlace(state.currentLocationId);
  for (const id in npcStates) {
    const rt = npcStates[id];
    if (rt.locationId !== state.currentLocationId) continue;
    if (!rt.knownToPlayer) continue;
    if (rt.status === 'dead' || rt.status === 'unknown') continue;
    const npc = getNpc(id);
    if (!npc) continue;
    const onHomeTurf = !!npc.faction && placeFactions.some((f) => f === npc.faction || f.includes(npc.faction!) || npc.faction!.includes(f));
    reactions.push({
      npcId: id,
      npcName: npc.name,
      action: npcReaction(rt, onHomeTurf, npc.faction),
      towardPlayer: rt.relationship !== 0,
    });
  }

  return { npcStates, worldEventStates, npcFateStates: fateStates, firedEventIds, firedSummaries, reactions };
}

function npcReaction(rt: NpcRuntimeState, onHomeTurf: boolean, faction?: string): string {
  const turf = onHomeTurf ? `坐鎮${faction ? `${faction}地盤` : '此地'}，` : '';
  if (rt.relationship >= 50) return `${turf}神色親近，似有意與你結交或相助。`;
  if (rt.relationship <= -50) return `${turf}目露敵意，對你頗為戒備${onHomeTurf ? '，主場之上更顯強勢' : ''}。`;
  if (rt.relationship < 0) return `${turf}冷眼旁觀，對你存有疑慮。`;
  return onHomeTurf ? `${turf}以地主之姿打量著你。` : '各行其是，並未特別在意你。';
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
