/**
 * 一鍵更新 exe：vite build → 同步 _electron_stage/dist → electron-packager 重新封裝。
 * 用法：npm run build:exe   （於 react-xiuxian-game/）
 * 產出：修仙遊戲/凡人修仙編年史-win32-x64/凡人修仙編年史.exe
 * 注意：打包前請關閉執行中的 exe（檔案鎖會使覆寫失敗）。
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const stage = path.join(root, '_electron_stage');
const packageOut = path.join(root, '_electron_out');
const finalDir = path.join(root, '..', '凡人修仙編年史-win32-x64');

// 關鍵：Electron 以 file:// 載入，須用相對路徑 base='./'（web/vercel 仍用 '/'，故只在此處覆寫，不動 vite.config）。
console.log('[1/3] vite build --base=./（最新原始碼 → dist；相對路徑供 Electron file:// 載入）');
execSync(process.platform === 'win32' ? 'npm.cmd run build -- --base=./' : 'npm run build -- --base=./', { cwd: root, stdio: 'inherit' });

console.log('[2/3] 同步 dist → _electron_stage/dist');
const stageDist = path.join(stage, 'dist');
fs.rmSync(stageDist, { recursive: true, force: true });
// 手動遞迴複製（fs.cpSync 在此環境曾異常崩潰；自行遞迴較穩）
function copyDir(srcDir, dstDir) {
  fs.mkdirSync(dstDir, { recursive: true });
  for (const ent of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const s = path.join(srcDir, ent.name);
    const d = path.join(dstDir, ent.name);
    if (ent.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function replaceDirContents(srcDir, dstDir) {
  const resolvedRoot = path.resolve(root, '..');
  const resolvedTarget = path.resolve(dstDir);
  if (!resolvedTarget.startsWith(`${resolvedRoot}${path.sep}`)) {
    throw new Error(`拒絕清理非預期輸出目錄：${resolvedTarget}`);
  }
  fs.mkdirSync(resolvedTarget, { recursive: true });
  for (const ent of fs.readdirSync(resolvedTarget, { withFileTypes: true })) {
    fs.rmSync(path.join(resolvedTarget, ent.name), { recursive: true, force: true });
  }
  copyDir(srcDir, resolvedTarget);
}
copyDir(path.join(root, 'dist'), stageDist);

console.log('[3/3] electron-packager 重新封裝 win32-x64（暫存後同步成品）');
let packager;
try { packager = require('electron-packager'); } catch { packager = require('@electron/packager'); }
if (typeof packager !== 'function' && packager.packager) packager = packager.packager;
fs.rmSync(packageOut, { recursive: true, force: true });
packager({
  dir: stage,
  name: '凡人修仙編年史',
  platform: 'win32',
  arch: 'x64',
  out: packageOut,
  overwrite: true,
  asar: true,
  electronVersion: require('electron/package.json').version,
})
  .then((paths) => {
    const packagedDir = Array.isArray(paths) ? paths[0] : String(paths);
    replaceDirContents(packagedDir, finalDir);
    fs.copyFileSync(path.join(root, 'packaging', '使用說明.txt'), path.join(finalDir, '使用說明.txt'));
    fs.rmSync(packageOut, { recursive: true, force: true });
    console.log('✔ EXE 已更新：', finalDir);
  })
  .catch((e) => { console.error('�’ EXE 打包失敗：', e && e.message ? e.message : String(e), '\n（若為檔案鎖，請先關閉執行中的 exe 再重跑）'); process.exit(1); });
