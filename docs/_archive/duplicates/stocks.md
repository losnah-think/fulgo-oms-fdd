---
archivedFrom: docs/data/stocks.md
---

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

**비고**

재고 동기화 정책(실시간/일괄)에 따라 구조를 조정하세요.
