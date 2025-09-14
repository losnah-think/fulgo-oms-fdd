---
id: data-cafe24-orders
title: Cafe24 주문 데이터 (mockCafe24Orders)
---

**목적**

Cafe24 연동용 주문 페이로드 예시를 제공합니다. 실제 페이로드는 채널 버전에 따라 다릅니다.

**예시(요약)**

```json
{ "order_no":"1001", "order_item": [ /* ... */ ] }
```

**비고**

채널별 필드가 매우 다양하므로 매핑 문서를 별도 관리하세요.

---
### 테스트 시나리오: 주문 동기화

1) 전체 동기화(Full sync) 응답 예시

```json
[
	{
		"order_no": "1001",
		"shop_no": "SHOP1",
		"items": [{ "product_code": "PRD-1", "qty": 2 }],
		"total_price": 11000,
		"status": "payment_complete",
		"placed_at": "2025-09-01T10:00:00Z"
	}
]
```

2) 웹훅(Incremental) 예시 — 새로운 주문

POST `/webhooks/cafe24/orders`

```json
{
	"event": "order.created",
	"data": { "order_no": "1002", "shop_no": "SHOP1", "items": [{ "product_code": "PRD-2", "qty": 1 }], "total_price": 12000 }
}
```

3) 에러/재시도 케이스(부분 필드 누락)

```json
{ "error": "MISSING_FIELD", "missing": ["customer.email"] }
```


