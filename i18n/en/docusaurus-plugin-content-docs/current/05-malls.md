---
id: 05-malls
title: Malls
---

## Malls — Management

Purpose: Configure and monitor connected malls (marketplaces) and their integrations.

Primary users:

- Integration engineers
- Operations teams
- Platform administrators

### Key actions

- Add/remove mall connections and configure credentials.
- Configure per-mall mapping (categories, brands) and manage synchronization schedules.
- Inspect sync status, last sync time, and error logs.

### Displayed data

- Mall name and identifier
- Connection status
- Last synchronization timestamp
- Mapping statistics (number of mapped categories/brands)

### Business rules / policies

- Mall credentials are stored encrypted and can only be accessed by users with `integrations:manage`.
- When adding a mall, an initial mapping skeleton is generated; mappings should be finalized before large-scale sync jobs.

### Permissions (temporary)

- Read: `integrations:view`
- Manage: `integrations:manage`

### Success metrics / KPI

- Target sync success rate: **> 98%**

### Error conditions and UX

- When a token expires, show guidance and a reconnect flow to refresh credentials.

### Notes / integrations

- Connectors (adapters) such as Cafe24 run as background jobs.
