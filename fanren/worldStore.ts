/** 凡人編年史 世界層狀態（Zustand）。與既有 gameStore 協作：世界/時間/NPC/金手指在此，玩家數值仍在 gameStore。 */
import { create } from 'zustand';
import { RealmType } from '../types';
import type { CharacterCreation, FanrenWorldState, TurnResult } from './types';
import { dayToGameTime } from './engine/clock';
import { buildInitialNpcStates, getEvent, getNpc } from './engine/canonLoader';
import { runTurn } from './engine/turnEngine';
import { markDivergence } from './engine/worldEvolution';
import { makeMemory } from './engine/reminderRecall';
import { createGoldenFingerRuntime } from './engine/goldenFinger';
import { applyTrigger, passiveStatBonus } from './engine/mechanics';
import { extrapolateMechanic, extrapolateMechanicSync } from './engine/extrapolate';
import { CANON_FACTIONS } from './data/factions';
import { ORIGINS, SPIRITUAL_ROOT_PROFILES } from './data/creationOptions';
import { useGameStore } from '../store/gameStore';
import { useUIStore } from '../store/uiStore';

/** NPC 境界字串 → 遊戲 RealmType（供戰鬥敵人生成）。 */
export function toRealmType(realm: string | undefined, fallback: RealmType): RealmType {
  const r = realm || '';
  if (/炼气|煉氣/.test(r)) return RealmType.QiRefining;
  if (/筑基|築基/.test(r)) return RealmType.Foundation;
  if (/金丹|結丹|结丹/.test(r)) return RealmType.GoldenCore;
  if (/元婴|元嬰/.test(r)) return RealmType.NascentSoul;
  if (/化神/.test(r)) return RealmType.SpiritSevering;
  if (/合体|合體|合道|煉虛|炼虚/.test(r)) return RealmType.DaoCombining;
  if (/大乘|長生|长生|渡劫|真仙/.test(r)) return RealmType.LongevityRealm;
  return fallback;
}

const WORLD_KEY = 'fanren_world_v1';

function emptyWorld(): FanrenWorldState {
  return {
    enabled: false,
    clock: dayToGameTime(0),
    progressChapter: 1,
    currentLocationId: '七玄門',
    goldenFinger: null,
    goldenFingerRuntime: null,
    mechanics: [],
    karma: 0,
    daoHeartId: null,
    originId: null,
    npcStates: {},
    worldEventStates: {},
    factionStates: {},
    divergences: [],
    expandedRegions: [],
    memory: [],
    governorViolations: 0,
    pendingChoice: null,
  };
}

function loadWorld(): FanrenWorldState {
  try {
    const raw = localStorage.getItem(WORLD_KEY);
    if (raw) return { ...emptyWorld(), ...JSON.parse(raw) };
  } catch {}
  return emptyWorld();
}

function persistWorld(w: FanrenWorldState) {
  try {
    localStorage.setItem(WORLD_KEY, JSON.stringify(w));
  } catch {}
}

/** 由玩家五行靈根推導修煉倍率（0.6 廢靈根 ~ 3.0 天靈根）。 */
export function cultivationMultFromRoots(roots: { metal: number; wood: number; water: number; fire: number; earth: number }): number {
  const vals = [roots.metal, roots.wood, roots.water, roots.fire, roots.earth];
  const max = Math.max(...vals);
  const nonZero = vals.filter((v) => v > 5).length;
  // 靈根數越少越純 → 倍率越高；最高屬性越高 → 倍率越高
  const purity = nonZero <= 1 ? 1.0 : nonZero === 2 ? 0.7 : nonZero === 3 ? 0.5 : 0.35;
  return Math.max(0.6, Math.min(3.0, 0.6 + (max / 100) * 1.8 * purity + (nonZero <= 1 ? 0.6 : 0)));
}

/** 套用屬性增量到玩家（含 maxHp 連動）。 */
function applyStatDeltas(p: any, d: Record<string, number>): any {
  const maxHp = Math.max(1, (p.maxHp || 0) + (d.maxHp || 0));
  return {
    ...p,
    maxHp,
    hp: Math.min(p.hp, maxHp),
    attack: (p.attack || 0) + (d.attack || 0),
    defense: (p.defense || 0) + (d.defense || 0),
    spirit: (p.spirit || 0) + (d.spirit || 0),
    physique: (p.physique || 0) + (d.physique || 0),
    speed: (p.speed || 0) + (d.speed || 0),
  };
}

interface WorldStoreState {
  world: FanrenWorldState;
  busy: boolean;
  lastResult: TurnResult | null;
  pendingBattle: { context: string; divergenceEventId?: string } | null;
  setWorld: (w: FanrenWorldState | ((p: FanrenWorldState) => FanrenWorldState)) => void;
  initCanonWorld: (creation: CharacterCreation) => void;
  submitAction: (rawText: string) => Promise<void>;
  resolveChoice: (optionId: string) => void;
  applyBattleResult: (result: { victory: boolean; hpLoss: number; expChange: number; spiritChange: number; spiritStones?: number }) => void;
  createMechanic: (rawText: string, kind: 'ability' | 'art' | 'recipe') => Promise<void>;
  onKill: () => void; // 戰鬥擊殺後觸發 on:'kill' 機制（吞噬/吸取等）
  reset: () => void;
}

export const useWorldStore = create<WorldStoreState>((set, get) => ({
  world: loadWorld(),
  busy: false,
  lastResult: null,
  pendingBattle: null,

  setWorld: (wOrFn) =>
    set((s) => {
      const next = typeof wOrFn === 'function' ? (wOrFn as (p: FanrenWorldState) => FanrenWorldState)(s.world) : wOrFn;
      persistWorld(next);
      return { world: next };
    }),

  initCanonWorld: (creation) => {
    const origin = ORIGINS.find((o) => o.id === creation.originId) || ORIGINS[0];
    const startDay = 0;
    // 演繹：天生異能/特殊體質
    const mechanics: any[] = [];
    if (creation.abilityText && creation.abilityText.trim()) {
      mechanics.push(extrapolateMechanicSync(creation.abilityText, 'ability', 'born'));
    }
    const w: FanrenWorldState = {
      ...emptyWorld(),
      enabled: true,
      clock: dayToGameTime(startDay),
      progressChapter: 1,
      currentLocationId: origin?.startRegionId || '七玄門',
      goldenFinger: creation.goldenFinger,
      goldenFingerRuntime: creation.goldenFinger ? createGoldenFingerRuntime(creation.goldenFinger, startDay) : null,
      mechanics,
      karma: 0,
      daoHeartId: creation.daoHeartId,
      originId: creation.originId,
      npcStates: buildInitialNpcStates(startDay),
      factionStates: Object.fromEntries(CANON_FACTIONS.map((f) => [f.id, { ...f }])),
      memory: [],
    };
    persistWorld(w);
    set({ world: w, lastResult: null });
    // 套用天生異能的永久被動到角色
    const passive = mechanics.reduce((acc, m) => {
      const b = passiveStatBonus(m);
      for (const k of Object.keys(b)) acc[k] = (acc[k] || 0) + (b as any)[k];
      return acc;
    }, {} as Record<string, number>);
    if (mechanics.length) {
      const gs = useGameStore.getState();
      if (Object.keys(passive).length) gs.setPlayer((prev) => (prev ? applyStatDeltas(prev, passive) : prev));
      gs.addLog(`你身具異能「${mechanics[0].name}」：${mechanics[0].summary}`, 'special');
    }
  },

  submitAction: async (rawText) => {
    if (get().busy) return;
    const gameStore = useGameStore.getState();
    const player = gameStore.player;
    const world = get().world;
    if (!player || !world.enabled) return;
    set({ busy: true });
    try {
      const cultivationMult = cultivationMultFromRoots(player.spiritualRoots);
      const outcome = await runTurn(rawText, {
        world,
        player: {
          name: player.name,
          realm: `${player.realm}${player.realmLevel}層`,
          realmType: player.realm,
          exp: player.exp,
          maxExp: player.maxExp,
          hp: player.hp,
          maxHp: player.maxHp,
          spiritStones: player.spiritStones,
          lifespan: player.lifespan,
          luck: player.luck,
          cultivationMult,
          inventoryNames: player.inventory.map((i) => i.name),
        },
      });

      // 套用世界層
      const newMemory = outcome.newMemory ? [...world.memory, outcome.newMemory] : world.memory;
      const nextWorld: FanrenWorldState = { ...world, ...outcome.worldPatch, memory: newMemory };
      persistWorld(nextWorld);
      set({ world: nextWorld, lastResult: outcome.result });

      // 套用玩家數值層（透過 gameStore）—— 含演繹引擎產生的永久屬性增益
      const d = outcome.playerDeltas;
      const anyDelta = d.exp || d.hp || d.spiritStones || d.lifespan || d.attack || d.defense || d.spirit || d.physique || d.speed || d.maxHp || d.luck;
      if (anyDelta) {
        gameStore.setPlayer((prev) => {
          if (!prev) return prev;
          const maxHp = Math.max(1, prev.maxHp + (d.maxHp || 0));
          const exp = Math.max(0, Math.min(prev.maxExp, prev.exp + (d.exp || 0)));
          const hp = Math.max(0, Math.min(maxHp, prev.hp + (d.hp || 0)));
          const spiritStones = Math.max(0, prev.spiritStones + (d.spiritStones || 0));
          const lifespan = Math.max(0, prev.lifespan + (d.lifespan || 0));
          const gameDays = (prev.gameDays || 0) + outcome.result.daysElapsed;
          return {
            ...prev, exp, hp, maxHp, spiritStones, lifespan, gameDays,
            attack: prev.attack + (d.attack || 0),
            defense: prev.defense + (d.defense || 0),
            spirit: prev.spirit + (d.spirit || 0),
            physique: prev.physique + (d.physique || 0),
            speed: prev.speed + (d.speed || 0),
            luck: prev.luck + (d.luck || 0),
          };
        });
      }
      // 物品落地到背包
      if (outcome.itemsGranted && outcome.itemsGranted.length) {
        const grants = outcome.itemsGranted;
        gameStore.setPlayer((prev) => {
          if (!prev) return prev;
          const inv = prev.inventory.map((it) => ({ ...it }));
          for (const g of grants) {
            const ex = inv.find((it) => it.name === g.name && String(it.type) === g.type);
            if (ex) ex.quantity += g.quantity;
            else inv.push({ id: `canon-${g.name}-${Date.now()}-${Math.floor(Math.random() * 1e6)}`, name: g.name, type: g.type as any, description: g.description, quantity: g.quantity, rarity: g.rarity as any } as any);
          }
          return { ...prev, inventory: inv };
        });
        gameStore.addLog(`【獲得】${grants.map((g) => `${g.name}×${g.quantity}（${g.rarity}）`).join('、')}`, 'gain');
      }

      // 敘事入日誌
      gameStore.addLog(outcome.result.narrative, outcome.result.logType);

      // 觸發回合制戰鬥（接既有 TurnBasedBattleModal）
      if (outcome.battle) {
        set({ pendingBattle: { context: outcome.battle.context, divergenceEventId: outcome.battle.divergenceEventId } });
        useUIStore.getState().openTurnBasedBattle({
          adventureType: 'normal',
          riskLevel: outcome.battle.riskLevel,
          realmMinRealm: toRealmType(outcome.battle.realmMinRealm, player.realm),
        });
      }
    } finally {
      set({ busy: false });
    }
  },

  // 解決正史事件介入抉擇
  resolveChoice: (optionId) => {
    const world = get().world;
    const pc = world.pendingChoice;
    if (!pc) return;
    const gameStore = useGameStore.getState();
    const player = gameStore.player;
    const day = world.clock.totalDays;
    const ev = pc.sourceEventId ? getEvent(pc.sourceEventId) : undefined;
    if (!ev) {
      const nw = { ...world, pendingChoice: null };
      persistWorld(nw); set({ world: nw });
      return;
    }
    let patch: Partial<FanrenWorldState> = { pendingChoice: null };

    if (optionId === '__observe__') {
      patch.worldEventStates = { ...world.worldEventStates, [ev.id]: { id: ev.id, fired: true, firedDay: day, diverged: false } };
      patch.memory = [...world.memory, makeMemory(day, `旁觀正史：${ev.title}`, ['正史', ...(ev.involvedNpcIds || [])], true)];
      gameStore.addLog(`你選擇旁觀，未加干涉。${ev.title}依正史軌跡發生：${ev.summary}\n（後續：${ev.consequences.join('；')}）`, 'special');
    } else {
      const iv = (ev.interventions || []).find((i) => i.id === optionId);
      const npcIds = (ev.involvedNpcIds || []).map((n) => getNpc(n)?.id).filter((x): x is string => !!x);
      const dv = markDivergence(world, `介入「${ev.title}」：${iv?.description || ''}`, [ev.id], npcIds, day);
      patch.worldEventStates = dv.worldEventStates;
      patch.npcStates = dv.npcStates;
      patch.divergences = [...world.divergences, { id: `dv-${ev.id}-${day}`, day, cause: iv?.description || '介入', affectedEventIds: [ev.id], affectedNpcIds: npcIds, note: dv.note }];
      patch.memory = [...world.memory, makeMemory(day, `介入正史：${ev.title}`, ['分歧', ev.id, ...(ev.involvedNpcIds || [])], true)];
      gameStore.addLog(`你決意介入「${ev.title}」——${iv?.description || ''}。\n${dv.note}`, 'danger');

      const combat = /出手|阻止|擊殺|斬|攔|戰|奪|搶|護|救|逼|脅|破|殺|伏擊|偷襲/.test(iv?.description || '');
      if (combat && player) {
        const foeName = (ev.involvedNpcIds || [])[0];
        const foeRealm = foeName ? world.npcStates[getNpc(foeName)?.id || '']?.realm : undefined;
        set({ pendingBattle: { context: `介入正史節點「${ev.title}」`, divergenceEventId: ev.id } });
        useUIStore.getState().openTurnBasedBattle({
          adventureType: 'normal',
          riskLevel: '高',
          realmMinRealm: toRealmType(String(foeRealm || ''), player.realm),
        });
      }
    }
    const nw = { ...world, ...patch };
    persistWorld(nw);
    set({ world: nw });
  },

  // 套用戰鬥結果（由 CanonView 的 TurnBasedBattleModal onClose 呼叫）
  applyBattleResult: (result) => {
    const gameStore = useGameStore.getState();
    const pb = get().pendingBattle;
    gameStore.setPlayer((prev) => {
      if (!prev) return prev;
      const hp = Math.max(1, Math.min(prev.maxHp, prev.hp - (result.hpLoss || 0))); // canon 模式不直接致死，重傷敗退
      const exp = Math.max(0, Math.min(prev.maxExp, prev.exp + (result.expChange || 0)));
      const spirit = Math.max(0, prev.spirit + (result.spiritChange || 0));
      const spiritStones = Math.max(0, prev.spiritStones + (result.spiritStones || 0));
      return { ...prev, hp, exp, spirit, spiritStones };
    });
    const ctx = pb?.context ? `（${pb.context}）` : '';
    gameStore.addLog(
      result.victory
        ? `你險勝一場惡鬥${ctx}，氣血耗損但有所精進。`
        : `你不敵敗退，重傷遁走${ctx}，撿回一條性命。`,
      result.victory ? 'gain' : 'danger'
    );
    set({ pendingBattle: null });
  },

  // 戰鬥擊殺 → 執行所有 on:'kill' 機制（如噬靈祕術、奪元大法）
  onKill: () => {
    const gameStore = useGameStore.getState();
    const player = gameStore.player;
    const world = get().world;
    if (!player || !world.enabled || !world.mechanics.length) return;
    const day = world.clock.totalDays;
    const mechanics = world.mechanics.map((m) => ({ ...m, gainedByEffect: { ...m.gainedByEffect }, dailyByEffect: { ...m.dailyByEffect } }));
    let karma = 0;
    const deltas: Record<string, number> = {};
    const notes: string[] = [];
    let any = false;
    for (const spec of mechanics) {
      const r = applyTrigger(spec, 'kill', { day, maxHp: player.maxHp });
      if (!r.applied) continue;
      any = true;
      for (const k of Object.keys(r.deltas)) deltas[k] = (deltas[k] || 0) + (r.deltas as any)[k];
      karma += r.karma;
      if (r.narrative) notes.push(`〔${spec.name}〕${r.narrative}`);
    }
    if (!any) return;
    gameStore.setPlayer((prev) => {
      if (!prev) return prev;
      const base = applyStatDeltas(prev, deltas);
      return { ...base, exp: Math.min(prev.maxExp, prev.exp + (deltas.exp || 0)), spiritStones: prev.spiritStones + (deltas.spiritStones || 0), luck: prev.luck + (deltas.luck || 0) };
    });
    const nextWorld = { ...world, mechanics, karma: world.karma + karma };
    persistWorld(nextWorld);
    set({ world: nextWorld });
    gameStore.addLog(`【戰利・異能】${notes.join('；')}${karma > 0 ? `（業力 +${Math.round(karma)}）` : ''}`, 'danger');
  },

  // 自創/改良：把玩家文本演繹成新機制（異能/功法/丹方）
  createMechanic: async (rawText, kind) => {
    if (get().busy) return;
    const gameStore = useGameStore.getState();
    const world = get().world;
    if (!world.enabled || !rawText.trim()) return;
    set({ busy: true });
    try {
      const spec = await extrapolateMechanic(rawText, kind, `c${world.mechanics.length}`);
      const nextWorld = { ...world, mechanics: [...world.mechanics, spec] };
      persistWorld(nextWorld);
      set({ world: nextWorld });
      const passive = passiveStatBonus(spec);
      if (Object.keys(passive).length) gameStore.setPlayer((prev) => (prev ? applyStatDeltas(prev, passive) : prev));
      if (kind === 'recipe') {
        const rarity = ['普通', '稀有', '传说', '仙品'][Math.min(3, Math.max(0, spec.powerTier - 1))];
        gameStore.setPlayer((prev) =>
          prev ? { ...prev, inventory: [...prev.inventory, { id: `canon-pill-${Date.now()}`, name: spec.name, type: '丹药', description: spec.summary, quantity: 2, rarity, effect: { exp: 80 * spec.powerTier } } as any] } : prev
        );
      }
      const kindLabel = kind === 'art' ? '功法' : kind === 'recipe' ? '丹方' : '異能';
      gameStore.addLog(
        `【演繹・自創${kindLabel}】「${spec.name}」（${spec.category}・第${spec.powerTier}階・${spec.source === 'llm' ? 'AI演繹' : '推演'}）成形！\n${spec.summary}\n限制：${spec.limits.join('；')}\n風險：${spec.risks.join('；')}`,
        'special'
      );
    } finally {
      set({ busy: false });
    }
  },

  reset: () => {
    const w = emptyWorld();
    persistWorld(w);
    set({ world: w, lastResult: null });
  },
}));
