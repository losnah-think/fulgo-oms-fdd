module.exports = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en', 'vi'],
    localeConfigs: {
      ko: { label: '한국어' },
      en: { label: 'English' },
      vi: { label: 'Tiếng Việt' },
    },
  },
  title: 'FULGO OMS Docs',
  tagline: 'FDD Documentation',
  // Allow overriding site URL and baseUrl via environment variables so the
  // same repo can deploy to GitHub Pages (gh-pages) or Vercel.
  // Set SITE_URL and BASE_URL in CI (e.g. SITE_URL=https://losnah-think.github.io BASE_URL=/fulgo-oms-fdd/)
  url: process.env.SITE_URL || 'https://fulgo-oms-fdd.vercel.app',
  baseUrl: process.env.BASE_URL || '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'losnah-think',
  projectName: 'fulgo-oms-fdd',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/losnah-think/fulgo-oms-fdd/edit/main/docusaurus/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'FULGO',
        src: 'img/fulgo-logo.svg',
      },
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        { to: '/schema-reference', label: 'Schema', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        { href: 'https://github.com/losnah-think/fulgo-oms-fdd', label: 'GitHub', position: 'right' },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['bash', 'sql', 'json', 'java', 'typescript'],
    },
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&display=swap'
  ],
  scripts: [
    '/js/copy-code.js',
    '/js/sidebar-i18n.js'
  ],
  headTags: [],
};
