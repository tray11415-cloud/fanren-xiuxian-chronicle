import React from 'react';

interface Props {
  onCanon: () => void;
  onClassic: () => void;
}

const ModeChooser: React.FC<Props> = ({ onCanon, onClassic }) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-zinc-900 px-4 text-zinc-100">
      <div className="w-full max-w-2xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-amber-300">修仙文字遊戲</h1>
        <p className="mb-8 text-center text-sm text-zinc-400">選擇你的修仙方式</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            onClick={onCanon}
            className="group rounded-2xl border border-amber-700/50 bg-gradient-to-b from-amber-950/40 to-zinc-900 p-6 text-left transition hover:border-amber-400 hover:shadow-lg hover:shadow-amber-900/30"
          >
            <div className="mb-2 text-xl font-bold text-amber-300">凡人 · 編年史模式</div>
            <div className="text-sm text-zinc-300">
              以《凡人修仙傳》正史為骨架的文字冒險。自定義金手指、動態回合、世界隨時間自然演化、可改寫他人命運。輸入文字驅動你的仙途。
            </div>
            <div className="mt-3 text-xs text-amber-400/70">★ 全新主玩法</div>
          </button>
          <button
            onClick={onClassic}
            className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-6 text-left transition hover:border-zinc-500"
          >
            <div className="mb-2 text-xl font-bold text-zinc-200">經典 · 放置歷練模式</div>
            <div className="text-sm text-zinc-400">
              原有的點擊歷練／修煉／突破玩法，AI 隨機事件、裝備、靈寵、宗門、煉丹一應俱全。
            </div>
            <div className="mt-3 text-xs text-zinc-500">既有玩法</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModeChooser;
