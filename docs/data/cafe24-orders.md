---
id: data-cafe24-orders
title: Cafe24 주문 데이터 (mockCafe24Orders)
---

Cafe24 연동 주문의 예시 타입입니다.

스키마

- `orderId`, `orderCode`, `memberId`
- `orderStatus`, `orderDate`
- `items`: [{ `productNo`, `productName`, `quantity`, `price` }]
- `shipping`: { `receiverName`, `address`, `status` }
- `payment`: { `method`, `amount`, `status` }


예시 (mock 데이터)

```json
[
  {
    "orderId": "20250913001",
    "orderCode": "A123456",
    "memberId": "user001",
    "orderStatus": "결제완료",
    "orderDate": "2025-09-13T12:00:00+09:00",
    "items": [
      { "productNo": "P001", "productName": "상품A", "quantity": 2, "price": 10000 },
      { "productNo": "P002", "productName": "상품B", "quantity": 1, "price": 15000 }
    ],
    "shipping": { "receiverName": "홍길동", "address": "서울시 강남구 ...", "status": "배송준비" },
    "payment": { "method": "신용카드", "amount": 35000, "status": "결제완료" }
  }
]
```

더 많은 예시(배열 형태)는 실제 연동 및 테스트에 유용합니다. 위 mock은 개발용 샘플입니다.

