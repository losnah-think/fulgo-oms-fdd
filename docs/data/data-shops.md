---
id: data-shops
title: 쇼핑몰 / 사이트 (mockShops)
---

**목적**

멀티 스토어/멀티 채널을 지원하기 위한 쇼핑몰(판매처) 목업 데이터입니다.

**스키마(예)**

- `id`: number|string
- `shop_no`: string
- `name`: string
- `site_id`: number|string
- `mall_id`: string

**예시**

```json
{ "id": 1, "shop_no": "SHOP1", "name": "쇼핑몰1", "site_id": 1, "mall_id": "MALL1" }
```

---
id: data-shops
title: 상점/몰 데이터 (mockShops)
slug: /data/data-shops
---

**목적**

상점(몰) 정보와 연동용 설정 예시를 제공합니다.

**예시 필드**

- `id`, `name`, `platform`, `isActive`, `settings`(object)

**예시**

```json
{
  "id":"shop-1",
  "name":"FULGO Official",
  "platform":"cafe24",
  "isActive": true,
  "settings": {"syncInventory": true}
}
```

---
### API: 쇼핑몰(연결) 등록 예시

POST `/api/integrations` — 새로운 통합(쇼핑몰 연결) 등록

Request body example:

```json
{
  "platform": "cafe24",
  "shop_no": "SHOP1",
  "displayName": "FULGO Cafe24",
  "credentials": {
    "apiKey": "sk_live_xxx",
    "clientId": "cid_123",
    "clientSecret": "secret_abc"
  },
  "syncInterval": "30m",
  "enabled": true
}
```

Response example (201):

```json
{
  "id": "int-001",
  "platform": "cafe24",
  "shop_no": "SHOP1",
  "status": "connected"
}
```

Notes:
- Server stores `credentials` encrypted and only exposes connection health and non-sensitive metadata via the public API.

