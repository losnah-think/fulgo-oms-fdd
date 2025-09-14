---
id: data-classifications
title: 분류(카테고리 트리) 데이터 (mockClassifications)
slug: /data/data-classifications
---

**목적**

분류 트리(분류 체계) 및 트리 기반 필드 예시를 제공합니다.

**스키마**

- `id`: string
- `name`: string
- `parentId`: string|null
- `attributes`: object — 분류별 추가 메타

**예시**

```json
{
  "id":"class-1",
  "name":"상의 > 티셔츠",
  "parentId":"class-0",
  "attributes": {"size": true}
}
```
