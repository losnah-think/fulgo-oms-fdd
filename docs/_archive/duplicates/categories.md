---
archivedFrom: docs/data/categories.md
---

---
id: data-categories
title: 카테고리 데이터 (mockCategories)
---

**목적**

카테고리(트리 구조) 목업 스키마와 예시를 제공합니다. `parentId` 및 `path`를 이용한 계층 표현을 권장합니다.

**스키마**

- `id`: string — 예: `cat-1`
- `code`: string — 내부 코드
- `name`: string — 카테고리명
- `parentId`: string|null — 상위 카테고리 ID
- `path`: string[] — 트리 경로

**예시**

```json
[
  { "id": "cat-1", "code": "CAT-20250913-7392-1", "name": "카테고리1", "parentId": null, "path": ["카테고리1"] },
  { "id": "cat-2", "code": "CAT-20250913-2391-2", "name": "하위카테고리", "parentId": "cat-1", "path": ["카테고리1","하위카테고리"] }
]
```

**비고**

카테고리 변경 시 클라이언트 캐시 invalidation 전략을 고려하세요.
id: data-categories
title: 카테고리 데이터 (mockCategories)

스키마


---
id: data-categories
title: 카테고리 데이터 (mockCategories)
slug: /data/data-categories
---

스키마

- `id`: string — 예: `cat-1`
- `code`: string — 생성 규칙에 따른 코드
- `name`: string — 카테고리 이름

예시

```json
[
  { "id": "cat-1", "code": "CAT-20250913-7392-1", "name": "카테고리1" },
  { "id": "cat-2", "code": "CAT-20250913-2391-2", "name": "카테고리2" }
]
```
```

