---
id: data-integrations
title: (archived) 통합(Integration) 데이터
---

ARCHIVED duplicate of `data-integrations.md`

---
Original content below:

```
---
id: data-integrations
title: 통합(Integration) 데이터 (mockIntegrations)
---

스키마

- `id`: string
- `platform`: string (예: `cafe24`, `godomall`, `sabangnet`)
- `storeName`: string
- `storeDomain`?: string
- `status`: `connected` | `disconnected` | `error` | `syncing`
- `lastSync`?: string (ISO 8601 datetime)
- `ordersCount`: number
- `itemsCount`: number
- `secrets`?: array of `{ key, value }` (민감 정보 — 저장 시 암호화 권장)

예시 (mock)

```json
{
	"id": "int-001",
	"platform": "cafe24",
	"storeName": "Sotatek Cafe24 Shop",
	"storeDomain": "sotatek.cafe24.com",
	"status": "connected",
	"lastSync": "2025-09-14T10:12:00Z",
	"ordersCount": 24,
	"itemsCount": 48,
	"secrets": [{ "key": "api_key", "value": "sk_live_1234abcd" }]
}
```

... (truncated)

```
