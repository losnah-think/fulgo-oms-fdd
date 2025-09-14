---
id: data-orders
title: 주문 데이터 (mockOrders)
---

주문 목업 데이터의 주요 필드와 예시입니다.

스키마 (주요 필드)

- `id`: number
- `order_code`: string
- `shop_no`, `shop_name`, `site_id`, `mall_id`
- `ordered_qty`: number
- `product_id`, `product_code`, `product_name`
- `variant_id`, `variant_name`
- `supplier_id`, `supplier_name`
- `category_id`, `category_name`
- `barcode_no`
- `is_soldout`: boolean
- `orderer`, `receipient`, `address`, `mobile_no`
- `payment_method`, `payment_status`, `payment_amount`
- `shipping_method`, `shipping_status`, `invoice_number`
- `created_at`, `updated_at`, `status`


예시 (mock에서 발췌)

```json
{
  "id": 1,
  "order_code": "ORD000001",
  "shop_no": "SHOP1",
  "shop_name": "쇼핑몰1",
  "ordered_qty": 2,
  "product_id": 1,
  "product_code": "PRD-20250913-4823-1",
  "product_name": "상품1",
  "variant_id": 1,
  "variant_name": "옵션1",
  "supplier_id": 1,
  "supplier_name": "공급사1",
  "category_id": "cat-1",
  "category_name": "카테고리1",
  "payment_method": "카드",
  "payment_status": "결제완료",
  "payment_amount": 11000,
  "shipping_status": "배송준비중",
  "invoice_number": "INV1",
  "created_at": "2025-09-01T10:00:00Z",
  "status": "결제완료"
}
```

추가 예시 (여러 주문 배열)

```json
[
  {
    "id": 1,
    "order_code": "ORD000001",
    "shop_no": "SHOP1",
    "ordered_qty": 2,
    "product_id": 1,
    "product_name": "상품1",
    "payment_amount": 11000,
    "status": "결제완료"
  },
  {
    "id": 2,
    "order_code": "ORD000002",
    "shop_no": "SHOP2",
    "ordered_qty": 1,
    "product_id": 2,
    "product_name": "상품2",
    "payment_amount": 12000,
    "status": "배송중"
  }
]
```

