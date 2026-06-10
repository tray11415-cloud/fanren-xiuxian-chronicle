import React, { useMemo, useState } from 'react';
import type { CharacterCreation, GoldenFinger } from '../types';
import { ORIGINS, SPIRITUAL_ROOT_PROFILES, DAO_HEARTS } from '../data/creationOptions';
import { GOLDEN_FINGER_ARCHETYPES } from '../data/goldenFingerArchetypes';
import { parseGoldenFinger } from '../engine/goldenFinger';

interface Props {
  onComplete: (creation: CharacterCreation) => void;
  onBack: () => void;
}

const card = 'rounded-xl border border-amber-900/40 bg-zinc-900/60 p-4';
const label = 'text-amber-300/90 font-semibold mb-2 text-sm';
const chip = (active: boolean) =>
  `cursor-pointer rounded-lg border px-3 py-2 text-sm transition ${
    active ? 'border-amber-400 bg-amber-500/20 text-amber-100' : 'border-zinc-700 bg-zinc-800/60 text-zinc-300 hover:border-amber-600'
  }`;

const CanonCreation: React.FC<Props> = ({ onComplete, onBack }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'unset'>('unset');
  const [age, setAge] = useState(16);
  const [appearance, setAppearance] = useState('');
  const [originId, setOriginId] = useState(ORIGINS[0]?.id || '');
  const [rootId, setRootId] = useState(SPIRITUAL_ROOT_PROFILES[3]?.id || SPIRITUAL_ROOT_PROFILES[0]?.id || '');
  const [daoId, setDaoId] = useState(DAO_HEARTS[0]?.id || '');
  const [gfText, setGfText] = useState('');
  const [difficulty, setDifficulty] = useState<'easy' | 'normal' | 'hard'>('normal');

  const origin = ORIGINS.find((o) => o.id === originId);
  const root = SPIRITUAL_ROOT_PROFILES.find((r) => r.id === rootId);

  const gfPreview: GoldenFinger | null = useMemo(
    () => (gfText.trim().length >= 4 ? parseGoldenFinger(gfText, name) : null),
    [gfText, name]
  );

  const canStart = name.trim().length >= 1 && !!origin && !!root;

  const handleStart = () => {
    if (!canStart) return;
    const creation: CharacterCreation = {
      name: name.trim(),
      appearance: { gender, age, descriptors: [], freeText: appearance.trim() || undefined },
      originId,
      spiritualRootId: rootId,
      daoHeartId: daoId,
      startingArtIds: origin?.startingArtIds || [],
      startingItemRefs: origin?.startingItemRefs || [],
      goldenFinger: gfPreview,
      difficulty,
    };
    onComplete(creation);
  };

  return (
    <div className="min-h-screen w-full overflow-y-auto bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-zinc-100">
      <div className="mx-auto max-w-3xl px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-300">凡人修仙 · 編年史 — 開局創角</h1>
          <button onClick={onBack} className="text-sm text-zinc-400 hover:text-amber-300">← 返回</button>
        </div>
        <p className="mb-5 text-sm text-zinc-400">
          世界依《凡人修仙傳》正史自然演化。你的每個抉擇都可能改寫某人的命運，但你無法憑空成神——一切力量皆有代價。
        </p>

        <div className="space-y-4">
          {/* 道號 + 外貌 */}
          <div className={card}>
            <div className={label}>道號與外貌</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="輸入你的道號（如：韓某、葉凡…）"
              className="mb-3 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm outline-none focus:border-amber-500"
            />
            <div className="mb-3 flex gap-2">
              {(['male', 'female', 'unset'] as const).map((g) => (
                <div key={g} className={chip(gender === g)} onClick={() => setGender(g)}>
                  {g === 'male' ? '男' : g === 'female' ? '女' : '不拘'}
                </div>
              ))}
              <div className="ml-auto flex items-center gap-2 text-sm text-zinc-400">
                初始年齡
                <input type="number" min={10} max={120} value={age} onChange={(e) => setAge(Number(e.target.value) || 16)} className="w-16 rounded border border-zinc-700 bg-zinc-800 px-2 py-1" />
              </div>
            </div>
            <input
              value={appearance}
              onChange={(e) => setAppearance(e.target.value)}
              placeholder="外貌描述（選填，如：面容普通、雙目卻有神…）"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm outline-none focus:border-amber-500"
            />
          </div>

          {/* 出身 */}
          <div className={card}>
            <div className={label}>出身（決定起點地域、境界、資源與機緣）</div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {ORIGINS.map((o) => (
                <div key={o.id} className={chip(originId === o.id)} onClick={() => setOriginId(o.id)}>
                  <div className="font-semibold">{o.name} <span className="text-xs text-amber-400/80">難度{o.difficulty}</span></div>
                  <div className="mt-1 text-xs text-zinc-400 line-clamp-2">{o.description}</div>
                </div>
              ))}
            </div>
            {origin && (
              <div className="mt-2 text-xs text-zinc-400">
                起於【{origin.startRegionId}】· {String(origin.startRealm)}{origin.startRealmLevel}層 · 靈石{origin.spiritStones}
              </div>
            )}
          </div>

          {/* 靈根 */}
          <div className={card}>
            <div className={label}>靈根資質（決定修煉速度上限）</div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SPIRITUAL_ROOT_PROFILES.map((r) => (
                <div key={r.id} className={chip(rootId === r.id)} onClick={() => setRootId(r.id)}>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-amber-400/80">×{r.cultivationMult.toFixed(1)} 修煉</div>
                </div>
              ))}
            </div>
            {root && <div className="mt-2 text-xs text-zinc-400">{root.description}</div>}
          </div>

          {/* 道心 */}
          <div className={card}>
            <div className={label}>道心</div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {DAO_HEARTS.map((d) => (
                <div key={d.id} className={chip(daoId === d.id)} onClick={() => setDaoId(d.id)}>
                  <div className="font-semibold">{d.name}</div>
                  <div className="text-xs text-zinc-400 line-clamp-2">{d.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 金手指 */}
          <div className={card}>
            <div className={label}>自定義金手指（你的本命外掛 — 用文字描述，系統會凝練並平衡它）</div>
            <textarea
              value={gfText}
              onChange={(e) => setGfText(e.target.value)}
              rows={3}
              placeholder="例：我撿到一個神秘小綠瓶，能催熟靈藥藥草……（描述越克制、越具體，效率越好；越誇大則代價越高、限制越多）"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm outline-none focus:border-amber-500"
            />
            <div className="mt-2 flex flex-wrap gap-1">
              {GOLDEN_FINGER_ARCHETYPES.slice(0, 6).map((a) => (
                <button key={a.id} onClick={() => setGfText(a.rawText || a.description)} className="rounded border border-zinc-700 bg-zinc-800/60 px-2 py-1 text-xs text-zinc-300 hover:border-amber-600">
                  範本：{a.name}
                </button>
              ))}
            </div>
            {gfPreview && (
              <div className="mt-3 rounded-lg border border-amber-700/40 bg-amber-950/30 p-3 text-xs">
                <div className="font-semibold text-amber-300">「{gfPreview.name}」 · {gfPreview.category} · 強度階 {gfPreview.powerTier}/5</div>
                <div className="mt-1 text-zinc-300">{gfPreview.description}</div>
                <div className="mt-1 text-zinc-400">能量 {gfPreview.energyMax}（每日回{gfPreview.energyRegenPerDay}，每次耗{gfPreview.energyCostPerUse}）· 每次業力+{gfPreview.karmaPerUse}</div>
                <div className="mt-1 text-rose-300/80">限制：{gfPreview.limits.join('；')}</div>
                <div className="text-rose-300/60">盲區：{gfPreview.blindSpots.join('；')}</div>
              </div>
            )}
          </div>

          {/* 難度 */}
          <div className={card}>
            <div className={label}>難度</div>
            <div className="flex gap-2">
              {(['easy', 'normal', 'hard'] as const).map((d) => (
                <div key={d} className={chip(difficulty === d)} onClick={() => setDifficulty(d)}>
                  {d === 'easy' ? '輕鬆' : d === 'normal' ? '普通' : '凡人逆襲（困難）'}
                </div>
              ))}
            </div>
          </div>

          <button
            disabled={!canStart}
            onClick={handleStart}
            className={`w-full rounded-xl py-3 text-lg font-bold transition ${
              canStart ? 'bg-amber-500 text-black hover:bg-amber-400' : 'cursor-not-allowed bg-zinc-800 text-zinc-500'
            }`}
          >
            踏入仙途
          </button>
        </div>
      </div>
    </div>
  );
};

export default CanonCreation;
