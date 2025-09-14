---
id: 02-orders-detail
title: Chi Tiết Đơn Hàng
---

## Đơn Hàng — Chi Tiết

Mục đích: Xem chi tiết một đơn hàng, quản lý lịch sử trạng thái, thông tin vận chuyển và các thao tác vận hành.

Người dùng chính:

- Nhân viên kho
- Nhân viên hỗ trợ khách hàng
- Nhóm kế toán / thanh toán

### Ví dụ DB

```sql
-- Truy vấn đơn và các mục đơn hàng
SELECT o.id, o.shop_order_no, o.ordered_at, oi.id AS item_id, oi.product_name, oi.qty
FROM fulgo_orders o
JOIN fulgo_order_items oi ON oi.order_id = o.id AND oi.domain_id = o.domain_id
WHERE o.domain_id = 0 AND o.id = ?;
```

```javascript
// Ví dụ Prisma: lấy đơn cùng các mục
const order = await prisma.fulgoOrders.findUnique({
  where: { domainId_id: { domainId: 0, id: 12345 } },
  include: { fulgoOrderItems: true },
});
```

### Các thao tác chính

- Lấy toàn bộ dữ liệu đơn: mục, giá, thuế, chiết khấu, nhật ký và lịch sử trạng thái.
- Chỉnh sửa thông tin vận chuyển khi đơn chưa được giao.
- Thêm ghi chú nội bộ hoặc tag, thực hiện retry cho tích hợp thất bại, và chạy đồng bộ lại.

### Dữ liệu hiển thị

- Chi tiết mục (sản phẩm, SKU, số lượng, giá)
- Thông tin thanh toán
- Trạng thái hoàn thành và thông tin vận chuyển
- Lịch sử thay đổi và audit log

### Quy tắc nghiệp vụ / chính sách

- Các trường liên quan đến tiền (giá, tổng) không được sửa thủ công; các điều chỉnh liên quan phải qua quy trình hoàn/ghi nhận của kế toán.
- Thông tin vận chuyển chỉ được chỉnh sửa khi trạng thái không phải "shipped" và yêu cầu quyền `orders:manage`.

### Quyền (tạm thời)

- Xem: `orders:view`
- Chỉnh sửa vận chuyển / thay đổi trạng thái: `orders:manage`
- Xem log audit: `audit:view`

### Chỉ số thành công / KPI

- Mục tiêu thời gian cập nhật thông tin vận chuyển: **dưới 2 phút**
- Mục tiêu thời gian trung bình xử lý yêu cầu khách hàng từ trang chi tiết: **dưới 5 phút**

### Điều kiện lỗi và UX

- Khi tích hợp bên ngoài lỗi, hiển thị thông báo lỗi từ hệ thống bên ngoài và cung cấp nút thử lại.

### Ghi chú / tích hợp

- Trang chi tiết liên kết từ trang danh sách đơn; có thể cung cấp liên kết sâu đến trang đơn trên marketplace khi có.
