---
id: data-brands
title: 브랜드 데이터 (mockBrands)
---

브랜드 목업 데이터의 스키마와 예시입니다.

스키마

- `id` (string): 내부 식별자 (예: `brand-1`)
- `code` (string): 시스템에서 생성한 코드
- `name` (string): 브랜드명
- `preferredClassificationIds` (string[]): 권장 분류 ID 목록
- `preferredCategories` (string[][]): 권장 분류 경로 배열

예시 (mock 데이터 발췌)

```json
{
  "id": "brand-1",
  "code": "BRAND-20250913-4823-1",
  "name": "브랜드1",
  "preferredClassificationIds": ["c-1"],
  "preferredCategories": [["의류","남성","셔츠"]]
}
```
---
id: data-brands
title: 브랜드 데이터 (mockBrands)
---

브랜드 목업 데이터의 스키마와 예시입니다.

스키마

- `id`: string — 내부 식별자 (예: `brand-1`)
- `code`: string — 생성 규칙에 따른 코드 (예: `BRAND-20250913-1234-1`)
- `name`: string — 브랜드 이름
- `preferredClassificationIds`: string[] — 우선 분류 ID 목록
- `preferredCategories`: string[][] — 분류 경로 배열


예시 (mock에서 발췌)

```json
{
  "id": "brand-1",
  "code": "BRAND-20250913-4823-1",
  "name": "브랜드1",
  "preferredClassificationIds": ["c-1"],
  "preferredCategories": [["의류","남성","셔츠"]]
}
```

