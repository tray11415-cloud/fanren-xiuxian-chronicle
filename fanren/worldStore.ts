/** 凡人編年史 世界層狀態（Zustand）。與既有 gameStore 協作：世界/時間/NPC/金手指在此，玩家數值仍在 gameStore。 */
import { create } from 'zustand';
import type { CharacterCreation, FanrenWorldState, TurnResult } from './types';
import { dayToGameTime } from './engine/clock';
import { buildInitialNpcStates } from './engine/canonLoader';
import { runTurn } from './engine/turnEngine';
import { createGoldenFingerRuntime } from './engine/goldenFinger';
import { CANON_FACTIONS } from './data/factions';
import { ORIGINS, SPIRITUAL_ROOT_PROFILES } from './data/creationOptions';
import { useGameStore } from '../store/gameStore';

const WORLD_KEY = 'fanren_world_v1';

function emptyWorld(): FanrenWorldState {
  return {
    enabled: false,
    clock: dayToGameTime(0),
    progressChapter: 1,
    currentLocationId: '七玄門',
    goldenFinger: null,
    goldenFingerRuntime: null,
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

interface WorldStoreState {
  world: FanrenWorldState;
  busy: boolean;
  lastResult: TurnResult | null;
  setWorld: (w: FanrenWorldState | ((p: FanrenWorldState) => FanrenWorldState)) => void;
  initCanonWorld: (creation: CharacterCreation) => void;
  submitAction: (rawText: string) => Promise<void>;
  reset: () => void;
}

export const useWorldStore = create<WorldStoreState>((set, get) => ({
  world: loadWorld(),
  busy: false,
  lastResult: null,

  setWorld: (wOrFn) =>
    set((s) => {
      const next = typeof wOrFn === 'function' ? (wOrFn as (p: FanrenWorldState) => FanrenWorldState)(s.world) : wOrFn;
      persistWorld(next);
      return { world: next };
    }),

  initCanonWorld: (creation) => {
    const origin = ORIGINS.find((o) => o.id === creation.originId) || ORIGINS[0];
    const startDay = 0;
    const w: FanrenWorldState = {
      ...emptyWorld(),
      enabled: true,
      clock: dayToGameTime(startDay),
      progressChapter: 1,
      currentLocationId: origin?.startRegionId || '七玄門',
      goldenFinger: creation.goldenFinger,
      goldenFingerRuntime: creation.goldenFinger ? createGoldenFingerRuntime(creation.goldenFinger, startDay) : null,
      daoHeartId: creation.daoHeartId,
      originId: creation.originId,
      npcStates: buildInitialNpcStates(startDay),
      factionStates: Object.fromEntries(CANON_FACTIONS.map((f) => [f.id, { ...f }])),
      memory: [],
    };
    persistWorld(w);
    set({ world: w, lastResult: null });
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
          exp: player.exp,
          maxExp: player.maxExp,
          hp: player.hp,
          maxHp: player.maxHp,
          spiritStones: player.spiritStones,
          lifespan: player.lifespan,
          cultivationMult,
          inventoryNames: player.inventory.map((i) => i.name),
        },
      });

      // 套用世界層
      const newMemory = outcome.newMemory ? [...world.memory, outcome.newMemory] : world.memory;
      const nextWorld: FanrenWorldState = { ...world, ...outcome.worldPatch, memory: newMemory };
      persistWorld(nextWorld);
      set({ world: nextWorld, lastResult: outcome.result });

      // 套用玩家數值層（透過 gameStore）
      const d = outcome.playerDeltas;
      if (d.exp || d.hp || d.spiritStones || d.lifespan) {
        gameStore.setPlayer((prev) => {
          if (!prev) return prev;
          const exp = Math.max(0, Math.min(prev.maxExp, prev.exp + (d.exp || 0)));
          const hp = Math.max(0, Math.min(prev.maxHp, prev.hp + (d.hp || 0)));
          const spiritStones = Math.max(0, prev.spiritStones + (d.spiritStones || 0));
          const lifespan = Math.max(0, prev.lifespan + (d.lifespan || 0));
          const gameDays = (prev.gameDays || 0) + outcome.result.daysElapsed;
          return { ...prev, exp, hp, spiritStones, lifespan, gameDays };
        });
      }
      // 敘事入日誌
      gameStore.addLog(outcome.result.narrative, outcome.result.logType);
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
