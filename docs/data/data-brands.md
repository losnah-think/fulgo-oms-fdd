---
id: data-brands
title: 브랜드 데이터 (mockBrands)
slug: /data/data-brands
---

**목적**

브랜드 정보의 목업 스키마와 예시를 제공합니다. UI/통합 테스트 및 레퍼런스로 사용합니다.

**스키마**

- `id`: string — 브랜드 고유 ID
- `name`: string — 브랜드명
- `code`: string — 내부 코드
- `isActive`: boolean — 활성 여부
- `createdAt`: string (ISO 8601) — 생성 일시

**예시**

```json
{
  "id": "brand-1",
  "name": "FULGO",
  "code": "FULGO",
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00Z"
}
```

**비고**

실제 데이터는 운영 DB 스키마와 다를 수 있습니다. 목업용 예시입니다.
