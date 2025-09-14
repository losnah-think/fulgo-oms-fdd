---
archivedFrom: docs/data/suppliers.md
---

---
id: data-suppliers
title: 공급사 (mockSuppliers)
---

**목적**

공급사/벤더 정보의 목업 스키마를 제공합니다.

**스키마(예)**

- `id`: number|string
- `name`: string
- `contact`: string|null
- `default_lead_time_days`: number|null

**예시**

```json
{ "id": 1, "name": "공급사1", "contact": "supplier@example.com", "default_lead_time_days": 7 }
```

**비고**

계약/공급가 정책은 공급사별 필드로 확장하세요.
