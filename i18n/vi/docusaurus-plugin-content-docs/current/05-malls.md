---
id: 05-malls
title: Malls
---

## Malls — Quản lý

Mục đích: Cấu hình và giám sát các mall (marketplace) được kết nối và các tích hợp của chúng.

Người dùng chính:

- Kỹ sư tích hợp
- Đội vận hành
- Quản trị nền tảng

### Các thao tác chính

- Thêm / gỡ kết nối mall và cấu hình thông tin xác thực.
- Cấu hình mapping theo mall (danh mục, thương hiệu) và quản lý lịch đồng bộ.
- Kiểm tra trạng thái đồng bộ, thời gian đồng bộ cuối và nhật ký lỗi.

### Dữ liệu hiển thị

- Tên mall
- Trạng thái kết nối
- Thời điểm đồng bộ cuối
- Thống kê mapping

### Quy tắc nghiệp vụ / chính sách

- Thông tin xác thực mall được mã hóa và chỉ người có `integrations:manage` mới truy cập.
- Khi thêm mall, tạo skeleton mapping ban đầu; cần hoàn thiện trước khi chạy job đồng bộ lớn.

### Quyền (tạm thời)

- Xem: `integrations:view`
- Quản lý: `integrations:manage`

### KPI

- Tỷ lệ đồng bộ thành công mục tiêu: **> 98%**

### Điều kiện lỗi và UX

- Khi token hết hạn, cung cấp hướng dẫn và luồng tái kết nối để refresh credential.

### Ghi chú / tích hợp

- Các connector (ví dụ Cafe24) chạy dưới dạng background job.
