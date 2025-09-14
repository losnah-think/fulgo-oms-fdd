const config = require('./docusaurus.config');
const labels = require('./menu-labels.json');

const locale = (config && config.i18n && config.i18n.defaultLocale) || 'en';
const L = labels[locale] || labels['en'];

module.exports = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'orders',
      items: ['01-orders-list', '02-orders-detail'],
    },
    {
      type: 'category',
      label: 'products',
      items: ['03-products-list', '04-products-detail'],
    },
    {
      type: 'category',
      label: 'stores',
      items: ['05-malls'],
    },
    {
      type: 'category',
      label: 'catalog',
      items: ['06-categories', '07-vendors'],
    },
    {
      type: 'category',
      label: 'settings',
      items: ['08-settings-integrations'],
    },
    'schema-reference'
  ],
};
