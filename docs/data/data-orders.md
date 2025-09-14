---
id: data-orders
title: 주문 데이터 (mockOrders)
slug: /data/data-orders
---

**목적**

주문 데이터 목업(주문 헤더/라인 등)과 필드 예시를 제공합니다.

**스키마(요약)**

- `orderId`: string — 주문 ID
- `placedAt`: string (ISO) — 주문 일시
- `status`: string — 주문 상태 (placed/confirmed/shipped/delivered/cancelled)
- `totalAmount`: number — 총 결제 금액
- `currency`: string — 통화
- `items`: array — 주문 항목 배열
  - 각 항목: `{ productId, sku, qty, unitPrice, subtotal }`
- `customerId`: string — 구매자 ID

**예시**

```json
{
  "orderId": "order-1001",
  "placedAt": "2025-09-01T12:34:56Z",
  "status": "placed",
  "totalAmount": 59800,
  "currency": "KRW",
  "items": [
    {"productId":"prod-1","sku":"FULGO-001","qty":2,"unitPrice":19900,"subtotal":39800},
    {"productId":"prod-2","sku":"FULGO-002","qty":1,"unitPrice":20000,"subtotal":20000}
  ],
  "customerId": "cust-1"
}
```

**비고**

다양한 플랫폼 연동(Cafe24 등)에서 추가 필드가 필요합니다. 예: 채널 주문 번호, 배송사 정보 등.
