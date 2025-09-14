---
id: 08-settings-integrations
title: Settings Integrations
---

## Settings — Integrations

### Purpose

Manage external system integrations (marketplaces, ERP, etc.), API credentials, and synchronization policies.

### Primary users

- Integration engineers
- Platform administrators

### Key actions

- Add or remove integrations and register credentials (tokens/keys).
- Configure collection/sync intervals and retry policies.
- View integration logs, run connection tests, and trigger manual re-sync.

### Displayed data

- Integration name
- Status (healthy / error)
- Last collection time
- Recent error summary

### Business rules / policies

- Credentials must be stored encrypted and access is restricted to users with `integrations:manage`.
- Changing collection intervals will reschedule background jobs; large changes should account for batch windows.

### Permissions (temporary)

- Read: `integrations:view`
- Manage: `integrations:manage`

### Success metrics / KPIs

- Target uptime for integrations: **>= 99%**
- Mean time to recover (MTTR) target: **under 30 minutes**

### Error conditions and UX

- On authentication failure, present guided reconnection flows.
- Manual retries are handled by background jobs.

### Notes / integrations

- Per-adapter settings (e.g. Cafe24) are managed from this page.
