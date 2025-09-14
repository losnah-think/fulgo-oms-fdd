---
id: data-product-filters
title: 상품 필터 옵션 (mockProductFilters)
---

UI에서 사용되는 상품 필터 옵션 예시입니다.

주요 필드

- `categories`, `brands`, `suppliers`: id/name 배열
- `status`: 상태 문자열 배열
- `classifications`: 분류 목록
- `years`, `seasons`, `priceRange`, `stockRange`


예시 (mock에서 발췌)

```json
{
  "categories": [
    { "id": "cat-1", "name": "카테고리1" },
    { "id": "cat-2", "name": "카테고리2" }
  ],
  "brands": [ { "id": "brand-1", "name": "브랜드1" } ],
  "suppliers": [ { "id": "supplier-1", "name": "공급사1" } ],
  "status": ["판매중","판매중지","품절"],
  "years": ["2020","2021","2022"],
  "priceRange": [0,10000,30000,50000]
}
```

