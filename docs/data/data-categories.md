---
id: data-categories
title: 카테고리 데이터 (mockCategories)
slug: /data/data-categories
---

**목적**

카테고리(카테고리 트리) 목업 스키마와 사용 예시를 제공합니다.

**스키마**

- `id`: string — 카테고리 ID
- `name`: string — 카테고리명
- `parentId`: string|null — 상위 카테고리 ID
- `path`: string[] — 트리 경로
- `level`: number — 깊이

**예시**

```json
{
  "id": "cat-1",
  "name": "상의",
  "parentId": null,
  "path": ["상의"],
  "level": 1
}
```

**비고**

트리 구조의 경우 `parentId`와 `path`를 함께 제공하면 클라이언트가 계층을 재구성하기 쉽습니다.
