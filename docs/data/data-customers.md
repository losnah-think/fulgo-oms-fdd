---
id: data-customers
title: 고객 데이터 (mockCustomers)
slug: /data/data-customers
---

**목적**

고객(구매자) 기본 정보와 주소, 연락처 예시를 제공합니다.

**스키마(주요 필드)**

- `id`: string — 고객 ID
- `name`: string — 고객명
- `email`: string — 이메일
- `phone`: string — 핸드폰
- `addresses`: array — 주소 목록 (billing/shipping)

**예시**

```json
{
  "id":"cust-1",
  "name":"홍길동",
  "email":"hong@example.com",
  "phone":"010-1234-5678",
  "addresses":[{"type":"shipping","address":"서울시 강남구 ..."}]
}
```
