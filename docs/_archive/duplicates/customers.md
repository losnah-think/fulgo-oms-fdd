---
archivedFrom: docs/data/customers.md
---

---
id: data-customers
title: 고객 데이터 (mockCustomers)
---

**목적**

고객(구매자) 데이터의 기본 스키마와 예시를 제공합니다. 개인정보는 마스킹/암호화 규약을 따르세요.

**스키마(예)**

- `id`: number|string
- `name`: string
- `email`: string|null
- `phone`: string|null
- `addresses`: array — 주소 객체 배열

**예시**

```json
[
  { "id": 1, "name": "고객1", "phone": "010-0000-1000", "address": "서울시 강남구 1번지" },
  { "id": 2, "name": "고객2", "phone": "010-0000-1001", "address": "서울시 강남구 2번지" }
]
```

**비고**

개인정보 관련 법규(예: 개인정보보호법)에 따라 저장/처리 방침을 문서화하세요.

