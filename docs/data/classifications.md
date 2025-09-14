---
id: data-classifications
title: 분류 트리 (mockClassifications)
---

분류(분류 트리) 목업 데이터 스키마와 예시입니다. 트리 구조로 `children` 필드를 포함합니다.

스키마

- `id`: string
- `name`: string
- `children`?: array of same structure


예시 (mock에서 발췌, 일부)

```json
{
  "id": "cl-1",
  "name": "의류",
  "children": [
    {
      "id": "cl-1-1",
      "name": "남성",
      "children": [
        { "id": "cl-1-1-1", "name": "셔츠" },
        { "id": "cl-1-1-2", "name": "팬츠" }
      ]
    }
  ]
}
```

