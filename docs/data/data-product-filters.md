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

---
id: data-product-filters
title: 상품 필터 데이터 (mockProductFilters)
slug: /data/data-product-filters
---

**목적**

프론트엔드에서 사용하는 상품 필터 스키마 예시(속성 필터, 옵션)를 정리합니다.

**예시**

```json
{
  "filters": [
    { "id":"color","label":"색상","values":["red","blue","green"] },
    { "id":"size","label":"사이즈","values":["S","M","L"] }
  ]
}
```
