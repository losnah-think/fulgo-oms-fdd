---
id: 02-orders-detail
title: Orders Detail
---

## 주문 — 상세

**목적**: 단일 주문을 자세히 확인하고 상태 이력 및 배송 관련 작업을 관리합니다.

**주 사용자**

- 창고 담당자
- 고객지원
- 회계/결제 담당자

### DB 예시

```sql
-- 주문과 주문 항목을 함께 조회
SELECT o.id, o.shop_order_no, o.ordered_at, oi.id AS item_id, oi.product_name, oi.qty
FROM fulgo_orders o
JOIN fulgo_order_items oi ON oi.order_id = o.id AND oi.domain_id = o.domain_id
WHERE o.domain_id = 0 AND o.id = ?;
```

```javascript
// Prisma 예시: 주문과 항목 가져오기
const order = await prisma.fulgoOrders.findUnique({
  where: { domainId_id: { domainId: 0, id: 12345 } },
  include: { fulgoOrderItems: true },
});
```

### 주요 동작

- 주문 전체 데이터 조회: 상품 항목, 가격, 세금, 할인, 로그, 상태 이력
- 배송 정보 편집(주문이 아직 배송되지 않은 경우)
- 내부 메모 또는 태그 추가, 통합/동기화 작업 재시도

### 표시되는 데이터

- 상세 항목
- 결제 정보
- 주문 이행
- 감사 기록

### 업무 규칙 / 정책

- 금전 관련 필드는 수동으로 수정하면 안 됩니다. 환불/회계 처리가 필요합니다.
- 배송 정보 편집은 상태가 '배송됨'이 아닐 때만 가능하며 `orders:manage` 권한 필요.

### 권한 (임시)

- 조회: `orders:view`
- 배송 정보 편집·상태 변경: `orders:manage`
- 내부 로그 조회: `audit:view`

### 성공 지표 / KPI

- 배송 정보 업데이트 소요 목표: **2분 미만**
- 주문 상세로 고객 문의 해결 평균: **5분 미만**

### 오류 조건 및 UX

- 외부 통합 오류 시 외부 오류 메시지 및 재시도 버튼 제공

### 비고 / 연동

- 목록 페이지와 연계, 외부 몰 주문 페이지 링크 제공 가능
