---
id: data-products
title: 상품 데이터 (mockProducts)
slug: /data/data-products
---

**목적**

상품(제품) 데이터 목업 스키마와 주요 필드를 정리합니다.

**스키마(주요 필드)**

- `id`: string — 제품 ID
- `sku`: string — SKU
- `title`: string — 제품명
- `brandId`: string — 브랜드 ID
- `categoryIds`: string[] — 카테고리 ID 배열
- `price`: number — 판매가
- `stock`: number — 재고
- `status`: string — 상태 (active/inactive)

**예시**

```json
{
  "id": "prod-1",
  "sku": "FULGO-001",
  "title": "FULGO T-Shirt",
  "brandId": "brand-1",
  "categoryIds": ["cat-1", "cat-1-1"],
  "price": 19900,
  "stock": 120,
  "status": "active"
}
```

**비고**

필드는 프로젝트 요구에 따라 확장될 수 있습니다. 가격/통화 규약을 문서화하세요.
