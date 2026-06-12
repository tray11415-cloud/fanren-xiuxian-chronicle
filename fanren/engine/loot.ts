/** 正史探索掉落：由 canonItems（原著寶物庫）產生符合地域層級／境界的真實物品。 */
import { realmRank } from './canonLoader';
import { CANON_ITEMS } from '../data/canonItems';
import type { CanonItem } from '../types';

export interface ItemGrant {
  name: string;
  type: '草药' | '丹药' | '材料' | '法宝'; // 對應既有 ItemType 字串
  rarity: '普通' | '稀有' | '传说' | '仙品';
  quantity: number;
  description: string;
}

interface LootDef {
  name: string;
  type: ItemGrant['type'];
  rarity: ItemGrant['rarity'];
  desc: string;
  minRank: number;
}

function mapType(kind: string): ItemGrant['type'] {
  if (kind === '丹药') return '丹药';
  if (kind === '材料') return '材料';
  if (kind === '灵植') return '草药';
  return '法宝'; // 法宝/奇物/傀儡/符箓
}
function mapRarity(r: string): ItemGrant['rarity'] {
  if (r === '仙品') return '仙品';
  if (r === '传说') return '传说';
  if (r === '稀有') return '稀有';
  return '普通'; // 普通/精良
}
const TIER_RANK: Record<string, number> = { 炼气: 0, 筑基: 2, 金丹: 4, 元婴: 6, 化神: 8, 炼虚以上: 10, 通用: 0 };

// 本命至寶/金手指級：不入隨機掉落，僅由正史事件/機緣/煉製取得
const UNIQUE_BLOCKLIST = new Set([
  '掌天瓶', '神秘小瓶', '玄天如意刃', '青竹蜂雲劍', '虛天鼎', '噬金蟲', '落寶金錢', '兩儀環', '三焰扇',
  '元磁神光（元磁神山）', '元磁神光', '元磁山', '乾藍冰焰', '乾藍冰珠', '玄天斬靈劍', '風雷翅', '鬼羅幡', '八靈尺', '玄天果實',
]);

function isExplorable(i: CanonItem): boolean {
  if (UNIQUE_BLOCKLIST.has(i.name)) return false;
  // 仙品法寶過於逆天，不隨機掉
  if (i.rarity === '仙品' && i.kind === '法宝') return false;
  return true;
}

const POOL: LootDef[] = CANON_ITEMS.filter(isExplorable).map((i) => ({
  name: i.name,
  type: mapType(i.kind),
  rarity: mapRarity(i.rarity),
  desc: i.effect,
  minRank: TIER_RANK[i.realmTier] ?? 0,
}));

/** 依地域層級與玩家境界、氣運擲取探索掉落（0–2 件）。 */
export function rollExploreLoot(_tier: string, playerRealm: string, luck: number): ItemGrant[] {
  const rank = realmRank(playerRealm);
  const candidates = POOL.filter((d) => d.minRank <= rank + 2); // 允許略高一階的驚喜
  if (!candidates.length) return [];
  const out: ItemGrant[] = [];
  const baseChance = 0.55 + Math.min(0.3, (luck || 0) / 200);
  if (Math.random() < baseChance) out.push(pick(candidates, rank));
  if (Math.random() < baseChance * 0.4) out.push(pick(candidates, rank));
  return out;
}

function pick(cands: LootDef[], rank: number): ItemGrant {
  const weighted = cands.map((d) => ({ d, w: 1 / (1 + Math.abs(d.minRank - rank)) + (d.rarity === '仙品' ? 0.01 : 0) }));
  const total = weighted.reduce((s, x) => s + x.w, 0);
  let r = Math.random() * total;
  let chosen = weighted[0].d;
  for (const x of weighted) {
    r -= x.w;
    if (r <= 0) { chosen = x.d; break; }
  }
  return { name: chosen.name, type: chosen.type, rarity: chosen.rarity, quantity: 1, description: chosen.desc };
}

/** 金手指催熟靈藥（掌天瓶式）→ 產出一株高階原著靈植/靈藥。 */
export function catalyzeHerb(playerRealm: string, magnitude: number): ItemGrant {
  const rank = realmRank(playerRealm);
  const herbs = POOL.filter((d) => d.type === '草药' && d.minRank <= rank + 3);
  const best = herbs.sort((a, b) => b.minRank - a.minRank)[0] || POOL[0];
  return { name: best.name, type: '草药', rarity: best.rarity, quantity: Math.max(1, Math.round(magnitude / 2)), description: `（瓶中催熟而得）${best.desc}` };
}
