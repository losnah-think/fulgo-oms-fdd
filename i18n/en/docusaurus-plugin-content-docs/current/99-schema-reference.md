---
id: schema-reference
title: Schema Reference
---

# Schema Reference

This document summarizes the primary database tables and Prisma models used by FULGO OMS. The examples below are illustrative excerpts derived from the project's DDL/schema.

## Schema examples

```sql
-- fulgo_orders (simplified)
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

Prisma model references: `FulgoProducts`, `FulgoVariants`

---

### `fulgo_variants`

- Primary key: `(domain_id, id)`
- Key columns: `id`, `product_id`, `variant_name`, `stock`, `selling_price`, `barcode1`, `domain_id`

Example SQL:

```sql
SELECT id, product_id, variant_name, stock, selling_price
FROM fulgo_variants
WHERE domain_id = 0 AND product_id = ?;
```

Prisma model reference: `FulgoVariants`

Notes:

- Include `domain_id` in primary keys and queries where applicable.
- See the project's `schema.prisma` for complete Prisma model definitions.
