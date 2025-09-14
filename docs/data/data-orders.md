---
id: data-orders
title: 주문 데이터 (mockOrders)
---

**목적**

주문 데이터의 헤더/라인 구조 및 통합 연동 시 필요한 필드를 제공합니다. 여러 채널 간 공통 필드와 채널 전용 필드를 구분하세요.

**스키마(주요 필드)**

- `id` / `orderId`: number|string — 내부 주문 ID
- `order_code` / `orderNo`: string — 가시적 주문 번호
- `shop_no`, `shop_name`: string — 판매처 식별
- `items`: array — 주문 항목(각 항목에 `product_id`, `variant_id`, `qty`, `unitPrice` 등)
- `payment_amount`, `payment_method`, `payment_status`
- `shipping_status`, `shipping_method`, `invoice_number`
- `customerId` / `orderer` — 고객 식별자
- `placedAt` / `created_at` — 주문 일시

**예시(단일 주문)**

```json
{
  "id": 1,
  "order_code": "ORD000001",
  "shop_no": "SHOP1",
  "ordered_qty": 2,
  "items": [
    { "product_id": 1, "product_code": "PRD-20250913-4823-1", "product_name": "상품1", "qty": 2, "unitPrice": 5500 }
  ],
  "payment_amount": 11000,
  "payment_status": "결제완료",
  "shipping_status": "배송준비중",
  "invoice_number": "INV1",
  "created_at": "2025-09-01T10:00:00Z"
}
```

**비고**

채널 연동 시 채널 주문번호(`channelOrderId`)와 내부 주문 ID 매핑을 반드시 기록하세요.

---
### 테스트 시나리오: 내부 주문 처리 플로우

1) 외부(채널)에서 전달된 주문을 내부 모델로 매핑(예: Full sync)

```json
{
  "id": 1001,
  "order_code": "ORD0001001",
  "shop_no": "SHOP1",
  "items": [ { "product_id": "PRD-1", "qty": 2, "unitPrice": 5500 } ],
  "payment_amount": 11000,
  "payment_status": "결제완료",
  "placedAt": "2025-09-01T10:00:00Z"
}
```

2) Incremental webhook (주문 변경: 배송 상태 업데이트)

```json
{ "order_code": "ORD0001001", "update": { "shipping_status": "배송중", "invoice_number": "INV-1001" } }
```

3) 동기화 실패(예: 재시도 필요)

```json
{ "error": "RATE_LIMIT", "retryAfter": 30 }
```


