---
archivedFrom: docs/data/shops.md
---

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

**비고**

채널별 정책(가격/반품/배송)을 쇼핑몰 단위로 구성할 수 있습니다.
---
id: data-shops
title: 쇼핑몰 / 사이트 (mockShops)
---

쇼핑몰과 사이트 관련 목업 데이터입니다.

예시

```json
{ "id": 1, "shop_no": "SHOP1", "name": "쇼핑몰1", "site_id": 1, "mall_id": "MALL1" }
```
