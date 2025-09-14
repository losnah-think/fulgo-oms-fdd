const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const CONFIG = path.join(ROOT, 'docusaurus.config.js');

function readDefaultLocale() {
  try {
    const cfg = require(CONFIG);
    return cfg && cfg.i18n && cfg.i18n.defaultLocale;
  } catch (e) {
    console.error('Failed to read docusaurus.config.js', e.message);
    return null;
  }
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return false;
  if (fs.existsSync(dest)) {
    // remove dest
    fs.rmSync(dest, { recursive: true, force: true });
  }
  // recursive copy
  const spawn = require('child_process').spawnSync;
  // Use native cp -R for reliability on macOS
  const res = spawn('cp', ['-a', src + path.sep + '.', dest]);
  if (res.status !== 0) {
    console.error('cp failed', res.stderr && res.stderr.toString());
    return false;
  }
  return true;
}

function main() {
  const def = readDefaultLocale();
  if (!def) {
    console.log('No default locale found; skipping mirror.');
    return;
  }
  if (def === 'en') {
    console.log('defaultLocale is en — no mirror needed.');
    return;
  }
  const dest = path.join(BUILD, def);
  if (fs.existsSync(dest)) {
    console.log(`${dest} already exists; skipping.`);
    return;
  }
  if (!fs.existsSync(BUILD)) {
    console.error('Build directory not found; run `npm run build` first.');
    return;
  }
  console.log(`Mirroring ${BUILD} -> ${dest}`);
  const ok = copyDir(BUILD, dest);
  if (ok) console.log('Mirror completed.');
}

main();
