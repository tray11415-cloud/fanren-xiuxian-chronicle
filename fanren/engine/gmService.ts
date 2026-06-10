/** GM-AI 服務：以世界規則敘事化回合結果。可用 LLM（依既有 aiConfig/proxy），無金鑰時用確定性後備敘事。 */
import type {
  FanrenWorldState,
  GovernorVerdict,
  NpcReaction,
  ParsedIntent,
} from '../types';
import { getAIConfig, validateAIConfig } from '../../config/aiConfig';
import { formatTime } from './clock';
import { getRegion } from './canonLoader';

export interface GmContext {
  world: FanrenWorldState;
  intent: ParsedIntent;
  verdict: GovernorVerdict;
  daysElapsed: number;
  mechanicalOutcome: string; // 引擎已決定的數值/狀態結果（GM 不得推翻）
  firedSummaries: string[];
  reactions: NpcReaction[];
  playerRealm: string;
  playerName: string;
}

const GM_SYSTEM_PROMPT = `你是修仙文字冒險遊戲《凡人修仙·編年史》的遊戲主持人（GM）。鐵則：
1. 你是「裁判與敘事者」，不是玩家的盟友，也不替玩家開掛。
2. 【數值結果由引擎決定】下方會給你「機制結果」，你只能把它敘事化，絕不可推翻、誇大或新增引擎未授予的收穫（不得讓玩家憑空獲得境界、法寶、靈石或擊敗遠超實力的對手）。
3. 嚴守世界觀（《凡人修仙傳》設定）與玩家「當前進度」，不得洩漏玩家修為/進度尚不該知道的未來秘辛。
4. NPC 有自己的意志與實力；依其性格與境界合理反應。
5. 第二人稱、現在式，文風凝練有畫面感，120–220 字，繁體中文。只輸出敘事，不要列點、不要解釋規則、不要 JSON。`;

/** 組裝給 LLM 的上下文。 */
function buildUserPrompt(ctx: GmContext): string {
  const region = getRegion(ctx.world.currentLocationId);
  const reacts = ctx.reactions.length
    ? ctx.reactions.map((r) => `${r.npcName}：${r.action}`).join('；')
    : '無明顯他人反應';
  const world = ctx.firedSummaries.length ? ctx.firedSummaries.join('；') : '天下暫無大事波及此處';
  return [
    `【時間】${formatTime(ctx.world.clock)}（流逝約${ctx.daysElapsed}日）`,
    `【地點】${region?.name || ctx.world.currentLocationId}：${region?.description || ''}`,
    `【玩家】${ctx.playerName}，修為${ctx.playerRealm}`,
    `【玩家行動】${ctx.intent.rawText}（意圖：${ctx.intent.type}）`,
    ctx.verdict.decision !== 'allow' ? `【裁決】${ctx.verdict.decision}：${ctx.verdict.reason}` : '',
    `【機制結果（不可推翻）】${ctx.mechanicalOutcome}`,
    `【周遭反應】${reacts}`,
    `【天下動向】${world}`,
    `請將以上敘事化為一段沉浸式描述。`,
  ]
    .filter(Boolean)
    .join('\n');
}

/** 後備確定性敘事（無 LLM 或失敗時）。完全可離線遊玩。 */
export function fallbackNarrate(ctx: GmContext): string {
  const region = getRegion(ctx.world.currentLocationId);
  const place = region?.name || ctx.world.currentLocationId;
  const parts: string[] = [];
  if (ctx.verdict.decision === 'reject') {
    return ctx.mechanicalOutcome; // 已含越權回饋
  }
  if (ctx.verdict.decision === 'reframe' && ctx.verdict.reframedAs) {
    parts.push(ctx.verdict.reframedAs);
  }
  let head = `${place}，${formatTime(ctx.world.clock)}。`;
  if (ctx.daysElapsed >= 360) head += `（不知不覺間，${Math.round(ctx.daysElapsed / 360)}載春秋已逝）`;
  else if (ctx.daysElapsed >= 30) head += `（約莫${Math.round(ctx.daysElapsed / 30)}月光陰流轉）`;
  parts.push(head);
  parts.push(ctx.mechanicalOutcome);
  const reacts = ctx.reactions.slice(0, 3).map((r) => `${r.npcName}${r.action}`);
  if (reacts.length) parts.push(reacts.join('；'));
  for (const s of ctx.firedSummaries.slice(0, 3)) parts.push(s);
  return parts.join('\n\n');
}

interface ChatMessage {
  role: 'system' | 'user';
  content: string;
}

/** 呼叫 LLM（OpenAI 相容介面：GLM/SiliconFlow）。失敗則回 null。 */
async function callLLM(messages: ChatMessage[]): Promise<string | null> {
  try {
    const cfg = getAIConfig();
    const v = validateAIConfig(cfg);
    if (!v.valid) return null;
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (cfg.apiKey) headers['Authorization'] = `Bearer ${cfg.apiKey}`;
    const res = await fetch(cfg.apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: cfg.model,
        messages,
        temperature: 0.85,
        max_tokens: 500,
        stream: false,
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const content: string | undefined = data?.choices?.[0]?.message?.content;
    return content ? String(content).trim() : null;
  } catch {
    return null;
  }
}

/** 主敘事入口：優先 LLM，否則後備。永不拋錯。 */
export async function narrate(ctx: GmContext): Promise<{ text: string; usedLLM: boolean }> {
  if (ctx.verdict.decision === 'reject') {
    return { text: ctx.mechanicalOutcome, usedLLM: false };
  }
  const llm = await callLLM([
    { role: 'system', content: GM_SYSTEM_PROMPT },
    { role: 'user', content: buildUserPrompt(ctx) },
  ]);
  if (llm) return { text: llm, usedLLM: true };
  return { text: fallbackNarrate(ctx), usedLLM: false };
}
