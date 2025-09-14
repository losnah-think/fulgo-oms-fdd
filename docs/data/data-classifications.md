---
id: data-classifications
title: 분류 데이터 (mockClassifications)
---

**목적**

상품 분류(분류 체계) 목업 스키마와 예시를 제공합니다.

**스키마(예)**

- `id`: string
- `name`: string
- `path`: string[]

**예시**

```json
[
  { "id": "cl-1", "name": "의류", "path": ["의류"] },
  { "id": "cl-2", "name": "의류 > 남성 > 셔츠", "path": ["의류","남성","셔츠"] }
]
```

