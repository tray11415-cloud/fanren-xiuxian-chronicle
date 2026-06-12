<div align="center">

# 凡人修仙編年史

**一款忠於忘語《凡人修仙傳》的單機仙俠文字冒險遊戲**

改編自開源引擎 [JeasonLoop/react-xiuxian-game](https://github.com/JeasonLoop/react-xiuxian-game)（MIT）

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Electron](https://img.shields.io/badge/Electron-33-2C2E3B?logo=electron)
![License](https://img.shields.io/badge/License-MIT-green.svg)

</div>

---

## 🙏 致原作者的感謝

本作的遊戲引擎（回合制戰鬥、存檔、屬性系統等）**分支自 [JeasonLoop](https://github.com/JeasonLoop) 開源的 [react-xiuxian-game（修仙文字游戏）](https://github.com/JeasonLoop/react-xiuxian-game)**，依其 **MIT 授權**改編。沒有 JeasonLoop 打下的扎實底座，就沒有這個專案。在此向原作者致上最深的謝意 🙏

本作在原引擎之上，重寫了前端與世界資料，並新增了一整套「忠於原著」的劇情、境界、試煉與人物結局系統（詳見下文）。原 MIT 著作權聲明已完整保留於 [`LICENSE`](LICENSE)。

## ⚖️ 著作權聲明

- 本專案的 **程式碼、工具與原創的「摘要式劇情資料」** 採 **MIT 授權**。
- 本作為 **非商業同人作品**，靈感取自 **忘語《凡人修仙傳》**。MIT 授權**不涵蓋**原著本身；原著全文與原創表達之一切權利均屬 **忘語** 及權利人所有。
- **本倉庫不含原著任何逐字文本**；遊戲內的劇情資料皆為轉化性的「章節摘要／編年」，用於驅動遊戲推演。
- 若權利人有異議，相關內容將於通知後移除。

---

## 📖 這是什麼

玩家以**自由文字輸入**行動，由回合引擎解析意圖、推進時間與世界狀態，在一個忠於原著設定的修仙世界裡，自煉氣散修一路走向飛升。世界以韓立的正史為「活的背景」自行演化——**即使玩家完全不介入，韓立也會照原著一步步走完整條路、最終偷渡靈界**。

## ✨ 核心特色

- **忠於原著的境界體系**：煉氣→築基→結丹→元嬰→化神→煉虛→合體→大乘→飛升，各境壽元、突破考驗、飛行方式、本命法寶、天地法則之限皆依原著考據。
- **逐章劇情編年（canon beats）**：人界 46 弧（章 1–1265）逐章策展為近千個細節節拍，劇情不再「一行帶過」。
- **韓立自走主線**：不介入推演下，韓立依正史自動歷練、突破、偷渡空間節點入靈界（含與冰鳳互下禁制的偷渡橋段）。
- **二十四道生死試煉**：自炼骨崖入門到闖空間節點，每道試煉有境界門檻；玩家想分一杯羹，須面對同等險厄——還原「謀存」的緊張感。
- **主要人物結局**：兩百多位要角依原著於正確時點走完各自結局（隕落／飛升／封印／退隱…）。
- **活的世界**：五十萬生靈的境界金字塔、散修的繁衍殞落、程序生成的野怪／散修／勢力，使世界「實有其眾」。
- **創角 point-buy**：天命等級決定點數，自由分配五行靈根、悟性、心性與戰鬥屬性，從「五行偽靈根（韓立之姿）」到「大道之子」皆可。
- **永久死亡**的硬核單機體驗；簡繁雙語顯示。

## 🛠 技術堆疊

React 19 · TypeScript 5.8 · Vite 6 · Zustand · Tailwind · Electron 33（桌面封裝）

## 🚀 執行方式

```bash
# 需要 Node.js 18+
npm install

# 開發模式（瀏覽器）
npm run dev

# 建置網頁版
npm run build

# 打包 Windows 桌面版 exe（Electron）
npm run build:exe
```

> 桌面封裝使用相對路徑（`--base=./`）以利 Electron 的 `file://` 載入。

## 📁 專案結構（重點）

| 路徑 | 內容 |
|---|---|
| `fanren/` | 忠於原著的「canon 模式」前端與引擎（玩家唯一入口） |
| `fanren/engine/` | 回合引擎、世界演化、正史守門、韓立自走、試煉、境界/壽元 |
| `fanren/data/` | 摘要式衍生資料：`canonBeats`（逐章節拍）`canonNpcs`（編年史）`canonTrials`（試煉）`canonNpcFates`（人物結局）等 |
| `components/` `views/` `store/` | 原引擎沿用的 UI 與狀態層 |
| `scripts/sim_no_intervention.ts` | 不介入自走驗證（韓立自動走到偷渡靈界的測試） |

## 🤝 貢獻與致謝

- 原始引擎：**[JeasonLoop/react-xiuxian-game](https://github.com/JeasonLoop/react-xiuxian-game)**（MIT）— 感謝開源。
- 原著靈感：**忘語《凡人修仙傳》**。
- 本作為個人興趣的同人改編，歡迎交流；如涉權利問題請來信告知，將即時處理。

---

<div align="center"><sub>本作品依原引擎 MIT 授權改編 · 非商業同人 · 不含原著逐字文本</sub></div>
