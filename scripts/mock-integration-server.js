#!/usr/bin/env node
// Lightweight mock server for local testing of integration docs
// No dependencies required; run with `node scripts/mock-integration-server.js`

const http = require('http');
const url = require('url');

const PORT = process.env.MOCK_PORT || 4000;

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      if (!body) return resolve(null);
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname || '/';

  // CORS for quick testing
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.end();

  try {
    if (req.method === 'POST' && pathname === '/api/integrations') {
      const payload = await readJson(req);
      const id = 'int-' + Math.floor(Math.random() * 900 + 100);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ id, platform: payload.platform, shop_no: payload.shop_no, status: 'connected' }));
    }

    if (req.method === 'GET' && pathname === '/api/integrations') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify([{ id: 'int-001', platform: 'cafe24', shop_no: 'SHOP1', status: 'connected', lastSync: new Date().toISOString() }]));
    }

    const mIntegrationTest = pathname.match(/^\/api\/integrations\/([^/]+)\/test$/);
    if (req.method === 'GET' && mIntegrationTest) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ ok: true, message: 'connection successful', apiVersion: 'v1' }));
    }

    const mIntegrationId = pathname.match(/^\/api\/integrations\/(.+)$/);
    if (mIntegrationId && (req.method === 'PATCH' || req.method === 'DELETE')) {
      if (req.method === 'PATCH') {
        const body = await readJson(req);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(Object.assign({ id: mIntegrationId[1] }, body)));
      }
      // DELETE
      res.writeHead(204);
      return res.end();
    }

    if (req.method === 'POST' && pathname === '/webhooks/cafe24/orders') {
      const payload = await readJson(req);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ received: true, event: payload.event || 'order.webhook', payload }));
    }

    if (req.method === 'POST' && pathname === '/webhooks/inventory') {
      const payload = await readJson(req);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ received: true, productId: payload.productId, delta: payload.delta }));
    }

    // default: echo server info
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, path: pathname }));
  } catch (err) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: false, error: err.message }));
  }
});

server.listen(PORT, () => {
  console.log(`Mock integration server listening on http://localhost:${PORT}`);
  console.log('Routes: POST /api/integrations, GET /api/integrations, GET /api/integrations/:id/test');
  console.log('Webhooks: POST /webhooks/cafe24/orders, POST /webhooks/inventory');
});
