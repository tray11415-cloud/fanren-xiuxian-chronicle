/** 地圖情報：從爬取的世界地圖反推「勢力地盤」與「地點連結」，供勢力榜與路線使用。 */
import { WORLD_MAP } from '../data/worldMap';
import type { WorldMapNode } from '../types';

const ID2NAME: Record<string, string> = {};
const HAS_CHILD: Record<string, boolean> = {};
for (const n of WORLD_MAP) ID2NAME[n.id] = n.name;
for (const n of WORLD_MAP) if (n.parentId) HAS_CHILD[n.parentId] = true;

/** 是否為「具體地點」（葉節點：底下沒有更細的子地點）。界/大陸/國家等容器節點為 false。 */
export function isConcretePlace(node: WorldMapNode): boolean {
  return !HAS_CHILD[node.id];
}

export interface FactionTerritory {
  name: string;
  locations: string[]; // 控制的地點（中文名）
  score: number; // 地盤分（大區權重較高）
}

let _terr: FactionTerritory[] | null = null;
/** 由地圖各節點的 factions 欄位彙整出勢力地盤排行（大區算 2 分、具體地點算 1 分）。 */
export function factionTerritories(): FactionTerritory[] {
  if (_terr) return _terr;
  const map: Record<string, { locations: Set<string>; score: number }> = {};
  for (const n of WORLD_MAP) {
    if (!n.factions) continue;
    const weight = HAS_CHILD[n.id] ? 2 : 1;
    for (const raw of n.factions) {
      const f = (raw || '').trim();
      if (!f) continue;
      if (!map[f]) map[f] = { locations: new Set(), score: 0 };
      map[f].locations.add(n.name);
      map[f].score += weight;
    }
  }
  _terr = Object.entries(map)
    .map(([name, v]) => ({ name, locations: Array.from(v.locations), score: v.score }))
    .sort((a, b) => b.score - a.score);
  return _terr;
}

/** 某地點的相鄰連結（解析為中文名）。 */
export function connectionNamesOf(locationName: string): string[] {
  const node = WORLD_MAP.find((n) => n.name === locationName);
  if (!node || !node.connections) return [];
  return node.connections.map((c) => ID2NAME[c] || c).filter(Boolean);
}
