#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

// Dependency-free static server that rewrites requests prefixed with
// the default locale (e.g. '/ko/...') to the root-built files so local
// testing doesn't require duplicating the build output.

const ROOT = path.resolve(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const CONFIG = path.join(ROOT, 'docusaurus.config.js');

function readDefaultLocale() {
  try {
    const cfg = require(CONFIG);
    return cfg && cfg.i18n && cfg.i18n.defaultLocale;
  } catch (_) {
    return null;
  }
}

const defaultLocale = readDefaultLocale() || 'ko';

function contentTypeFor(file) {
  const ext = path.extname(file).slice(1).toLowerCase();
  const map = {
    html: 'text/html; charset=utf-8',
    js: 'application/javascript; charset=utf-8',
    css: 'text/css; charset=utf-8',
    json: 'application/json; charset=utf-8',
    svg: 'image/svg+xml',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    ico: 'image/x-icon'
  };
  return map[ext] || 'application/octet-stream';
}

function sendFile(res, file) {
  res.writeHead(200, { 'Content-Type': contentTypeFor(file) });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

    // Map '/<defaultLocale>/*' -> '/*' when the corresponding built file exists.
    const prefix = '/' + defaultLocale + '/';
    if (urlPath === '/' + defaultLocale || urlPath === '/' + defaultLocale + '/') {
      urlPath = '/';
    } else if (urlPath.startsWith(prefix)) {
      const rewritten = urlPath.slice(prefix.length - 1); // keep leading /
      const candidate = path.join(BUILD, rewritten);
      if (fs.existsSync(candidate) || fs.existsSync(candidate + '/index.html')) {
        urlPath = rewritten;
      }
    }

    let filePath = path.join(BUILD, urlPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      const idx = path.join(filePath, 'index.html');
      if (fs.existsSync(idx)) filePath = idx;
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      // SPA fallback to build/index.html
      const index = path.join(BUILD, 'index.html');
      if (fs.existsSync(index)) return sendFile(res, index);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found');
    }

    return sendFile(res, filePath);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error');
  }
});

const port = process.env.PORT || 3002;
server.listen(port, () => {
  console.log(`Serving ${BUILD} on http://localhost:${port} (defaultLocale=${defaultLocale})`);
});
#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

// Dependency-free static server that rewrites requests prefixed with
// the default locale (e.g. '/ko/...') to the root-built files so local
// testing doesn't require duplicating the build output.

const ROOT = path.resolve(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const CONFIG = path.join(ROOT, 'docusaurus.config.js');

function readDefaultLocale() {
  try {
    const cfg = require(CONFIG);
    return cfg && cfg.i18n && cfg.i18n.defaultLocale;
  } catch (_) {
    return null;
  }
}

const defaultLocale = readDefaultLocale() || 'ko';

function contentTypeFor(file) {
  const ext = path.extname(file).slice(1).toLowerCase();
  const map = {
    html: 'text/html; charset=utf-8',
    js: 'application/javascript; charset=utf-8',
    css: 'text/css; charset=utf-8',
    json: 'application/json; charset=utf-8',
    svg: 'image/svg+xml',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    ico: 'image/x-icon'
  };
  return map[ext] || 'application/octet-stream';
}

function sendFile(res, file) {
  res.writeHead(200, { 'Content-Type': contentTypeFor(file) });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

    // Map '/<defaultLocale>/*' -> '/*' when the corresponding built file exists.
    const prefix = '/' + defaultLocale + '/';
    if (urlPath === '/' + defaultLocale || urlPath === '/' + defaultLocale + '/') {
      urlPath = '/';
    } else if (urlPath.startsWith(prefix)) {
      const rewritten = urlPath.slice(prefix.length - 1); // keep leading /
      const candidate = path.join(BUILD, rewritten);
      if (fs.existsSync(candidate) || fs.existsSync(candidate + '/index.html')) {
        urlPath = rewritten;
      }
    }

    let filePath = path.join(BUILD, urlPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      const idx = path.join(filePath, 'index.html');
      if (fs.existsSync(idx)) filePath = idx;
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      // SPA fallback to build/index.html
      const index = path.join(BUILD, 'index.html');
      if (fs.existsSync(index)) return sendFile(res, index);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found');
    }

    return sendFile(res, filePath);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error');
  }
});

const port = process.env.PORT || 3002;
server.listen(port, () => {
  console.log(`Serving ${BUILD} on http://localhost:${port} (defaultLocale=${defaultLocale})`);
});
#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple static server that rewrites requests starting with
// /<defaultLocale>/... to the equivalent path under build/ (no prefix)
const ROOT = path.resolve(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const CONFIG = path.join(ROOT, 'docusaurus.config.js');

function readDefaultLocale() {
  try {
    const cfg = require(CONFIG);
    return cfg && cfg.i18n && cfg.i18n.defaultLocale;
  } catch (e) {
    return null;
  }
}

const defaultLocale = readDefaultLocale() || 'ko';

function contentTypeFor(file) {
  const ext = path.extname(file).slice(1).toLowerCase();
  const map = {
    html: 'text/html; charset=utf-8',
    js: 'application/javascript; charset=utf-8',
    css: 'text/css; charset=utf-8',
    json: 'application/json; charset=utf-8',
    svg: 'image/svg+xml',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    ico: 'image/x-icon'
  };
  return map[ext] || 'application/octet-stream';
}

function sendFile(res, file) {
  res.writeHead(200, { 'Content-Type': contentTypeFor(file) });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

    // If URL starts with /<defaultLocale>/, attempt to rewrite to root path
    const prefix = '/' + defaultLocale + '/';
    if (urlPath === '/' + defaultLocale || urlPath === '/' + defaultLocale + '/') {
      // map '/ko' -> '/'
      urlPath = '/';
    } else if (urlPath.startsWith(prefix)) {
      const rewritten = urlPath.slice(prefix.length - 1); // keep leading /
      const candidate = path.join(BUILD, rewritten);
      if (fs.existsSync(candidate) || fs.existsSync(candidate + '/index.html')) {
        urlPath = rewritten;
      }
    }

    let filePath = path.join(BUILD, urlPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      const idx = path.join(filePath, 'index.html');
      if (fs.existsSync(idx)) filePath = idx;
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      // SPA fallback to index.html
      const index = path.join(BUILD, 'index.html');
      if (fs.existsSync(index)) return sendFile(res, index);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found');
    }

    return sendFile(res, filePath);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error');
  }
});

const port = process.env.PORT || 3002;
server.listen(port, () => {
  console.log(`Serving ${BUILD} on http://localhost:${port} (defaultLocale=${defaultLocale})`);
});
#!/usr/bin/env node
const http = require('http');
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

const defaultLocale = readDefaultLocale() || 'ko';

function sendFile(res, file) {
  const ext = path.extname(file).slice(1) || 'html';
  const map = {
    html: 'text/html; charset=utf-8',
    js: 'application/javascript; charset=utf-8',
    css: 'text/css; charset=utf-8',
    json: 'application/json; charset=utf-8',
    svg: 'image/svg+xml',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    ico: 'image/x-icon'
  };
  const ct = map[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': ct });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    const prefix = '/' + defaultLocale + '/';
    if (urlPath.startsWith(prefix)) {
      const rewritten = urlPath.slice(prefix.length - 1); // keep leading /
      const candidate = path.join(BUILD, rewritten);
      if (fs.existsSync(candidate) || fs.existsSync(candidate + '/index.html')) {
        urlPath = rewritten;
      }
    }

    let filePath = path.join(BUILD, urlPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      const idx = path.join(filePath, 'index.html');
      if (fs.existsSync(idx)) filePath = idx;
    }
    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      // serve index.html as SPA fallback
      const index = path.join(BUILD, 'index.html');
      if (fs.existsSync(index)) return sendFile(res, index);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found');
    }
    sendFile(res, filePath);
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error');
  }
});

const port = process.env.PORT || 3002;
server.listen(port, () => {
  console.log(`Serving ${BUILD} on http://localhost:${port} (defaultLocale=${defaultLocale})`);
});
#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const CONFIG = path.join(ROOT, 'docusaurus.config.js');

function readDefaultLocale() {
  #!/usr/bin/env node
  const http = require('http');
  const fs = require('fs');
  const path = require('path');

  const ROOT = path.resolve(__dirname, '..');
  const BUILD = path.join(ROOT, 'build');
  const CONFIG = path.join(ROOT, 'docusaurus.config.js');

  function readDefaultLocale() {
    #!/usr/bin/env node
    const http = require('http');
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

    const defaultLocale = readDefaultLocale() || 'ko';

    function sendFile(res, file) {
      const ext = path.extname(file).slice(1) || 'html';
      const map = {
        html: 'text/html; charset=utf-8',
        js: 'application/javascript; charset=utf-8',
        css: 'text/css; charset=utf-8',
        json: 'application/json; charset=utf-8',
        svg: 'image/svg+xml',
        png: 'image/png',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        ico: 'image/x-icon'
      };
      const ct = map[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': ct });
      fs.createReadStream(file).pipe(res);
    }

    const server = http.createServer((req, res) => {
      try {
        let urlPath = decodeURIComponent(req.url.split('?')[0]);
        const prefix = '/' + defaultLocale + '/';
        if (urlPath.startsWith(prefix)) {
          const rewritten = urlPath.slice(prefix.length - 1); // keep leading /
          const candidate = path.join(BUILD, rewritten);
          if (fs.existsSync(candidate) || fs.existsSync(candidate + '/index.html')) {
            urlPath = rewritten;
          }
        }

        let filePath = path.join(BUILD, urlPath);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
          const idx = path.join(filePath, 'index.html');
          if (fs.existsSync(idx)) filePath = idx;
        }
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
          // serve index.html as SPA fallback
          const index = path.join(BUILD, 'index.html');
          if (fs.existsSync(index)) return sendFile(res, index);
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          return res.end('Not found');
        }
        sendFile(res, filePath);
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server error');
      }
    });

    const port = process.env.PORT || 3002;
    server.listen(port, () => {
      console.log(`Serving ${BUILD} on http://localhost:${port} (defaultLocale=${defaultLocale})`);
    });
  }
