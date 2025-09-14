---
id: data-products
title: 상품 데이터 (mockProducts)
---

상품 목업 데이터의 스키마와 예시입니다. `variants` 배열을 포함합니다.

주요 필드

- `id`, `code`, `name`, `brand`, `brand_id`
- `classificationPath`, `classification`, `classificationId`
- `selling_price`, `supply_price`, `cost_price`
- `supplier_id`, `category_id`, `description`
- `is_dutyfree`, `created_at`, `updated_at`, `made_date`, `expr_date`
- `variants`: [{ `id`, `variant_name`, `stock`, `cost_price`, `selling_price`, `code`, `barcode1`, `is_selling` }]

간단 예시

```json
{
  "id": 1,
  "code": "PRD-20250913-4823-1",
  "name": "상품1",
  "brand": "브랜드1",
  "brand_id": "brand-1",
  "classificationPath": ["의류","남성","셔츠"],
  "classification": "의류",
  "classificationId": "c-1",
  "selling_price": 10000,
  "supply_price": 9000,
  "cost_price": 8000,
  "supplier_id": 1,
  "category_id": "cat-1",
  "description": "상품1 설명입니다.",
  "is_dutyfree": false,
  "created_at": "2025-09-01T10:00:00Z",
  "variants": [
    { "id": 1, "product_id": 1, "variant_name": "옵션1", "stock": 10, "cost_price": 8000, "selling_price": 10000, "code": "VAR1-1", "barcode1": "880000011", "is_selling": true },
    { "id": 2, "product_id": 1, "variant_name": "옵션2", "stock": 15, "cost_price": 8500, "selling_price": 10500, "code": "VAR1-2", "barcode1": "880000012", "is_selling": true }
  ]
}
```

추가 예시 (여러 상품)

```json
[
  {
    "id": 1,
    "code": "PRD-20250913-4823-1",
    "name": "상품1",
    "brand": "브랜드1",
    "selling_price": 10000
  },
  {
    "id": 2,
    "code": "PRD-20250913-4921-2",
    "name": "상품2",
    "brand": "브랜드2",
    "selling_price": 10200
  }
]
```

