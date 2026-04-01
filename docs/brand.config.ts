/**
 * Brand configuration.
 *
 * Change these values to rebrand the entire documentation
 * for a specific company. All pages use these variables
 * through the {{brand.*}} syntax processed at build time.
 */
export const brand = {
  /** Company / platform name shown throughout the docs */
  name: 'Platform',

  /** Short name for compact UI elements */
  shortName: 'Platform',

  /** Main website domain */
  domain: 'platform.dev',

  /** API base URL */
  apiDomain: 'api.platform.dev',

  /** Data API base URL */
  dataDomain: 'data.platform.dev',

  /** Payment Widget domain */
  ppDomain: 'paymentpage.platform.dev',

  /** Dashboard domain */
  dashboardDomain: 'dashboard.platform.dev',

  /** Support email */
  supportEmail: 'support@platform.dev',

  /** Documentation site URL */
  docsUrl: 'https://developers.platform.dev',

  /** Product names */
  products: {
    gate: 'Host-to-host API',
    paymentPage: 'Payment Widget',
    dashboard: 'Dashboard',
    paymentMethods: 'Payment Methods',
  },

  /** Copyright holder */
  copyright: 'Platform',

  /** Logo path (relative to public/) */
  logo: '/logo.svg',
};

export type BrandConfig = typeof brand;
