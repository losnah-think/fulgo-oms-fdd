---
id: 02-orders-detail
title: Orders Detail
---

## Orders — Detail

Purpose: Inspect a single order in detail and manage status history, shipping information, and operational actions.

Primary users:

- Warehouse operators
- Customer support agents
- Accounting / payments teams

### DB examples

```sql
-- Query an order with its line items
SELECT o.id, o.shop_order_no, o.ordered_at, oi.id AS item_id, oi.product_name, oi.qty
FROM fulgo_orders o
JOIN fulgo_order_items oi ON oi.order_id = o.id AND oi.domain_id = o.domain_id
WHERE o.domain_id = 0 AND o.id = ?;
```

```javascript
// Prisma example: fetch order with items
const order = await prisma.fulgoOrders.findUnique({
  where: { domainId_id: { domainId: 0, id: 12345 } },
  include: { fulgoOrderItems: true },
});
```

### Key actions

- Retrieve full order dataset: line items, pricing, taxes, discounts, logs, and status history.
- Edit shipping details when the order is not yet shipped.
- Add internal notes or tags, trigger retries for failed integrations, and re-run synchronization tasks.

### Displayed data

- Line item details (product, SKU, quantity, price)
- Payment and billing information
- Fulfillment status and shipment tracking
- Audit trail and changelog

### Business rules / policies

- Monetary fields (prices, totals) must not be edited manually; refunds and accounting adjustments must go through finance workflows.
- Shipping information can be edited only when the order status is not "shipped" and requires the `orders:manage` permission.

### Permissions (temporary)

- Read: `orders:view`
- Edit shipping / change status: `orders:manage`
- View audit logs: `audit:view`

### Success metrics / KPIs

- Target time to update shipping information: **under 2 minutes**
- Target mean time to resolve a customer inquiry from the order detail page: **under 5 minutes**

### Error conditions and UX

- For external integration failures, surface the upstream error message and provide a retry action.

### Notes / integrations

- Order detail is linked from the orders list. Optionally include a deep link to the corresponding marketplace order page when available.

