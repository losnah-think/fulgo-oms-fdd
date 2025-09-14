---
id: data-integrations
title: 통합(Integration) 데이터 (mockIntegrations)
---

**스키마**

- `id`: string
- `platform`: string (예: `cafe24`, `godomall`, `sabangnet`)
- `storeName`: string
- `storeDomain`?: string
- `status`: `connected` | `disconnected` | `error` | `syncing`
- `lastSync`?: string (ISO 8601 datetime)
- `ordersCount`: number
- `itemsCount`: number
- `secrets`?: array of `{ key, value }` (민감 정보 — 저장 시 암호화 권장)

**예시 (mock)**

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

**비고**

실제 비밀값(`secrets`)은 로그/프론트엔드에 노출하지 말고 서버에서만 사용하세요.

---
### 연결 테스트 단계 (샘플 페이로드)

1) 등록 요청 (POST `/api/integrations`)

```json
{
  "platform": "cafe24",
  "shop_no": "SHOP1",
  "displayName": "Sotatek Cafe24",
  "credentials": { "apiKey": "sk_live_xxx" },
  "syncInterval": "30m",
  "enabled": true
}
```

2) 연결 테스트 응답 (200 OK)

```json
{ "ok": true, "ping": "pong", "version": "v1" }
```

3) 상태 업데이트 예시 (background sync result)

```json
{ "id": "int-001", "status": "connected", "lastSync": "2025-09-14T12:00:00Z", "ordersCount": 25 }
```

4) 에러 케이스 (인증 실패)

```json
{ "ok": false, "error": { "code": "AUTH_FAILED", "message": "Invalid credentials" } }
```

비고: 서버는 인증 실패 시 `integrations:manage` 를 가진 사용자에게만 상세 에러를 노출합니다。


