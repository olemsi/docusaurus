const repo = process.env.GITHUB_REPOSITORY || '';
const [owner = '', repoName = ''] = repo.split('/');
const isUserPage = repoName.endsWith('.github.io');

const url = process.env.DOCUSAURUS_URL || (owner ? `https://${owner}.github.io` : 'https://developers.platform.dev');
const baseUrl = process.env.DOCUSAURUS_BASE_URL || (repoName && !isUserPage ? `/${repoName}/` : '/');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Platform Docs',
  tagline: 'Platform developer documentation',
  favicon: 'favicon.svg',
  url,
  baseUrl,
  trailingSlash: true,
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  staticDirectories: ['docs/public'],
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          exclude: [
            'index.md',
            '.vitepress/**',
            'node_modules/**',
            'public/**',
            'package.json',
            'package-lock.json',
            'brand.config.ts',
            'scripts/**',
            'ru/**',
            'sdk/**',
            'payment-methods-flat/**',
            'faq/faq.md',
            'gate/gate.md',
            'payment-page/pp-addendum-data.md',
            'payment-page/pp-parameters.md',
            'payment-page/pp-ui-monitoring-handlers.md',
            'payment-page/pp-3ds-data-formats.md',
            '**/*.html'
          ],
          editUrl: undefined,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Platform Docs',
      hideOnScroll: false,
      items: [
        { to: '/gate/', label: 'Host-to-host API', position: 'left' },
        { to: '/payment-page/', label: 'Payment Widget', position: 'left' },
        { to: '/payment-methods/', label: 'Payment Methods', position: 'left' },
        { to: '/dashboard/', label: 'Dashboard', position: 'left' },
        { to: '/api-reference/', label: 'API Reference', position: 'left' },
        { type: 'custom-ask-ai', position: 'right' }
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright ${new Date().getFullYear()} Platform`,
    },
  },
};

module.exports = config;
