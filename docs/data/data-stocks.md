---
id: data-stocks
title: 재고 데이터 (mockStocks)
---

**목적**

재고(available/reserved) 관련 목업 데이터와 동기화 전략 예시를 제공합니다.

**스키마(예)**

- `productId`: string
- `warehouseId`: string
- `available`: number
- `reserved`: number

**예시**

```json
{ "productId":"prod-1", "warehouseId":"wh-1", "available":100, "reserved":5 }
```

---
id: data-stocks
title: 재고 데이터 (mockStocks)
slug: /data/data-stocks
---

**목적**

상품별 재고 수준 및 재고 변경 이벤트 예시를 제공합니다.

**예시 필드**

- `productId`, `warehouseId`, `available`, `reserved`

```json
{"productId":"prod-1","warehouseId":"wh-1","available":100,"reserved":2}
```
