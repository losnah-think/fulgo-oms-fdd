---
id: 08-settings-integrations
title: Cài Đặt — Tích Hợp
---

## Cài đặt — Tích hợp

### Mục đích

Quản lý các tích hợp hệ thống bên ngoài (marketplaces, ERP, v.v.), chứng thực API, và chính sách đồng bộ.

### Người dùng chính

- Kỹ sư tích hợp
- Quản trị nền tảng

### Các thao tác chính

- Thêm / gỡ tích hợp và đăng ký chứng thực (token/khóa).
- Cấu hình khoảng thời gian thu thập/đồng bộ và chính sách retry.
- Xem nhật ký tích hợp, kiểm tra kết nối và kích hoạt re-sync thủ công.

### Dữ liệu hiển thị

- Tên tích hợp
- Trạng thái (bình thường / lỗi)
- Thời điểm thu thập cuối
- Tóm tắt lỗi gần đây

### Quy tắc nghiệp vụ / chính sách

- Chứng thực phải lưu trữ mã hóa và truy cập giới hạn bởi `integrations:manage`.
- Thay đổi khoảng thời gian thu thập sẽ lập lịch lại các job nền; thay đổi lớn cần cân nhắc cửa sổ batch.

### Quyền (tạm thời)

- Xem: `integrations:view`
- Quản lý: `integrations:manage`

### KPI

- Mục tiêu uptime tích hợp: **>= 99%**
- Mục tiêu MTTR: **dưới 30 phút**

### Điều kiện lỗi và UX

- Khi xác thực thất bại, hướng dẫn người dùng thực hiện reconnect.
- Retry thủ công được xử lý bởi job nền.

### Ghi chú / tích hợp

- Các cài đặt adapter riêng lẻ (ví dụ Cafe24) quản lý từ trang này.
