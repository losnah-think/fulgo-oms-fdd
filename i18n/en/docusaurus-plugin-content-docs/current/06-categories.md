---
id: 06-categories
title: Categories
---

## Categories — Management

Purpose: Define internal product classification and map it to each mall's category taxonomy.

Primary users:

- Product owners
- Catalog managers

### Key actions

- Create, update, and delete internal categories and configure mapping rules.
- Map an internal category to multiple mall categories where applicable.

### Terminology

- Product Classification: the internal taxonomy used by the service for search, filtering, and listing.
- Mall Category: the external category taxonomy used by each marketplace. The same product may map to different mall categories.

These two terms are used consistently across the documentation.

### Business rules / policies

- Before deleting a category, reassign or archive its products.
- Products without a mapping should trigger a warning during synchronization.

### Permissions (temporary)

- Read: `categories:view`
- Edit: `categories:edit`

### Success metrics / KPI

- Mapping coverage target: **>= 95%**

### Error conditions and UX

- Provide reports of unmapped products and quick actions to assign mappings.

### Notes / integrations

- Category mapping is used by the MallProductManager during synchronization.
