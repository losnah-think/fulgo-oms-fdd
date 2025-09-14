---
id: 01-orders-list
title: 주문 목록
---

## 주문 — 목록

**목적**

연결된 마켓(몰) 및 통합 시스템의 주문을 관리하고 검색합니다.

**주 사용자**

- 고객지원
- 운영팀
- 창고 담당자(조회 권한 보유자)

### 주요 동작

- 정렬 가능한 열로 페이징된 주문 목록 조회
- 검색 및 필터링(주문번호, 상태, 기간 등)
- 일괄 작업: 상태 변경, 내보내기, 패킹리스트 인쇄
- 각 행의 빠른 동작: 상세 보기, 동기화 재시도, 외부에서 열기

### DB 예시

```sql
-- 최근 주문 50건 조회 (MySQL)
SELECT id, shop_order_no, ordered_at, current_state, invoice_number
FROM fulgo_orders
WHERE domain_id = 0
ORDER BY ordered_at DESC
LIMIT 50;
```

```javascript
// Prisma 예시
const orders = await prisma.fulgoOrders.findMany({
  where: { domainId: 0 },
  select: { id: true, shopOrderNo: true, orderedAt: true, currentState: true },
  orderBy: { orderedAt: 'desc' },
  take: 50,
});
```

### 업무 규칙 / 정책

- 배송 상태 변경 후 금전 필드는 수정 불가
- 상태 변경은 `orders:manage` 권한 필요
- 내보내기는 권한에 따라 제한되고 로그에 기록됩니다

### 권한 (임시)

- 조회: `orders:view`
- 관리: `orders:manage`
- 내보내기: `orders:export`

### 성공 지표 / KPI

- 검색 응답 목표: **< 15초**
- 동기화 오류 재시도 해결률: **> 80%**

### 오류 조건 및 UX

- 외부 동기화 중단 시 경고 및 로그 링크 제공

### 비고 / 연동

- Cafe24 어댑터 등과 연동
- 동기화 오류 재시도 해결률: **> 80%**
