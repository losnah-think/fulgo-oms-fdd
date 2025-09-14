const config = require('./docusaurus.config');
const labels = require('./menu-labels.json');

const locale = (config && config.i18n && config.i18n.defaultLocale) || 'en';
const L = labels[locale] || labels['en'];

module.exports = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: L.orders || 'Orders',
      items: ['01-orders-list', '02-orders-detail'],
    },
    {
      type: 'category',
      label: L.products || 'Products',
      items: ['03-products-list', '04-products-detail'],
    },
    {
      type: 'category',
      label: L.stores || 'Malls',
      items: ['05-malls'],
    },
    {
      type: 'category',
      label: L.catalog || 'Catalog',
      items: ['06-categories', '07-vendors'],
    },
    {
      type: 'category',
      label: L.settings || 'Settings & Integrations',
      items: ['08-settings-integrations'],
    },
    {
      type: 'category',
      label: L.data || 'Data',
      items: [
        'data/data-brands',
        'data/data-categories',
        'data/data-classifications',
        'data/data-customers',
        'data/data-integrations',
        'data/data-orders',
        'data/data-cafe24-orders',
        'data/data-product-filters',
        'data/data-products',
        'data/data-shops',
        'data/data-status',
        'data/data-stocks',
        'data/data-suppliers',
        'data/data-warehouses'
      ]
    },
    'schema-reference'
  ],
};
