/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Host-to-host API',
      link: {type: 'doc', id: 'gate/index'},
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Getting started',
          collapsed: true,
          items: [
            'gate/gate-integration-about',
            'gate/gate-how-to-integrate',
            'gate/gate-quickstart',
            'gate/gate-quickstart-basic-implementation',
          ],
        },
        {
          type: 'category',
          label: 'Payment flows',
          collapsed: true,
          items: [
            'gate/gate-purchase',
            'gate/gate-invoice',
            'gate/gate--payments-on-saved-data',
            'gate/gate-refund',
            'gate/gate-payout',
            'gate/gate-account-verification',
          ],
        },
        {
          type: 'category',
          label: 'Procedures and tools',
          collapsed: true,
          items: [
            'gate/gate-procedures',
          ],
        },
        {
          type: 'category',
          label: 'Technical reference',
          collapsed: true,
          items: [
            'gate/gate-sts-protocol',
            'gate/gate-requests-format',
            'gate/signature-gate',
            'gate/gate-testcards',
          ],
        },
        {
          type: 'link',
          label: 'API Reference ↗',
          href: '/api-reference/',
        },
      ],
    },
    {
      type: 'category',
      label: 'Payment Widget',
      link: {type: 'doc', id: 'payment-page/index'},
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Quickstart',
          collapsed: true,
          items: [
            'payment-page/pp-quickstart-overview',
            'payment-page/pp-signature-generation',
            'payment-page/pp-quickstart-basic-implementation',
            'payment-page/pp-interaction',
          ],
        },
        {
          type: 'category',
          label: 'Integration guides',
          collapsed: true,
          items: [
            'payment-page/pp-about',
            'payment-page/pp-interaction-organisation-overview',
            'payment-page/pp-general-interaction',
            'payment-page/pp-ux-configuration',
            'payment-page/pp-opening-html-overview',
            'payment-page/pp-opening-modal-via-javascript-library',
            'payment-page/pp-opening-iframe-via-javascript-library',
          ],
        },
        {
          type: 'category',
          label: 'Payment scenarios',
          collapsed: true,
          items: [
            'payment-page/pp-basic-actions',
            'payment-page/pp-purchase',
            'payment-page/pp-purchase-auth',
            'payment-page/pp-recurring',
            'payment-page/pp-account-verification',
            'payment-page/pp-token',
          ],
        },
        {
          type: 'category',
          label: 'Additional capabilities',
          collapsed: true,
          items: [
            'payment-page/pp',
            'payment-page/pp-3ds',
            'payment-page/pp-avs',
            'payment-page/pp-clarification',
            'payment-page/pp-conversion',
            'payment-page/pp-gathering-customer-data',
            'payment-page/pp-time-limit',
            'payment-page/pp-ui-monitoring',
          ],
        },
        {
          type: 'category',
          label: 'Customisation',
          collapsed: true,
          items: [
            'payment-page/pp--design-customisation',
            'payment-page/pp-design-overview',
            'payment-page/pp--design-requirements',
          ],
        },
        {
          type: 'category',
          label: 'Technical reference',
          collapsed: true,
          items: [
            'payment-page/pp-api',
            'payment-page/pp-formats',
            'payment-page/pp-testcards',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Payment Methods',
      link: {type: 'doc', id: 'payment-methods/index'},
      collapsed: true,
      items: [
        'payment-methods/openbanking',
        {
          type: 'category',
          label: 'Open Banking by country',
          collapsed: true,
          items: [
            'payment-methods/austria',
            'payment-methods/belgium',
            'payment-methods/estonia',
            'payment-methods/finland',
            'payment-methods/france',
            'payment-methods/germany',
            'payment-methods/greece',
            'payment-methods/hungary',
            'payment-methods/latvia',
            'payment-methods/lithuania',
            'payment-methods/netherlands',
            'payment-methods/norway',
            'payment-methods/poland',
            'payment-methods/portugal',
            'payment-methods/romania',
            'payment-methods/spain',
            'payment-methods/sweden',
            'payment-methods/uk',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Dashboard',
      link: {type: 'doc', id: 'dashboard/index'},
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Getting started',
          collapsed: true,
          items: [
            'dashboard/dbl-about',
            'dashboard/dbl-roles-overview',
            'dashboard/dbl-interface-overview',
            'dashboard/dbl-projects',
          ],
        },
        {
          type: 'category',
          label: 'Operations',
          collapsed: true,
          items: [
            'dashboard/dbl-payments-overview',
            'dashboard/dbl-balances-overview',
            'dashboard/dbl-fraud-operations-control-overview',
          ],
        },
        {
          type: 'category',
          label: 'Programmatic access',
          collapsed: true,
          items: [
            'dashboard/dbl-api-protocol',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      link: {type: 'doc', id: 'faq/index'},
      collapsed: true,
      items: [
        'faq/faq-introduction',
        'faq/qck-faq',
        'faq/3ds2-faq',
        'faq/apac-faq',
      ],
    },
  ],
};

module.exports = sidebars;
