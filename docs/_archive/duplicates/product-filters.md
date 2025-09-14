---
archivedFrom: docs/data/product-filters.md
---

---
id: data-product-filters
title: 상품 필터 (mockProductFilters)
---

**목적**

검색/필터 UX를 위한 필터 데이터 스키마 예시입니다.

**스키마(예)**

- `filterId`: string
- `type`: string (checkbox/select/range)
- `values`: array

**예시**

```json
{ "filterId":"f-1", "type":"checkbox", "values":["red","blue"] }
```

**비고**

필터는 클라이언트 상태와 동기화 규칙을 정의하세요.

