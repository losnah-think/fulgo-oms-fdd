---
id: 04-products-detail
title: Product Detail
---

## 제품 — 상세

**목적**: 제품의 상세 정보와 몰별 매핑을 관리합니다.

**주 사용자**

- 상품 담당자
- 운영팀

### 화면 요소

- 기본 정보(이름, 코드, 설명)
- 가격 및 할인가
- 재고 및 옵션(Variant)
- 몰별 매핑 및 가격

### DB 예시

```sql
SELECT p.id, p.name, v.sku, v.stock, v.price
FROM fulgo_products p
JOIN fulgo_variants v ON v.product_id = p.id
WHERE p.domain_id = 0
AND p.id = 123;
```

```javascript
// Prisma 예시
const product = await prisma.fulgoProducts.findUnique({
  where: { id: 123 },
  include: { variants: true },
});
```

### 동작 흐름

- 제품 수정 시 변경 검증 및 이벤트 큐에 전송
- 몰별 가격 변경 이력 저장
