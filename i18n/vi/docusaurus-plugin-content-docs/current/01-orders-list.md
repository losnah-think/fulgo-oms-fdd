---
id: 01-orders-list
title: Danh Sách Đơn Hàng
---

# Đơn Hàng — Danh Sách

## Tổng quan
Danh sách đơn hàng hiển thị tập hợp các đơn được lấy từ các sàn kết nối. Hỗ trợ tìm kiếm, lọc, thao tác theo lô, và thao tác nhanh trên từng đơn.

## Tính năng chính
- Dòng đơn hợp nhất với nguồn sàn và ID đơn bên ngoài.
- Lọc đa tiêu chí: trạng thái, khoảng ngày, sàn, cửa hàng, phương thức thanh toán.
- Thao tác nhanh: xem chi tiết, đồng bộ trạng thái, hủy, tạo vận đơn, xuất.
- Thao tác theo lô: cập nhật trạng thái, in hóa đơn, xuất CSV.

## Dữ liệu hiển thị (ví dụ)
- Order ID (nội bộ)
- External Order ID (từ sàn)
- Sàn / Mall
- Trạng thái (New, Confirmed, Packed, Shipped, Cancelled, Returned)
- Tổng tiền, tiền tệ
- Tên khách hàng / liên hệ
- Thời điểm tạo / cập nhật

## Ghi chú triển khai
- Order lấy về qua webhook của sàn và đồng bộ theo lịch; giao diện nên hiển thị thời gian đồng bộ cuối cùng và chỉ báo xung đột.
- Các hành động thay đổi trạng thái phải gọi API backend của OMS và ghi audit.
