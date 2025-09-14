---
id: 03-products-list
title: Danh Sách Sản Phẩm
---

# Sản Phẩm — Danh Sách

## Mục đích
Hiển thị danh sách sản phẩm đã được ánh xạ tới các marketplace kết nối, hỗ trợ tìm kiếm, lọc và các thao tác hàng loạt.

## Người dùng chính

- Quản lý sản phẩm
- Người duyệt danh mục
- Nhóm vận hành

## Ví dụ truy vấn

```sql
-- Danh sách sản phẩm mẫu
SELECT id, name, code, brand, selling_price, category_id
FROM fulgo_products
WHERE domain_id = 0
LIMIT 50;
```

```javascript
// Ví dụ Prisma
const products = await prisma.fulgoProducts.findMany({
	where: { domainId: 0 },
	select: { id: true, name: true, code: true, sellingPrice: true },
	take: 50,
});
```

## Hành động chính

- Duyệt sản phẩm với bộ lọc (mã, tên, thương hiệu, danh mục, tồn kho)
- Chỉnh sửa hàng loạt: cập nhật giá, thay đổi danh mục, bật/tắt
- Nhập / xuất (CSV) và điều hướng đến chi tiết sản phẩm hoặc ánh xạ theo marketplace

## Thuật ngữ: Phân loại sản phẩm vs Danh mục

- Phân loại sản phẩm: taxonomy nội bộ dùng cho tìm kiếm/lọc/hiển thị.
- Danh mục marketplace: danh mục bên ngoài do từng marketplace sử dụng; một sản phẩm có thể ánh xạ khác nhau trên mỗi marketplace.

## Dữ liệu hiển thị

- SKU, tên sản phẩm, mã, thương hiệu, giá bán, danh mục, tóm tắt tồn kho

## Quy tắc / chính sách

- Thay đổi giá áp dụng ngay trong hệ thống; để phản ánh lên marketplace cần thực hiện đồng bộ riêng.
- Thay đổi thông tin chính yêu cầu quyền `products:edit`.

## Quyền (tạm)

- Xem: `products:view`
- Chỉnh sửa: `products:edit`
- Nhập: `products:import`

## KPI

- Mục tiêu thao tác hàng loạt: **< 90s cho 1.000 mục**
- Tỉ lệ nhập thành công: **> 98%**

## Lỗi và UX

- Hiển thị xác thực lỗi nhập CSV theo dòng và cung cấp file mẫu

## Ghi chú / tích hợp

- Tích hợp với `ProductService` và thành phần ánh xạ marketplace
