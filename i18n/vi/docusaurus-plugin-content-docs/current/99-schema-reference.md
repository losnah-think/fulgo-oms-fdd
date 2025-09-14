---
id: schema-reference
title: Tham Khảo Schema
---

# Tham Khảo Schema

Tài liệu này tóm tắt các bảng cơ sở dữ liệu chính và các model Prisma được FULGO OMS sử dụng. Các ví dụ bên dưới là trích dẫn minh họa từ DDL/schema dự án.

## Ví dụ schema

```sql
-- fulgo_orders (đã đơn giản hóa)
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

Tham chiếu model Prisma: `FulgoProducts`, `FulgoVariants`

---

### `fulgo_variants`

- Khóa chính: `(domain_id, id)`
- Các cột chính: `id`, `product_id`, `variant_name`, `stock`, `selling_price`, `barcode1`, `domain_id`

Ví dụ SQL:

```sql
SELECT id, product_id, variant_name, stock, selling_price
FROM fulgo_variants
WHERE domain_id = 0 AND product_id = ?;
```

Tham chiếu model Prisma: `FulgoVariants`

Ghi chú:

- Bao gồm `domain_id` trong khóa chính và truy vấn khi có thể.
- Xem `schema.prisma` của dự án để có định nghĩa model Prisma đầy đủ.
