/**
 * 宗派聯盟與宗門間「合縱連橫」關係查詢（純讀 FactionState.allianceId / relations；不寫存檔）。
 * 優先讀世界執行期狀態 world.factionStates（含演化後的關係變動），無則退回靜態 CANON_FACTIONS。
 */
import type { FanrenWorldState, SectRelationKind, FactionState } from '../types';
import { CANON_FACTIONS } from '../data/factions';

function states(world?: FanrenWorldState): FactionState[] {
  if (world?.factionStates) return Object.values(world.factionStates) as FactionState[];
  return CANON_FACTIONS;
}

/** 某聯盟的成員 faction id 清單。 */
export function allianceMembers(allianceId: string, world?: FanrenWorldState): string[] {
  return states(world).filter((f) => f.allianceId === allianceId).map((f) => f.id);
}

/** 某宗門所屬聯盟 id（無則 undefined）。 */
export function allianceOf(factionId: string, world?: FanrenWorldState): string | undefined {
  return states(world).find((f) => f.id === factionId || f.name === factionId)?.allianceId;
}

function relationsOf(factionId: string, world?: FanrenWorldState): Record<string, SectRelationKind> {
  return (states(world).find((f) => f.id === factionId || f.name === factionId)?.relations || {}) as Record<string, SectRelationKind>;
}

/** 兩宗之間的關係（雙向 fallback：A→B 或 B→A 任一命中）。 */
export function relationBetween(a: string, b: string, world?: FanrenWorldState): SectRelationKind | undefined {
  return relationsOf(a, world)[b] ?? relationsOf(b, world)[a];
}

/** 某宗的盟友（同盟/聯姻）。 */
export function alliesOf(factionId: string, world?: FanrenWorldState): string[] {
  const r = relationsOf(factionId, world);
  return Object.entries(r).filter(([, k]) => k === 'ally' || k === 'marriage').map(([id]) => id);
}

/** 某宗的敵對方（世仇/臥底）。 */
export function enemiesOf(factionId: string, world?: FanrenWorldState): string[] {
  const r = relationsOf(factionId, world);
  return Object.entries(r).filter(([, k]) => k === 'enemy' || k === 'infiltrator').map(([id]) => id);
}

/** 全部聯盟 → 成員，供 UI 分組（排除以聯盟自身為成員的自指）。 */
export function allAlliances(world?: FanrenWorldState): { allianceId: string; members: string[] }[] {
  const ids = Array.from(new Set(states(world).map((f) => f.allianceId).filter(Boolean))) as string[];
  return ids.map((id) => ({ allianceId: id, members: allianceMembers(id, world).filter((m) => m !== id) }));
}

/** 關係類型中文標籤（敘事/UI 用）。 */
export const RELATION_LABEL: Record<SectRelationKind, string> = {
  ally: '同盟',
  rival: '競爭',
  enemy: '世仇',
  vassal: '附庸',
  infiltrator: '臥底',
  marriage: '聯姻',
};
