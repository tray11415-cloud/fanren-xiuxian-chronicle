import React from 'react';
import type { FanrenWorldState } from '../types';
import type { PlayerStats } from '../../types';
import { SCHEDULED_EVENTS, spoilerBudget } from '../engine/canonLoader';
import { formatTime } from '../engine/clock';
import { ORIGINS, DAO_HEARTS } from '../data/creationOptions';

interface Props {
  world: FanrenWorldState;
  player: PlayerStats;
  onClose: () => void;
}

const section = 'rounded-xl border border-zinc-800 bg-zinc-900/60 p-3';
const h = 'mb-2 text-sm font-semibold text-amber-300';

const ChroniclePanel: React.FC<Props> = ({ world, player, onClose }) => {
  const origin = ORIGINS.find((o) => o.id === world.originId);
  const dao = DAO_HEARTS.find((d) => d.id === world.daoHeartId);
  const budget = spoilerBudget(world.progressChapter);
  const importantMemories = world.memory.filter((m) => m.important).slice(-15);
  const diverged = SCHEDULED_EVENTS.filter((e) => world.worldEventStates[e.id]?.diverged);
  const fired = SCHEDULED_EVENTS.filter((e) => world.worldEventStates[e.id]?.fired && !world.worldEventStates[e.id]?.diverged);
  const upcoming = SCHEDULED_EVENTS.filter(
    (e) => e.scheduledDay > world.clock.totalDays && e.spoilerLevel <= budget && !world.worldEventStates[e.id]?.fired
  ).slice(0, 6);
  const factions = Object.values(world.factionStates || {}).sort((a, b) => b.power - a.power).slice(0, 10);
  const gf = world.goldenFinger;
  const gfRt = world.goldenFingerRuntime;
  const mechanics = world.mechanics || [];
  const knownNpcs = Object.values(world.npcStates || {}).filter((n) => n.knownToPlayer);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4" onClick={onClose}>
      <div className="my-4 w-full max-w-3xl space-y-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-amber-300">📜 我的修仙史 · 天下大勢</h2>
          <button onClick={onClose} className="rounded-lg border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:border-amber-500">關閉</button>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* 此身 */}
          <div className={section}>
            <div className={h}>此身來歷</div>
            <div className="space-y-1 text-sm text-zinc-300">
              <div><span className="text-zinc-500">道號：</span>{player.name}（{player.realm}{player.realmLevel}層）</div>
              <div><span className="text-zinc-500">出身：</span>{origin?.name || '（未知）'}</div>
              <div><span className="text-zinc-500">道心：</span>{dao?.name || '（未定）'}</div>
              <div><span className="text-zinc-500">壽元：</span>{Math.floor(player.lifespan)}/{player.maxLifespan} 年</div>
              <div><span className="text-zinc-500">當世：</span>{formatTime(world.clock)}（進度約第{world.progressChapter}章）</div>
              {gf && gfRt && (
                <div><span className="text-zinc-500">金手指：</span>{gf.name}（{['一','二','三','四','五'][gf.powerTier - 1]}階；用 {gfRt.usesTotal} 次）</div>
              )}
            </div>
          </div>

          {/* 改寫的命運 */}
          <div className={section}>
            <div className={h}>✦ 你改寫的命運（{diverged.length}）</div>
            {diverged.length === 0 ? (
              <div className="text-xs text-zinc-500">你尚未撼動正史的軌跡。世界仍依原貌流轉。</div>
            ) : (
              <div className="space-y-1 text-xs text-amber-200/90">
                {diverged.map((e) => (
                  <div key={e.id}>· {e.title}</div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 演繹異能 / 自創 */}
        {mechanics.length > 0 && (
          <div className={section}>
            <div className={h}>✦ 本命異能 / 自創（演繹引擎）　<span className="text-xs text-rose-300/70">業力 {Math.round(world.karma || 0)}</span></div>
            <div className="space-y-1.5 text-xs text-zinc-300">
              {mechanics.map((m) => (
                <div key={m.id} className="border-l-2 border-rose-700/50 pl-2">
                  <span className="font-semibold text-rose-200">{m.name}</span>
                  <span className="text-zinc-500"> · {m.category} · 第{m.powerTier}階 · {m.kind === 'art' ? '功法' : m.kind === 'recipe' ? '丹方' : '異能'}{m.source === 'llm' ? ' · AI演繹' : ''}</span>
                  <span className="text-zinc-400">　{m.summary}</span>
                  {m.usesTotal > 0 && <span className="text-zinc-600">（已施展 {m.usesTotal} 次）</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 生平記事 */}
        <div className={section}>
          <div className={h}>生平記事（要事）</div>
          {importantMemories.length === 0 ? (
            <div className="text-xs text-zinc-500">仙途方啟，尚無要事入冊。</div>
          ) : (
            <div className="space-y-1 text-xs text-zinc-300">
              {importantMemories.map((m, i) => (
                <div key={i}>· 第{Math.floor(m.day / 360) + 1}年　{m.summary}</div>
              ))}
            </div>
          )}
        </div>

        {/* 天下大勢 */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className={section}>
            <div className={h}>🌐 天下大勢</div>
            <div className="mb-2 text-xs text-zinc-400">已成正史（{fired.length}）：</div>
            <div className="mb-2 space-y-0.5 text-xs text-zinc-300">
              {fired.slice(-6).map((e) => <div key={e.id}>· {e.title}</div>)}
              {fired.length === 0 && <div className="text-zinc-500">天下暫無大事。</div>}
            </div>
            <div className="mb-1 text-xs text-zinc-400">山雨欲來：</div>
            <div className="space-y-0.5 text-xs text-amber-200/80">
              {upcoming.map((e) => <div key={e.id}>· 約第{Math.floor(e.scheduledDay / 360) + 1}年　{e.title}（{e.locationId}）</div>)}
              {upcoming.length === 0 && <div className="text-zinc-500">前路未明。</div>}
            </div>
          </div>

          <div className={section}>
            <div className={h}>勢力榜</div>
            <div className="space-y-1 text-xs text-zinc-300">
              {factions.map((f) => (
                <div key={f.id} className="flex items-center gap-2">
                  <span className="w-20 shrink-0 truncate">{f.name}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded bg-zinc-800">
                    <span className="block h-full bg-gradient-to-r from-amber-700 to-amber-400" style={{ width: `${Math.min(100, f.power)}%` }} />
                  </span>
                  <span className="w-8 text-right text-zinc-500">{f.power}</span>
                </div>
              ))}
            </div>
            {knownNpcs.length > 0 && (
              <div className="mt-2 border-t border-zinc-800 pt-2 text-xs text-zinc-400">
                相識：{knownNpcs.map((n) => n.id).slice(0, 10).join('、')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChroniclePanel;
