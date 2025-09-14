import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/vi/',
    component: ComponentCreator('/vi/', 'f7b'),
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
        path: '/vi/design-system-colors',
        component: ComponentCreator('/vi/design-system-colors', 'c99'),
        exact: true
      },
      {
        path: '/vi/design-system-typography',
        component: ComponentCreator('/vi/design-system-typography', 'c5f'),
        exact: true
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
