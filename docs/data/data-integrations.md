---
id: data-integrations
title: 통합 데이터 (mockIntegrations)
slug: /data/data-integrations
---

**목적**

외부 시스템(예: Cafe24)과의 연동에서 사용되는 주요 필드와 예시를 수집합니다.

**주요 필드 예시**

- `channelOrderId`: string — 외부 채널 주문 ID
- `channel`: string — 채널명 (cafe24, shopify 등)
- `payload`: object — 채널별 원시 페이로드

**예시**

```json
{
  "channelOrderId":"cafe24-1234",
  "channel":"cafe24",
  "payload": { /* cafe24 raw data */ }
}
```
