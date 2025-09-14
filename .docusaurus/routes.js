import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/vi/',
    component: ComponentCreator('/vi/', '972'),
    routes: [
      {
        path: '/vi/',
        component: ComponentCreator('/vi/', '3b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/01-orders-list',
        component: ComponentCreator('/vi/01-orders-list', '3c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/02-orders-detail',
        component: ComponentCreator('/vi/02-orders-detail', '09f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/03-products-list',
        component: ComponentCreator('/vi/03-products-list', 'c28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/04-products-detail',
        component: ComponentCreator('/vi/04-products-detail', 'cbc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/05-malls',
        component: ComponentCreator('/vi/05-malls', '15f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/06-categories',
        component: ComponentCreator('/vi/06-categories', '1a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/07-vendors',
        component: ComponentCreator('/vi/07-vendors', 'ff0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/08-settings-integrations',
        component: ComponentCreator('/vi/08-settings-integrations', '2df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-brands',
        component: ComponentCreator('/vi/data/data-brands', '4ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-cafe24-orders',
        component: ComponentCreator('/vi/data/data-cafe24-orders', 'f5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-categories',
        component: ComponentCreator('/vi/data/data-categories', '3ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-classifications',
        component: ComponentCreator('/vi/data/data-classifications', '490'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-customers',
        component: ComponentCreator('/vi/data/data-customers', '5f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-integrations',
        component: ComponentCreator('/vi/data/data-integrations', '133'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-orders',
        component: ComponentCreator('/vi/data/data-orders', '60a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-product-filters',
        component: ComponentCreator('/vi/data/data-product-filters', 'd63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-products',
        component: ComponentCreator('/vi/data/data-products', 'ce1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-shops',
        component: ComponentCreator('/vi/data/data-shops', '7b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-status',
        component: ComponentCreator('/vi/data/data-status', '04b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-stocks',
        component: ComponentCreator('/vi/data/data-stocks', '778'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-suppliers',
        component: ComponentCreator('/vi/data/data-suppliers', 'b60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/data/data-warehouses',
        component: ComponentCreator('/vi/data/data-warehouses', '9dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/schema-reference',
        component: ComponentCreator('/vi/schema-reference', '254'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
