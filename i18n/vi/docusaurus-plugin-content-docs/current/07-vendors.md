---
id: 07-vendors
title: Nhà Cung Cấp
---

# Nhà Cung Cấp — Quản Lý

## Tổng quan
Nhà cung cấp (vendor) là bên cung cấp hàng hóa. Trang này mô tả mô hình dữ liệu nhà cung cấp, ánh xạ tới sản phẩm, và luồng liên quan đến mua hàng.

## Thành phần chính
- Hồ sơ nhà cung cấp: mã, tên, thông tin liên hệ, thời gian giao hàng mặc định.
- Quan hệ sản phẩm: gán vendor theo SKU, giá mua, MOQ.
- Đơn mua (PO): tạo PO, nhận hàng, đối soát tồn kho.
- Trường kế toán: điều khoản thanh toán, phương thức, mã số thuế.

## Ghi chú tích hợp
- Khi tạo PO tự động theo quy tắc hết hàng, cần có bước kiểm tra trước và quy trình phê duyệt.
- Lưu lịch sử giá vendor-sản phẩm để audit và báo cáo.
