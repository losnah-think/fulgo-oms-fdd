#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const CONFIG = path.join(ROOT, 'docusaurus.config.js');

function readDefaultLocale() {
  try { return require(CONFIG).i18n.defaultLocale; } catch (_) { return 'ko'; }
}

const defaultLocale = readDefaultLocale() || 'ko';

function contentTypeFor(file) {
  const ext = path.extname(file).slice(1).toLowerCase();
  const map = { html: 'text/html; charset=utf-8', js: 'application/javascript; charset=utf-8', css: 'text/css; charset=utf-8', json: 'application/json; charset=utf-8', svg: 'image/svg+xml', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', ico: 'image/x-icon' };
  return map[ext] || 'application/octet-stream';
}

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    const prefix = '/' + defaultLocale + '/';
    if (urlPath === '/' + defaultLocale || urlPath === '/' + defaultLocale + '/') urlPath = '/';
    else if (urlPath.startsWith(prefix)) {
      const rewritten = urlPath.slice(prefix.length - 1);
      const candidate = path.join(BUILD, rewritten);
      if (fs.existsSync(candidate) || fs.existsSync(candidate + '/index.html')) urlPath = rewritten;
    }

    let filePath = path.join(BUILD, urlPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      const idx = path.join(filePath, 'index.html'); if (fs.existsSync(idx)) filePath = idx;
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      const index = path.join(BUILD, 'index.html'); if (fs.existsSync(index)) { res.writeHead(200, { 'Content-Type': contentTypeFor(index) }); fs.createReadStream(index).pipe(res); return; }
      res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('Not found'); return;
    }

    res.writeHead(200, { 'Content-Type': contentTypeFor(filePath) }); fs.createReadStream(filePath).pipe(res);
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/plain' }); res.end('Server error');
  }
});

const port = process.env.PORT || 3002;
server.listen(port, () => console.log(`Serving ${BUILD} on http://localhost:${port} (defaultLocale=${defaultLocale})`));
