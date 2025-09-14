Mock Integration Server
======================

This is a small dependency-free mock server to exercise the integration test payloads documented in `docs/data/*`.

Run:

```bash
node scripts/mock-integration-server.js
# or set port:
MOCK_PORT=4001 node scripts/mock-integration-server.js
```

Curl examples:

- Register integration

```bash
curl -X POST http://localhost:4000/api/integrations -H 'Content-Type: application/json' -d '{"platform":"cafe24","shop_no":"SHOP1","displayName":"FULGO Cafe24","credentials":{"apiKey":"sk_demo"}}'
```

- Connection test

```bash
curl http://localhost:4000/api/integrations/int-001/test
```

- Webhook order

```bash
curl -X POST http://localhost:4000/webhooks/cafe24/orders -H 'Content-Type: application/json' -d '{"event":"order.created","data":{"order_no":"1002"}}'
```
