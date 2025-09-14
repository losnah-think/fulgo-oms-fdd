---
---
### 테스트 시나리오: 상품 데이터

1) 상품 일괄 export (GET `/api/products`) 예시

```json
[
  { "id": 1, "code": "PRD-20250913-4823-1", "name": "상품1", "brand_id": "brand-1", "selling_price": 10000, "stock": 120 }
]
```

2) 상품 일괄 import (POST `/api/products/import`) 예시

Request body:
```json
[
  { "code": "PRD-20250913-4823-1", "name": "상품1", "brand_id": "brand-1", "selling_price": 10000 }
]
```

Response (201):
```json
{ "imported": 1, "errors": [] }
```

3) 부분 업데이트 (PATCH `/api/products/:id`) 예시

Request:
```json
{ "selling_price": 9500 }
```

Response:
```json
{ "id": 1, "selling_price": 9500 }
```

비고: import 시 `code`를 키로 사용하여 중복 처리(업데이트 또는 무시)를 선택하세요。
title: 상품 데이터 (mockProducts)
---
---
id: data-products
title: 상품 데이터 (mockProducts)
---

**목적**

상품(제품) 관련 목업 스키마와 예시를 제공합니다. 변형(variants)과 가격/재고 관련 필드를 포함합니다.

**스키마(주요 필드)**

- `id`: number|string — 제품 고유 ID
- `code`: string — 내부 코드
- `name`: string — 제품명
- `brand`: string — 브랜드명
- `brand_id`: string — 브랜드 ID
- `classificationPath`: string[] — 분류 경로
- `classificationId`: string — 분류 ID
- `selling_price`: number — 판매가
- `supply_price`: number — 공급가
- `cost_price`: number — 원가
- `stock`: number — 전체 재고
- `status`: string — 상태
- `variants`: array — 옵션/변형 목록 (각 항목에 `id`, `variant_name`, `stock`, `selling_price` 등)

**예시(단일)**

```json
{
  "id": 1,
  "code": "PRD-20250913-4823-1",
  "name": "상품1",
  "brand": "브랜드1",
  "brand_id": "brand-1",
  "classificationPath": ["의류","남성","셔츠"],
  "classificationId": "c-1",
  "selling_price": 10000,
  "stock": 120,
  "status": "active",
  "variants": [
    { "id": 1, "variant_name": "옵션1", "stock": 10, "selling_price": 10000 }
  ]
}
```

**예시(여러 상품)**

```json
[
  { "id": 1, "code": "PRD-20250913-4823-1", "name": "상품1", "brand": "브랜드1", "selling_price": 10000 },
  { "id": 2, "code": "PRD-20250913-4921-2", "name": "상품2", "brand": "브랜드2", "selling_price": 10200 }
]
```

**비고**

가격/통화 규약, 세금(부가세) 처리, 옵션 식별자 규칙을 문서화하세요.
