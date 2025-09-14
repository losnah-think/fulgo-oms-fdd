---
id: 03-products-list
title: Products List
---

# Products — List

## Purpose
Provide a searchable, paginated catalog of products mapped to connected marketplaces, with bulk edit and import/export capabilities.

## Primary users
- Product managers
- Catalog editors
- Operations

## Example queries

```sql
-- Sample products list
SELECT id, name, code, brand, selling_price, category_id
FROM fulgo_products
WHERE domain_id = 0
LIMIT 50;
```

```javascript
// Prisma example
const products = await prisma.fulgoProducts.findMany({
  where: { domainId: 0 },
  select: { id: true, name: true, code: true, sellingPrice: true },
  take: 50,
});
```

## Key actions
- Browse products with filters (code, name, brand, category, stock level)
- Bulk edits: price updates, category changes, enable/disable
- Import/export (CSV) and navigate to product detail or per-marketplace mappings

## Terminology: Product Classification vs Category
- Product Classification: internal taxonomy used by the service for search/filter/listing (e.g. "Clothing > Women > Dresses").
- Mall Category: external categories used by marketplaces. A product can map to different mall categories per marketplace.

Always use these terms consistently in the docs (`Product Classification` = internal, `Mall Category` = external).

## Data shown
- SKU, product name, code, brand, selling price, category, stock summary

## Rules / policies
- Price changes apply immediately in-system; pushing to marketplaces requires an explicit sync.
- Core product edits require `products:edit` permission.

## Permissions (temporary)
- View: `products:view`
- Edit: `products:edit`
- Import: `products:import`

## Success metrics / KPI
- Bulk operation target: **< 90s for 1,000 items**
- Import success rate: **> 98%**

## Errors and UX
- Show inline validation for CSV import errors and provide sample files

## Notes / integrations
- Integrates with `ProductService` and marketplace mapping components
