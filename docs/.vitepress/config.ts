import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { brand } from '../brand.config'

// Vite plugin: serve raw .md files for AI access
function serveRawMarkdown() {
  return {
    name: 'serve-raw-markdown',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith('.md') && !req.url.includes('.vitepress')) {
          const filePath = path.join(process.cwd(), req.url)
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.end(fs.readFileSync(filePath, 'utf-8'))
            return
          }
        }
        next()
      })
    },
  }
}

// Sidebar item from a file — reads title, skips stubs
function item(dir: string, slug: string, overrideTitle?: string) {
  const filePath = path.join(process.cwd(), dir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n').filter(l => l.trim().length > 0)
  if (lines.length < 4) return null
  let title = overrideTitle || slug.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())
  const first = content.split('\n')[0]
  if (!overrideTitle && first.startsWith('# ')) title = first.slice(2).trim()
  if (title.length > 55) title = title.slice(0, 52) + '...'
  return { text: title, link: `/${dir}/${slug}` }
}

// Collapsible sidebar group — filters null items
function group(label: string, items: (any | null)[], collapsed = true) {
  const filtered = items.filter((i): i is NonNullable<typeof i> => i != null)
  if (filtered.length === 0) return null
  return { text: label, collapsed, items: filtered }
}

// Filter nulls from sidebar arrays
function sidebar(items: (any | null)[]) {
  return items.filter((i): i is NonNullable<typeof i> => i != null)
}

// Auto-generate sidebar items from directory (for payment-methods)
function autoSidebar(dir: string, basePath: string) {
  const fullDir = path.join(process.cwd(), dir)
  if (!fs.existsSync(fullDir)) return []
  const files = fs.readdirSync(fullDir)
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .sort()
  return files.flatMap(f => {
    const slug = f.replace(/\.md$/, '')
    const content = fs.readFileSync(path.join(fullDir, f), 'utf-8')
    const lines = content.split('\n').filter(l => l.trim().length > 0)
    if (lines.length < 4) return []
    let title = slug.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())
    const first = content.split('\n')[0]
    if (first.startsWith('# ')) title = first.slice(2).trim()
    if (title.length > 50) title = title.slice(0, 47) + '...'
    return [{ text: title, link: `${basePath}/${slug}` }]
  })
}


export default defineConfig({
  title: `${brand.shortName} Docs`,
  description: `${brand.name} payment platform integration guides and API reference`,
  appearance: 'force-dark',
  srcExclude: ['ru/**'],

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap', rel: 'stylesheet' }],
  ],

  vite: {
    plugins: [serveRawMarkdown()],
  },

  lang: 'en',

  themeConfig: {
    logo: brand.logo,
    siteTitle: `${brand.shortName} Docs`,

    nav: [
      { text: 'Host-to-host API', link: '/gate/' },
      { text: 'Payment Widget', link: '/payment-page/' },
      { text: 'Payment Methods', link: '/payment-methods/' },
      { text: 'Dashboard', link: '/dashboard/' },
      { text: 'API Reference', items: [
        { text: 'Host-to-host API', link: '/api-reference/gate.html', target: '_self' },
        { text: 'Data API', link: '/api-reference/data.html', target: '_self' },
      ]},
    ],

    sidebar: {
      // ── Gate ──
      '/gate/': [
        { text: 'Overview', link: '/gate/' },
        group('Getting started', [
          { text: 'Section map', link: '/gate/gate-integration-about' },
          { text: 'Integration overview', link: '/gate/gate-how-to-integrate' },
          { text: 'Quickstart', link: '/gate/gate-quickstart' },
          { text: 'Basic implementation', link: '/gate/gate-quickstart-basic-implementation' },
        ], true),
        group('Payment flows', [
          { text: 'One-time purchases', link: '/gate/gate-purchase' },
          { text: 'Payment link purchases', link: '/gate/gate-invoice' },
          { text: 'COF purchases', link: '/gate/gate--payments-on-saved-data' },
          { text: 'Purchase refunds', link: '/gate/gate-refund' },
          { text: 'Payouts', link: '/gate/gate-payout' },
          { text: 'Payment verification', link: '/gate/gate-account-verification' },
        ], true),
        group('Procedures and tools', [
          { text: 'Auxiliary procedures', link: '/gate/gate-procedures' },
          { text: 'Additional capabilities', link: '/gate/gate' },
        ], true),
        group('Technical reference', [
          { text: 'API Description', link: '/gate/gate-sts-protocol' },
          { text: 'Request format', link: '/gate/gate-requests-format' },
          { text: 'Signature generation', link: '/gate/signature-gate' },
          { text: 'Test cards', link: '/gate/gate-testcards' },
        ], true),
        { text: 'API Reference ↗', link: '/api-reference/gate.html' },
      ],

      // ── Payment Widget ──
      '/payment-page/': [
        { text: 'Overview', link: '/payment-page/' },
        group('Quickstart', [
          { text: 'Quickstart', link: '/payment-page/pp-quickstart-overview' },
          { text: 'Signature generation', link: '/payment-page/pp-signature-generation' },
          { text: 'Basic implementation', link: '/payment-page/pp-quickstart-basic-implementation' },
          { text: 'Callback handling', link: '/payment-page/pp-interaction' },
        ], true),
        group('Integration guides', [
          { text: 'Section map', link: '/payment-page/pp-about' },
          { text: 'Integration overview', link: '/payment-page/pp-interaction-organisation-overview' },
          { text: 'Interaction model', link: '/payment-page/pp-general-interaction' },
          { text: 'UX overview', link: '/payment-page/pp-ux-configuration' },
          { text: 'Open in new tab', link: '/payment-page/pp-opening-html-overview' },
          { text: 'Open in modal', link: '/payment-page/pp-opening-modal-via-javascript-library' },
          { text: 'Open in iframe', link: '/payment-page/pp-opening-iframe-via-javascript-library' },
        ], true),
        group('Payment scenarios', [
          { text: 'Scenario overview', link: '/payment-page/pp-basic-actions' },
          { text: 'Purchase processing', link: '/payment-page/pp-purchase' },
          { text: 'Authorisation hold', link: '/payment-page/pp-purchase-auth' },
          { text: 'COF purchase registration', link: '/payment-page/pp-recurring' },
          { text: 'Payment verification', link: '/payment-page/pp-account-verification' },
          { text: 'Tokenization', link: '/payment-page/pp-token' },
        ], true),
        group('Additional capabilities', [
          { text: 'Overview', link: '/payment-page/pp' },
          { text: '3-D Secure', link: '/payment-page/pp-3ds' },
          { text: 'AVS', link: '/payment-page/pp-avs' },
          { text: 'Additional payment info', link: '/payment-page/pp-clarification' },
          { text: 'Currency conversion', link: '/payment-page/pp-conversion' },
          { text: 'Collecting customer data', link: '/payment-page/pp-gathering-customer-data' },
          { text: 'Time limit', link: '/payment-page/pp-time-limit' },
          { text: 'UI event handling', link: '/payment-page/pp-ui-monitoring' },
        ], true),
        group('Customisation', [
          { text: 'Overview', link: '/payment-page/pp--design-customisation' },
          { text: 'Design overview', link: '/payment-page/pp-design-overview' },
          { text: 'Design requirements', link: '/payment-page/pp--design-requirements' },
        ], true),
        group('Technical reference', [
          { text: 'API Description', link: '/payment-page/pp-api' },
          { text: 'Parameters', link: '/payment-page/pp-parameters' },
          { text: 'Data formats', link: '/payment-page/pp-formats' },
          { text: 'Test cards', link: '/payment-page/pp-testcards' },
        ], true),
      ],

      // ── Payment Methods ──
      '/payment-methods/': sidebar([
        { text: 'Payment Methods', link: '/payment-methods/' },
        item('payment-methods', 'openbanking'),
        group('Open Banking by country', [
          item('payment-methods', 'austria'),
          item('payment-methods', 'belgium'),
          item('payment-methods', 'estonia'),
          item('payment-methods', 'finland'),
          item('payment-methods', 'france'),
          item('payment-methods', 'germany'),
          item('payment-methods', 'greece'),
          item('payment-methods', 'hungary'),
          item('payment-methods', 'latvia'),
          item('payment-methods', 'lithuania'),
          item('payment-methods', 'netherlands'),
          item('payment-methods', 'norway'),
          item('payment-methods', 'poland'),
          item('payment-methods', 'portugal'),
          item('payment-methods', 'romania'),
          item('payment-methods', 'spain'),
          item('payment-methods', 'sweden'),
          item('payment-methods', 'uk'),
        ], true),
      ]),

      // ── Dashboard ──
      '/dashboard/': [
        { text: 'Overview', link: '/dashboard/' },
        group('Getting started', [
          { text: 'Section map', link: '/dashboard/dbl-about' },
          { text: 'Capabilities and roles', link: '/dashboard/dbl-roles-overview' },
          { text: 'User interface', link: '/dashboard/dbl-interface-overview' },
          { text: 'Managing projects', link: '/dashboard/dbl-projects' },
        ], true),
        group('Operations', [
          { text: 'Payments', link: '/dashboard/dbl-payments-overview' },
          { text: 'Balances', link: '/dashboard/dbl-balances-overview' },
          { text: 'Risk management', link: '/dashboard/dbl-fraud-operations-control-overview' },
        ], true),
        group('Programmatic access', [
          { text: 'Using Data API', link: '/dashboard/dbl-api-protocol' },
        ], true),
      ],
    },

    socialLinks: [],

    footer: {
      message: `${brand.name} — payment platform documentation`,
      copyright: `© ${new Date().getFullYear()} ${brand.copyright}`,
    },

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
    },
  },
})
