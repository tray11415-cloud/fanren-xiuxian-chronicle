/**
 * 韓立正史自走（canon autopilot）：以試煉台帳＋編年史，回答「不介入推演時，韓立此刻走到哪、闖哪道關、該是什麼境界」。
 * 三用：
 *  1. 自走驗證（scripts/sim_no_intervention.ts）——確認韓立依序通過全部試煉、境界曲線正確、終抵偷渡靈界。
 *  2. 敘事框定——背景演化以「韓立正闖某試煉」凸顯其行跡與修仙之難（reminderRecall / worldEvolution）。
 *  3. 遊戲性鉤子——玩家與韓立同處一地、同闖一關時，據 realmGate 給門檻。
 */
import type { CanonTrial } from '../types';
import { CANON_TRIALS } from '../data/canonTrials';
import { getNpc, resolveNpcAtDay, realmRank } from './canonLoader';
import { chapterToDay, dayToChapter } from './clock';

export interface TrialAtDay extends CanonTrial {
  startDay: number;
  endDay: number;
}

// 試煉依世界日索引（一次性）
const SCHEDULED_TRIALS: TrialAtDay[] = CANON_TRIALS.map((t) => ({
  ...t,
  startDay: chapterToDay(t.chapterStart),
  endDay: chapterToDay(t.chapterEnd),
})).sort((a, b) => a.startDay - b.startDay);

/** 韓立此世界日正在闖的試煉（取章窗涵蓋當日者；多個取最晚開始者）。 */
export function hanliCurrentTrial(day: number): TrialAtDay | undefined {
  let chosen: TrialAtDay | undefined;
  for (const t of SCHEDULED_TRIALS) {
    if (day >= t.startDay && day <= t.endDay) chosen = t; // 後者覆蓋前者 → 最晚開始
  }
  return chosen;
}

/** 截至此日，韓立已「進入過」（startDay 已過）的試煉清單。 */
export function hanliTrialsEntered(day: number): TrialAtDay[] {
  return SCHEDULED_TRIALS.filter((t) => t.startDay <= day);
}

/** 下一道尚未到來的試煉。 */
export function hanliNextTrial(day: number): TrialAtDay | undefined {
  return SCHEDULED_TRIALS.find((t) => t.startDay > day);
}

/** 韓立此日的正史境界（取自編年史窗格）。 */
export function hanliRealmAt(day: number): string {
  const hanli = getNpc('韓立');
  if (!hanli) return '凡人';
  return String(resolveNpcAtDay(hanli, day).realm || '凡人');
}

/** 韓立此日的正史所在地。 */
export function hanliLocationAt(day: number): string {
  const hanli = getNpc('韓立');
  if (!hanli) return '未知';
  return resolveNpcAtDay(hanli, day).locationId;
}

/**
 * 背景敘事：一句話描述韓立此刻的正史行跡（供「天下事/風聲」框定）。
 * 依進度劇透預算（progressChapter）過濾——不洩漏玩家進度之後的關隘。
 */
export function hanliFlavorAt(day: number, progressChapter: number): string | undefined {
  const t = hanliCurrentTrial(day);
  if (!t) return undefined;
  // 劇透門檻：韓立的試煉若遠超玩家當前進度（>30章），不主動劇透
  if (t.chapterStart > progressChapter + 30) return undefined;
  const realm = hanliRealmAt(day);
  return `風聞「火魔」韓立正於${t.locationId}一帶歷「${t.title}」之劫（${realm}），${t.peril}`;
}

/** 偷渡靈界終局試煉（人界篇終點）。 */
export function smuggleTrial(): TrialAtDay | undefined {
  return SCHEDULED_TRIALS.find((t) => t.kind === '渡劫' && /節點|偷渡|靈界/.test(t.title));
}

/**
 * 玩家是否「撞上」韓立正在闖的試煉（同一地、同一時窗）——供遊戲性鉤子。
 * 回傳該試煉與玩家是否達到 realmGate。
 */
export function playerAtHanliTrial(
  day: number,
  playerLocationId: string,
  playerRealm: string,
  sameArea: (a: string, b: string) => boolean
): { trial: TrialAtDay; meetsGate: boolean } | undefined {
  const t = hanliCurrentTrial(day);
  if (!t) return undefined;
  if (!sameArea(t.locationId, playerLocationId)) return undefined;
  const meetsGate = realmRank(playerRealm) >= realmRank(t.realmGate);
  return { trial: t, meetsGate };
}

/** 全部試煉（供 UI / 驗證列出）。 */
export function allTrials(): TrialAtDay[] {
  return SCHEDULED_TRIALS;
}

/** 由進度章號粗估韓立應已通過的試煉數（驗證/UI 用）。 */
export function trialsClearedByChapter(chapter: number): number {
  return SCHEDULED_TRIALS.filter((t) => t.chapterEnd <= chapter).length;
}

export { dayToChapter };
