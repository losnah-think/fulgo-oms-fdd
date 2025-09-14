---
id: schema-reference
title: 스키마 레퍼런스
---

# 스키마 레퍼런스

이 문서는 FULGO OMS에서 사용되는 주요 데이터베이스 테이블과 Prisma 모델을 요약합니다. 아래 예시는 프로젝트의 DDL/스키마에서 발췌한 설명적 예시입니다.

## 스키마 예시

```sql
-- fulgo_orders (단순화)
CREATE TABLE fulgo_orders (
  id INT PRIMARY KEY,
  domain_id INT,
  shop_order_no VARCHAR(64),
  ordered_at DATETIME
);
```

```sql
-- fulgo_order_items
CREATE TABLE fulgo_order_items (
  id INT PRIMARY KEY,
  order_id INT,
  product_name VARCHAR(255),
  qty INT
);
```

```sql
-- fulgo_products
CREATE TABLE fulgo_products (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  code VARCHAR(64),
  selling_price DECIMAL(10,2)
);
```

```sql
-- fulgo_variants
CREATE TABLE fulgo_variants (
  id INT PRIMARY KEY,
  product_id INT,
  sku VARCHAR(64),
  stock INT
);
```

Prisma 모델 참조: `FulgoProducts`, `FulgoVariants`

---

### `fulgo_variants`
- 기본 키: `(domain_id, id)`
- 주요 컬럼: `id`, `product_id`, `variant_name`, `stock`, `selling_price`, `barcode1`, `domain_id`

예시 SQL:

```sql
SELECT id, product_id, variant_name, stock, selling_price
FROM fulgo_variants
WHERE domain_id = 0 AND product_id = ?;
```

Prisma 모델 참조: `FulgoVariants`

노트:
- `domain_id`는 가능한 경우 기본 키 및 쿼리에 포함하여 사용하세요.
- 전체 Prisma 모델 정의는 `schema.prisma`에서 확인하세요.
