import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '588'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '131'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '52e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '4b4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '832'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '91d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e75'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '72b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'a33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/01-orders-list',
        component: ComponentCreator('/01-orders-list', '035'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/02-orders-detail',
        component: ComponentCreator('/02-orders-detail', '3a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/03-products-list',
        component: ComponentCreator('/03-products-list', '1f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/04-products-detail',
        component: ComponentCreator('/04-products-detail', 'a85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/05-malls',
        component: ComponentCreator('/05-malls', '436'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/06-categories',
        component: ComponentCreator('/06-categories', '670'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/07-vendors',
        component: ComponentCreator('/07-vendors', '9ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/08-settings-integrations',
        component: ComponentCreator('/08-settings-integrations', '61b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/design-system-colors',
        component: ComponentCreator('/design-system-colors', 'fb8'),
        exact: true
      },
      {
        path: '/design-system-typography',
        component: ComponentCreator('/design-system-typography', '279'),
        exact: true
      },
      {
        path: '/schema-reference',
        component: ComponentCreator('/schema-reference', 'a4c'),
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
