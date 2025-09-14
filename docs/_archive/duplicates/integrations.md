---
archivedFrom: docs/data/integrations.md
---

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

API 연동 가이드 (예시)

- 인증: 각 플랫폼별로 API 키 또는 OAuth 토큰 사용. 시스템 내부에서는 `secrets`에 저장된 키를 이용해 외부 API 호출.
- 권장 헤더: `Authorization: Bearer <TOKEN>` 또는 `X-API-KEY: <KEY>`

예시 cURL (가짜 API 키 사용)

```bash
curl -H "Authorization: Bearer sk_live_1234abcd" \
  "https://api.example.com/v1/integrations/int-001/sync" \
  -X POST
```

예시 엔드포인트

- `GET /api/v1/integrations` — 통합 목록 조회
- `GET /api/v1/integrations/:id` — 특정 통합 상세
- `POST /api/v1/integrations/:id/sync` — 수동 동기화 트리거

주의

- 실제 비밀값(`secrets`)은 로그/프론트엔드에 노출하지 말고 서버에서만 사용하세요.
- `lastSync`는 ISO 8601 형식을 사용합니다.

플랫폼별 샘플 페이로드 (예시)

Cafe24 주문 동기화 응답 예시

```json
{
  "integrationId": "int-001",
  "syncedOrders": 2,
  "errors": []
}
```

Cafe24 webhook(간단 예시)

```json
{
  "shop_no": "SHOP1",
  "order_id": "20250913001",
  "status": "payment_complete",
  "total_price": 35000
}
```

GodoMall 동기화 응답(예시)

```json
{
  "integrationId": "int-002",
  "syncedItems": 0,
  "errors": [{ "code": "DISCONNECTED", "message": "Store is disconnected" }]
}
```

전체 mock 배열 예시 (mockIntegrations.ts 발췌)

```json
[
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
  },
  {
    "id": "int-002",
    "platform": "godomall",
    "storeName": "GodoMall Store A",
    "storeDomain": "godomall-a.example.com",
    "status": "disconnected",
    "lastSync": null,
    "ordersCount": 0,
    "itemsCount": 0
  },
  {
    "id": "int-003",
    "platform": "sabangnet",
    "storeName": "SabangNet Shop",
    "storeDomain": "sabang.example.com",
    "status": "error",
    "lastSync": "2025-09-13T22:03:00Z",
    "ordersCount": 5,
    "itemsCount": 10,
    "secrets": [{ "key": "token", "value": "tok_zz987" }]
  },
  {
    "id": "int-004",
    "platform": "cafe24",
    "storeName": "Cafe24 Multi Store 2",
    "storeDomain": "multi2.cafe24.com",
    "status": "syncing",
    "lastSync": "2025-09-14T11:00:00Z",
    "ordersCount": 3,
    "itemsCount": 6
  }
]
```

