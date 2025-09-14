---
id: 01-orders-list
title: Orders List
---

# Orders — List

## Overview
The Orders List provides a consolidated view of orders pulled from connected marketplaces. It supports searching, filtering, bulk actions, and per-order quick actions.

## Key features
- Unified order feed with source marketplace and external order id.
- Multi-criteria filters: status, date range, marketplace, store, payment method.
- Quick actions: view details, sync status, cancel, create shipment, export.
- Bulk operations: update status, print invoices, export CSV.

## Data shown (examples)
- Order ID (internal)
- External Order ID (marketplace)
- Marketplace / Mall
- Status (New, Confirmed, Packed, Shipped, Cancelled, Returned)
- Total amount, currency
- Customer name / contact
- Created / updated timestamps

## Implementation notes
- Orders are read-through from marketplace webhooks and periodic syncs; UI should reflect last-sync timestamp and conflict indicators.
- Actions that change order state must call the OMS backend API and log an audit record.
---
id: 01-orders-list
title: Orders List
---

# Orders — List

## Overview
The Orders List provides a consolidated view of orders pulled from connected marketplaces. It supports searching, filtering, bulk actions, and per-order quick actions.

## Key features
- Unified order feed with source marketplace and external order id.
- Multi-criteria filters: status, date range, marketplace, store, payment method.
- Quick actions: view details, sync status, cancel, create shipment, export.
- Bulk operations: update status, print invoices, export CSV.

## Data shown (examples)
- Order ID (internal)
- External Order ID (marketplace)
- Marketplace / Mall
- Status (New, Confirmed, Packed, Shipped, Cancelled, Returned)
- Total amount, currency
- Customer name / contact
- Created / updated timestamps

## Implementation notes
- Orders are read-through from marketplace webhooks and periodic syncs; UI should reflect last-sync timestamp and conflict indicators.
- Actions that change order state must call the OMS backend API and log an audit record.
---
id: 01-orders-list
title: Orders List
---

## Orders — List

Purpose: Browse and manage orders across connected marketplaces.
