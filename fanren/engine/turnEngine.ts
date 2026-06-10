/** 動態回合引擎：玩家行動 → 輸入治理 → 數值結算 → 時間推進 → 世界演化 → 敘事 → 提醒/記憶。 */
import type {
  FanrenWorldState,
  MemoryEntry,
  NpcReaction,
  TurnResult,
} from '../types';
import { advanceTime, dayToChapter, dayToGameTime, daysForScale } from './clock';
import { parseIntent } from './keywordRouter';
import { govern, violationFeedback } from './governor';
import { regenGoldenFinger, useGoldenFinger } from './goldenFinger';
import { evolveWorld } from './worldEvolution';
import { allLocationNames, allNpcNames, getNpc, getRegion, resolveNpcAtDay } from './canonLoader';
import { generateRegion, isUnknownDestination } from './worldExpansion';
import { buildReminders, makeMemory, recall } from './reminderRecall';
import { narrate } from './gmService';

export interface TurnContext {
  world: FanrenWorldState;
  player: {
    name: string;
    realm: string;
    exp: number;
    maxExp: number;
    hp: number;
    maxHp: number;
    spiritStones: number;
    lifespan: number;
    cultivationMult: number; // 由靈根決定的修煉倍率
    inventoryNames: string[];
  };
}

export interface PlayerDeltas {
  exp?: number;
  hp?: number;
  spiritStones?: number;
  lifespan?: number; // 年
}

export interface TurnOutcome {
  result: TurnResult;
  worldPatch: Partial<FanrenWorldState>;
  playerDeltas: PlayerDeltas;
  newMemory?: MemoryEntry;
}

function cultivateExpPerDay(maxExp: number, mult: number): number {
  return Math.max(1, (maxExp * 0.0008) * mult);
}

/** 執行一個回合。永不拋錯。 */
export async function runTurn(rawText: string, ctx: TurnContext): Promise<TurnOutcome> {
  const w = ctx.world;
  const oldDay = w.clock.totalDays;
  const intent = parseIntent(rawText, {
    npcNames: allNpcNames(),
    locationNames: allLocationNames(),
    itemNames: ctx.player.inventoryNames,
  });
  const verdict = govern(rawText, intent, w.governorViolations);

  // ── 越權：拒絕 ──
  if (verdict.decision === 'reject') {
    const violations = w.governorViolations + 1;
    const feedback = violationFeedback(verdict, violations);
    const gfRt = w.goldenFingerRuntime && verdict.sanctionKarma
      ? { ...w.goldenFingerRuntime, karma: w.goldenFingerRuntime.karma + verdict.sanctionKarma }
      : w.goldenFingerRuntime;
    const result: TurnResult = {
      narrative: feedback,
      intent,
      verdict,
      daysElapsed: 0,
      worldEventsFired: [],
      npcReactions: [],
      logType: 'danger',
    };
    return { result, worldPatch: { governorViolations: violations, goldenFingerRuntime: gfRt }, playerDeltas: {} };
  }

  // ── 純查詢類（不耗時）──
  if (intent.type === 'inspect') {
    const reminders = buildReminders(w);
    const text = reminders.map((r) => `· ${r.text}`).join('\n');
    return {
      result: { narrative: `【環視四周・打探消息】\n${text}`, intent, verdict, daysElapsed: 0, worldEventsFired: [], npcReactions: [], reminders, logType: 'normal' },
      worldPatch: {},
      playerDeltas: {},
    };
  }
  if (intent.type === 'recall') {
    // 僅以捕獲到的已知人/地名作檢索鍵；否則回顧重點往事
    const q = intent.targets[0];
    return {
      result: { narrative: recall(w.memory, q), intent, verdict, daysElapsed: 0, worldEventsFired: [], npcReactions: [], logType: 'special' },
      worldPatch: {},
      playerDeltas: {},
    };
  }

  // ── 決定耗時 ──
  let days = daysForScale(intent.durationScale, intent.durationDays);
  if (verdict.decision === 'reframe') days = Math.min(days, 7); // 被重構的行動先小步推進

  const playerDeltas: PlayerDeltas = {};
  let mechanical = '';
  let worldPatch: Partial<FanrenWorldState> = {};
  let logType: TurnResult['logType'] = 'normal';
  let newLocationId = w.currentLocationId;
  let gfRuntime = w.goldenFingerRuntime;
  let memoryNote: { summary: string; tags: string[]; important: boolean } | null = null;

  const newDay = oldDay + days;

  switch (intent.type) {
    case 'cultivate': {
      const expGain = Math.round(cultivateExpPerDay(ctx.player.maxExp, ctx.player.cultivationMult) * days);
      playerDeltas.exp = expGain;
      playerDeltas.lifespan = -(days / 360);
      mechanical = `你凝神入定，吐納天地靈氣。${days}日苦修，修為精進（修為 +${expGain}）。`;
      memoryNote = { summary: `閉關修煉約${Math.max(1, Math.round(days / 360))}年`, tags: ['修煉', w.currentLocationId], important: days >= 1800 };
      break;
    }
    case 'use_golden_finger': {
      if (!w.goldenFinger || !w.goldenFingerRuntime) {
        mechanical = '你並無可動用的金手指。';
        logType = 'normal';
        break;
      }
      const ur = useGoldenFinger(w.goldenFingerRuntime, w.goldenFinger, newDay);
      gfRuntime = ur.runtime;
      if (!ur.ok) {
        mechanical = ur.reason || '金手指此刻無法發動。';
        logType = 'danger';
      } else {
        const eff = ur.effect!;
        if (eff.hook === 'cultivationRateMult') {
          const burst = Math.round(cultivateExpPerDay(ctx.player.maxExp, ctx.player.cultivationMult) * 30 * eff.magnitude);
          playerDeltas.exp = burst;
          mechanical = `你催動「${w.goldenFinger.name}」，靈氣如百川歸海般湧入經脈，修為暴漲（修為 +${burst}）。`;
        } else if (eff.hook === 'herbMaturation') {
          const stones = Math.round(20 * eff.magnitude * (1 + dayToChapter(newDay) / 200));
          playerDeltas.spiritStones = stones;
          mechanical = `你以「${w.goldenFinger.name}」催熟一批靈藥，售與坊市，得靈石 +${stones}。`;
        } else if (eff.hook === 'luckBonus') {
          mechanical = `「${w.goldenFinger.name}」之力流轉周身，冥冥中氣運攀升，近日諸事似有貴人相助。`;
        } else if (eff.hook === 'appraise') {
          mechanical = `「${w.goldenFinger.name}」開啟，萬物來歷真偽在你眼中纖毫畢現。`;
        } else if (eff.hook === 'craftSuccess') {
          mechanical = `「${w.goldenFinger.name}」加持，你對火候藥理的掌控臻於圓融，成丹率大增。`;
        } else {
          mechanical = `你發動了「${w.goldenFinger.name}」，獨特之力悄然生效。`;
        }
        logType = 'special';
        if (ur.anomaly) {
          mechanical += `\n但業力陡增，引動「系統異常」——金手指暫陷沉寂，須待時日方能復原。`;
          logType = 'danger';
        }
      }
      memoryNote = { summary: `動用金手指「${w.goldenFinger.name}」`, tags: ['金手指'], important: ur.anomaly };
      break;
    }
    case 'travel': {
      let target = intent.targets.find((t) => getRegion(t)) || intent.targets[0];
      if (!target) {
        // 從自由文本擷取目的地（即使不在已知地圖）→ 觸發世界擴充
        const m = intent.rawText.match(/(?:前往|趕往|去往|飛往|遁往|前去|去|往)\s*([^\s，。,.！!？?]{2,12})/);
        if (m) target = m[1].replace(/(探索|拜師|一帶|附近|看看|遊歷|歷練|去|的)+$/g, '').trim();
      }
      if (target && isUnknownDestination(target)) {
        const region = getRegion(w.currentLocationId);
        const tier = (region?.tier || 'human') as 'human' | 'spirit' | 'demon' | 'immortal';
        const gen = generateRegion({ fromRegionId: w.currentLocationId, tier, day: newDay, existingCount: w.expandedRegions.length, hint: intent.rawText });
        newLocationId = gen.id;
        worldPatch.expandedRegions = [...w.expandedRegions, gen];
        mechanical = `你循未知之向而行，歷經${days}日跋涉，抵達一處輿圖未載之地——${gen.name}。${gen.description}`;
        logType = 'special';
      } else if (target) {
        newLocationId = getRegion(target)?.id || target;
        const reg = getRegion(newLocationId);
        mechanical = `你動身前往${reg?.name || newLocationId}，${days}日後抵達。${reg?.description || ''}`;
      } else {
        mechanical = `你漫無目的地遊走了${days}日。`;
      }
      memoryNote = { summary: `前往${getRegion(newLocationId)?.name || newLocationId}`, tags: ['行旅', newLocationId], important: false };
      break;
    }
    case 'talk': {
      const npcName = intent.targets.find((t) => getNpc(t));
      if (npcName) {
        const npc = getNpc(npcName)!;
        const rt = w.npcStates[npc.id];
        if (rt && rt.status === 'dead') {
          mechanical = `${npc.name}早已不在人世，你遍尋不見。`;
        } else if (rt && rt.locationId !== w.currentLocationId) {
          const here = getRegion(rt.locationId);
          mechanical = `${npc.name}並不在此處，據聞其人正在${here?.name || rt.locationId}一帶（${resolveNpcAtDay(npc, newDay).activity}）。`;
        } else if (npc.firstChapter > w.progressChapter + 30) {
          mechanical = `你打聽${npcName}，卻無人聽過此名——或許時機未到。`;
        } else {
          worldPatch.npcStates = { ...w.npcStates, [npc.id]: { ...(rt || w.npcStates[npc.id]), knownToPlayer: true } };
          mechanical = `你尋到${npc.name}，與之攀談。${npc.bio.slice(0, 60)}……對方${rt && rt.relationship > 0 ? '態度和善' : '不置可否'}。`;
          memoryNote = { summary: `結識/會晤${npc.name}`, tags: ['人物', npc.name], important: npc.importance !== 'minor' };
        }
      } else {
        mechanical = `你與當地修士寒暄了一番，打探些許消息。`;
      }
      break;
    }
    case 'explore': {
      const stones = Math.round(5 + dayToChapter(newDay) / 50);
      const expGain = Math.round(cultivateExpPerDay(ctx.player.maxExp, 1) * days * 0.3);
      playerDeltas.spiritStones = stones;
      playerDeltas.exp = expGain;
      mechanical = `你在${getRegion(w.currentLocationId)?.name || '此地'}遊歷查探${days}日，略有所獲（靈石 +${stones}，修為 +${expGain}）。`;
      memoryNote = { summary: `於${w.currentLocationId}歷練`, tags: ['歷練', w.currentLocationId], important: false };
      break;
    }
    case 'fight': {
      mechanical = `你與對手交手。（戰鬥的勝負與得失，將於戰鬥介面中以回合制定奪——此處先記下你的戰意。）`;
      logType = 'danger';
      break;
    }
    case 'craft':
    case 'use_item':
    case 'trade': {
      mechanical = `你著手「${intent.rawText}」。此類行動的具體得失，依你的背包、配方與當地行情而定（可於對應介面操作）。`;
      break;
    }
    case 'wait': {
      mechanical = `你按兵不動，靜觀其變，任${days}日悄然流逝。`;
      break;
    }
    default: {
      // freeform / reframe
      mechanical = `${verdict.reframedAs ? '' : ''}你嘗試「${intent.rawText}」。世界依其法則回應你的舉動。`;
    }
  }

  // ── 時間推進 + 世界演化 ──
  const clock = dayToGameTime(newDay);
  const progressChapter = Math.max(w.progressChapter, dayToChapter(newDay));
  const evolvingWorld: FanrenWorldState = { ...w, ...worldPatch, currentLocationId: newLocationId, clock, progressChapter };
  const evo = evolveWorld(evolvingWorld, oldDay, newDay);

  // 金手指能量回復（若本回合未主動使用，也隨時間回能）
  if (intent.type !== 'use_golden_finger' && w.goldenFinger && gfRuntime) {
    gfRuntime = regenGoldenFinger(gfRuntime, w.goldenFinger, newDay);
  }

  worldPatch = {
    ...worldPatch,
    clock,
    progressChapter,
    currentLocationId: newLocationId,
    npcStates: evo.npcStates,
    worldEventStates: evo.worldEventStates,
    goldenFingerRuntime: gfRuntime,
  };

  // ── 敘事 ──
  const reactions: NpcReaction[] = evo.reactions;
  const visibleFired = evo.firedSummaries; // 已於 evolveWorld 內粗略產生
  const { text } = await narrate({
    world: evolvingWorld,
    intent,
    verdict,
    daysElapsed: days,
    mechanicalOutcome: mechanical,
    firedSummaries: visibleFired,
    reactions,
    playerRealm: ctx.player.realm,
    playerName: ctx.player.name,
  });

  const reminders = buildReminders({ ...evolvingWorld, ...worldPatch });
  const newMemory = memoryNote ? makeMemory(newDay, memoryNote.summary, memoryNote.tags, memoryNote.important) : undefined;

  const result: TurnResult = {
    narrative: text,
    intent,
    verdict,
    daysElapsed: days,
    statDeltas: playerDeltas as Record<string, number>,
    worldEventsFired: evo.firedEventIds,
    npcReactions: reactions,
    reminders,
    logType,
  };
  return { result, worldPatch, playerDeltas, newMemory };
}
