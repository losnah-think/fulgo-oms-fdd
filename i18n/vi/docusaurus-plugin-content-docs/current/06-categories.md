---
id: 06-categories
title: Categories
---

## Danh mục — Quản lý

Mục đích: Định nghĩa phân loại sản phẩm nội bộ và ánh xạ nó với taxonomy danh mục của từng mall.

Người dùng chính:

- Người phụ trách sản phẩm
- Quản lý danh mục

### Các thao tác chính

- Tạo / sửa / xóa danh mục nội bộ và cấu hình quy tắc mapping.
- Ánh xạ một danh mục nội bộ tới nhiều danh mục mall khi cần.

### Thuật ngữ

- Product Classification: taxonomy nội bộ dùng cho tìm kiếm, lọc và danh sách.
- Mall Category: taxonomy bên ngoài do marketplace sử dụng; cùng một sản phẩm có thể ánh xạ khác nhau trên từng mall.

### Quy tắc nghiệp vụ / chính sách

- Trước khi xóa danh mục, cần chuyển sản phẩm sang danh mục khác hoặc lưu trữ.
- Sản phẩm không có mapping sẽ được cảnh báo khi đồng bộ.

### Quyền (tạm thời)

- Xem: `categories:view`
- Sửa: `categories:edit`

### KPI

- Mục tiêu tỷ lệ áp dụng mapping: **>= 95%**

### Điều kiện lỗi và UX

- Cung cấp báo cáo sản phẩm chưa được ánh xạ và hành động nhanh để gán mapping.

### Ghi chú / tích hợp

- Mapping danh mục được MallProductManager sử dụng trong quá trình đồng bộ.
