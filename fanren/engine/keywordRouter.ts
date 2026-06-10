/** 關鍵字捕獲 + 意圖解析：把玩家自由文本映射到遊戲機制。 */
import type { IntentType, ParsedIntent, TimeScale } from '../types';
import { DAYS_PER_YEAR, DAYS_PER_MONTH } from './clock';

// 中文數字 → 阿拉伯
const CN_NUM: Record<string, number> = {
  零: 0, 一: 1, 兩: 2, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10, 百: 100, 千: 1000, 万: 10000, 萬: 10000,
};
function parseCnNumber(s: string): number | null {
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  let total = 0;
  let section = 0;
  let num = 0;
  for (const ch of s) {
    const v = CN_NUM[ch];
    if (v === undefined) return null;
    if (v >= 10) {
      if (v === 10000) {
        section = (section + num) * v;
        total += section;
        section = 0;
      } else {
        section += (num || 1) * v;
      }
      num = 0;
    } else {
      num = num * 10 + v;
    }
  }
  return total + section + num;
}

/** 由文本擷取時間跨度（天）。支援「閉關十年」「三個月」「五日」「百年」。 */
export function extractDuration(text: string): { days?: number; scale: TimeScale } {
  const m = text.match(/([\d一二兩三四五六七八九十百千万萬]+)\s*(年|載|個月|月|旬|天|日|甲子)/);
  if (m) {
    let n = parseCnNumber(m[1]) ?? 1;
    const unit = m[2];
    let days: number;
    if (unit === '甲子') days = n * 60 * DAYS_PER_YEAR;
    else if (unit === '年' || unit === '載') days = n * DAYS_PER_YEAR;
    else if (unit === '個月' || unit === '月') days = n * DAYS_PER_MONTH;
    else if (unit === '旬') days = n * 10;
    else days = n; // 天/日
    let scale: TimeScale = 'short';
    if (days >= 3600) scale = 'epoch';
    else if (days >= 180) scale = 'long';
    else if (days >= 15) scale = 'medium';
    else if (days >= 1) scale = 'short';
    else scale = 'instant';
    return { days, scale };
  }
  return { scale: 'short' };
}

interface RouteRule {
  type: IntentType;
  patterns: RegExp[];
  scale?: TimeScale;
}
// 順序即優先序
const RULES: RouteRule[] = [
  { type: 'use_golden_finger', patterns: [/金手指|外掛|發動.*(瓶|外掛|系統)|催熟|系統面板/], scale: 'instant' },
  { type: 'recall', patterns: [/回憶|想起|回想|記得.*嗎|過去發生/], scale: 'instant' },
  { type: 'inspect', patterns: [/查看|看看|狀態|屬性|世界.*(動向|局勢|發生)|打聽|觀察|檢視|地圖|背包/], scale: 'instant' },
  { type: 'cultivate', patterns: [/修煉|修练|閉關|闭关|打坐|吐納|煉化|淬體|沖關|衝關|参悟|參悟|練功/], scale: 'long' },
  { type: 'craft', patterns: [/煉丹|炼丹|煉器|炼器|煉製|炼制|種(植|靈草)|布陣|祭煉/], scale: 'medium' },
  { type: 'travel', patterns: [/前往|趕往|去往|去|前去|移動|趕路|飛往|遁往|離開.*前往|返回/], scale: 'medium' },
  { type: 'fight', patterns: [/攻擊|攻击|出手|斬殺|擊殺|偷襲|交手|戰鬥|战斗|對戰|圍殺|拔劍|動手/], scale: 'short' },
  { type: 'trade', patterns: [/購買|买|購入|出售|賣|販賣|交易|拍賣|兌換/], scale: 'short' },
  { type: 'use_item', patterns: [/服用|服下|使用|取出.*(丹|符|寶)|吃下|飲下|催動.*法寶/], scale: 'instant' },
  { type: 'talk', patterns: [/與|和|對.*說|交談|攀談|拜訪|請教|詢問|打招呼|結交|說服|威脅|求見/], scale: 'instant' },
  { type: 'explore', patterns: [/探索|歷練|历练|查探|搜尋|搜寻|尋找|尋寶|探查|遊歷|游历|闖/], scale: 'short' },
  { type: 'wait', patterns: [/等待|觀望|静观|靜觀|休息|靜待|蟄伏|蛰伏|按兵不動/], scale: 'medium' },
];

/**
 * 解析意圖。context 提供已知關鍵字（NPC/地點/物品名）以做目標擷取。
 */
export function parseIntent(
  rawText: string,
  context?: { npcNames?: string[]; locationNames?: string[]; itemNames?: string[] }
): ParsedIntent {
  const text = (rawText || '').trim();
  const dur = extractDuration(text);
  let matched: RouteRule | null = null;
  for (const rule of RULES) {
    if (rule.patterns.some((p) => p.test(text))) {
      matched = rule;
      break;
    }
  }
  const type: IntentType = matched ? matched.type : text.length ? 'freeform' : 'invalid';

  // 關鍵字捕獲：比對已知名詞
  const targets: string[] = [];
  const pools = [context?.npcNames, context?.locationNames, context?.itemNames];
  for (const pool of pools) {
    if (!pool) continue;
    for (const name of pool) {
      if (name && text.includes(name) && !targets.includes(name)) targets.push(name);
    }
  }

  const scale: TimeScale = dur.days !== undefined ? dur.scale : matched?.scale || 'short';
  const confidence = matched ? (targets.length ? 0.9 : 0.7) : 0.3;
  return {
    type,
    rawText: text,
    targets,
    durationScale: scale,
    durationDays: dur.days,
    confidence,
    notes: matched ? undefined : '未匹配明確意圖，交由 GM 自由裁決',
  };
}
