---
id: 03-products-list
title: Products List
---

## 제품 — 목록

**목적**: 연결된 마켓(몰)에 매핑된 카탈로그 항목을 찾아보고, 필터링하고 관리합니다.

**주 사용자**

- 상품 담당자
- 상품 관리자
- 운영팀

### DB 예시

```sql
-- 제품 목록 샘플
SELECT id, name, code, brand, selling_price, category_id
FROM fulgo_products
WHERE domain_id = 0
LIMIT 50;
```

```javascript
// Prisma 예시
const products = await prisma.fulgoProducts.findMany({
  where: { domainId: 0 },
  select: { id: true, name: true, code: true, sellingPrice: true },
  take: 50,
});
```

### 주요 동작

- 필터(상품코드, 이름, 브랜드, 분류, 재고 수준)로 페이징된 제품 목록 조회
- 일괄 편집: 가격 변경, 분류 변경, 활성/비활성 전환
- 가져오기/내보내기(CSV), 제품 상세 또는 몰별 매핑으로 이동

### 명명 규칙: `상품 분류` vs `카테고리`

- **상품 분류 (Product Classification)**: 상품 내부에서 사용하는 구조입니다. 예: '의류 > 여성 > 원피스'와 같이 제품 자체를 분류하는 내부 분류 체계입니다. 내부의 검색·필터·정렬 로직은 이 분류를 기준으로 동작합니다.
- **카테고리 (Mall Category)**: 각 쇼핑몰(또는 판매 채널)이 사용하는 외부 카테고리입니다. 동일한 상품이 여러 쇼핑몰에서 서로 다른 카테고리에 매핑될 수 있으므로 개념적으로 별개입니다.

항상 문서에서 이 둘을 구분하여 표기합니다 (`상품 분류` = 내부, `카테고리` = 외부/몰).

### 표시되는 데이터

- 상품 담당자, 상품 관리자, 운영팀

### 업무 규칙 / 정책

- 가격 변경은 이 시스템에서 즉시 적용됩니다; 마켓으로 반영하려면 별도 동기화(푸시)가 필요합니다.
- 핵심 상품 정보 변경은 `products:edit` 권한이 필요합니다.

### 권한 (임시)

- 조회: `products:view`
- 수정: `products:edit`
- 가져오기: `products:import`

### 성공 지표 / KPI

- 일괄 작업 완료 목표: **1,000개 기준 90초 미만**
- 가져오기 성공률: **98% 이상**

### 오류 조건 및 UX

- CSV 가져오기 실패 시 검증 문제 인라인 표시 및 샘플 제공

### 비고 / 연동

- `ProductService`와 몰 매핑 컴포넌트 연동
