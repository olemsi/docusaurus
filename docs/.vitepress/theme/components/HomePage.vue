<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
})

const mainPaths = [
  {
    title: 'Payment Widget',
    tag: 'Default path',
    link: '/payment-page/',
    label: 'Hosted checkout',
    description: 'Use the hosted flow when speed matters more than custom payment UI.',
    bullets: ['Shortest path to first payment', 'Frontend handled by the hosted page', 'Quickstart and signing examples'],
  },
  {
    title: 'Host-to-host API',
    tag: 'Full control',
    link: '/gate/',
    label: 'Server-to-server',
    description: 'Use the direct API when your backend owns orchestration, callbacks, and state changes.',
    bullets: ['Transactional API requests', 'Best for custom checkout logic', 'Control over retry and callback handling'],
  },
]

const secondaryPaths = [
  {
    title: 'Payment Methods',
    desc: 'Country and method pages with technical notes, supported banks, and integration guidance.',
    link: '/payment-methods/',
  },
  {
    title: 'Dashboard',
    desc: 'Balances, transaction search, monitoring, and operational flows for finance and support teams.',
    link: '/dashboard/',
  },
]

const trustPoints = [
  { value: 'Quickstarts', text: 'Hosted and server-to-server start pages with copy-paste examples.' },
  { value: 'API references', text: 'Transactional and reporting specs with useful first screens.' },
  { value: 'Method docs', text: 'Open Banking and country pages with real implementation context.' },
  { value: 'Operational docs', text: 'Dashboard, balances, and reporting pages for live operations.' },
]

const quickLinks = [
  { title: 'Payment Widget quickstart', desc: 'Fastest route to first payment', link: '/payment-page/pp-quickstart-overview' },
  { title: 'Host-to-host API quickstart', desc: 'Direct backend integration path', link: '/gate/gate-quickstart' },
  { title: 'Signature generation', desc: 'Build signed requests correctly', link: '/gate/signature-gate' },
  { title: 'Open Banking', desc: 'Country pages and bank-specific notes', link: '/payment-methods/openbanking' },
  { title: 'Host-to-host API reference', desc: 'Transactional OpenAPI spec', link: '/api-reference/gate.html' },
  { title: 'Data API reference', desc: 'Reporting and retrieval endpoints', link: '/api-reference/data.html' },
]
</script>

<template>
  <div class="home" :class="{ visible }">
    <nav class="home-nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo">Platform Docs</a>
        <div class="nav-links">
          <a href="/gate/">Host-to-host API</a>
          <a href="/payment-page/">Payment Widget</a>
          <a href="/payment-methods/">Payment Methods</a>
          <a href="/dashboard/">Dashboard</a>
          <a href="/api-reference/gate.html" class="nav-api">API Reference</a>
        </div>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-orb hero-orb-a"></div>
      <div class="hero-orb hero-orb-b"></div>
      <div class="hero-grid"></div>
      <div class="hero-shell">
        <div class="hero-copy">
          <div class="hero-badge">Platform developer docs</div>
          <h1 class="hero-title">
            Integrate payments with the
            <span class="hero-accent">right entry point</span>
          </h1>
          <p class="hero-desc">
            Choose hosted checkout or server-to-server integration, then follow the matching quickstart.
          </p>
        </div>

        <div class="hero-panel">
          <div class="panel-heading">Recommended start</div>
          <div class="panel-stack">
            <a href="/payment-page/pp-quickstart-overview" class="panel-row panel-row-primary">
              <div>
                <div class="panel-kicker">Recommended for most merchants</div>
                <div class="panel-title">Payment Widget quickstart</div>
              </div>
              <span>Open</span>
            </a>
          </div>
          <div class="panel-meta">
            <span>Need backend control instead?</span>
            <div class="panel-links">
              <a href="/gate/gate-quickstart">Host-to-host API quickstart</a>
              <a href="/gate/signature-gate">Signature guide</a>
              <a href="/api-reference/gate.html">API reference</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="paths">
      <div class="section-head">
        <h2>Pick the integration model first</h2>
      </div>

      <div class="paths-grid">
        <a v-for="path in mainPaths" :key="path.title" :href="path.link" class="path-card">
          <div class="path-top">
            <span class="path-label">{{ path.label }}</span>
            <span class="path-tag">{{ path.tag }}</span>
          </div>
          <h3>{{ path.title }}</h3>
          <p>{{ path.description }}</p>
          <ul>
            <li v-for="bullet in path.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
          <span class="path-link">Explore</span>
        </a>
      </div>

      <div class="secondary-grid">
        <a v-for="item in secondaryPaths" :key="item.title" :href="item.link" class="secondary-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </a>
      </div>
    </section>

    <section class="proof">
      <div class="section-head">
        <p class="eyebrow">What you get</p>
        <h2>Docs for implementation, reference, and live operations</h2>
      </div>

      <div class="proof-grid">
        <div v-for="item in trustPoints" :key="item.value" class="proof-card">
          <div class="proof-value">{{ item.value }}</div>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section class="links">
      <div class="section-head">
        <p class="eyebrow">Jump directly</p>
        <h2>Open the page that matches the question</h2>
      </div>

      <div class="links-grid">
        <a v-for="item in quickLinks" :key="item.title" :href="item.link" class="link-card">
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          <span>Open</span>
        </a>
      </div>
    </section>

    <footer class="home-footer">
      <p>&copy; {{ new Date().getFullYear() }} Platform</p>
    </footer>
  </div>
</template>

<style scoped>
.home {
  --c-bg: #020202;
  --c-surface: #0b0b0c;
  --c-surface-2: #121214;
  --c-border: #1c1c20;
  --c-text: #ededed;
  --c-text-2: #a1a1aa;
  --c-text-3: #64646b;
  --c-accent: #8f7cff;
  --c-accent-2: #6cb3ff;
  --c-accent-3: #d3b8ff;
  --c-accent-soft: rgba(143, 124, 255, 0.16);
  --c-border-soft: rgba(255, 255, 255, 0.06);
  background:
    radial-gradient(circle at 12% 0%, rgba(211, 184, 255, 0.07), transparent 24%),
    radial-gradient(circle at 88% 8%, rgba(108, 179, 255, 0.08), transparent 24%),
    #020202;
  color: var(--c-text);
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  opacity: 0;
  transition: opacity 0.55s ease;
}

.home.visible {
  opacity: 1;
}

.home > section,
.home > footer {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 24px;
}

.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(2, 2, 2, 0.82);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-links a {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--c-text-2);
  text-decoration: none;
  border-radius: 7px;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
}

.nav-links a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.04);
}

.nav-api {
  margin-left: 8px;
  border: 1px solid var(--c-border);
}

.hero {
  position: relative;
  padding-top: 126px !important;
  padding-bottom: 30px !important;
}

.hero-shell {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.76fr);
  gap: 24px;
  align-items: center;
}

.hero-copy {
  position: relative;
  z-index: 1;
  overflow: visible;
}

.hero-orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(60px);
  opacity: 0.7;
  pointer-events: none;
}

.hero-orb-a {
  top: 72px;
  left: 8%;
  width: 240px;
  height: 240px;
  background: rgba(143, 124, 255, 0.1);
}

.hero-orb-b {
  top: 26px;
  right: 10%;
  width: 180px;
  height: 180px;
  background: rgba(108, 179, 255, 0.06);
}

.hero-grid {
  position: absolute;
  inset: 90px 24px 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.42), transparent 76%);
  pointer-events: none;
}

.hero-badge,
.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(143, 124, 255, 0.22);
  background: rgba(143, 124, 255, 0.08);
  color: #e6dcff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero-title {
  max-width: 700px;
  margin: 18px 0 0;
  font-size: clamp(40px, 5.8vw, 64px);
  line-height: 1.06;
  letter-spacing: -0.05em;
  font-weight: 740;
  color: #fff;
  padding-bottom: 0.14em;
  overflow: visible;
}

.hero-accent {
  display: inline;
  color: transparent;
  background: linear-gradient(120deg, #ffffff 0%, #b8a8ff 38%, #8ec5ff 72%, #eadcff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  line-height: inherit;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.hero-desc {
  max-width: 520px;
  margin: 14px 0 0;
  color: var(--c-text-2);
  font-size: 16px;
  line-height: 1.46;
}

.hero-panel {
  position: relative;
  z-index: 1;
  padding: 13px;
  border-radius: 16px;
  border: 1px solid var(--c-border-soft);
  background: linear-gradient(180deg, rgba(16, 16, 18, 0.9), rgba(8, 8, 10, 0.97));
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.22);
}

.panel-heading {
  color: #6f6f78;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.panel-stack {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

.panel-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 13px 14px;
  border-radius: 13px;
  border: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.014);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s, background 0.15s, transform 0.15s;
}

.panel-row:hover {
  transform: translateY(-1px);
  border-color: rgba(183, 166, 255, 0.18);
  background: rgba(255, 255, 255, 0.03);
}

.panel-row-primary {
  background: linear-gradient(135deg, rgba(211, 184, 255, 0.07), rgba(143, 124, 255, 0.06), rgba(108, 179, 255, 0.05));
  border-color: rgba(183, 166, 255, 0.12);
}

.panel-kicker {
  color: #eadcff;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.panel-title {
  margin-top: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.panel-row span,
.panel-meta a,
.path-link {
  color: #c8baff;
  text-decoration: none;
  font-weight: 650;
  font-size: 12px;
}

.panel-meta {
  display: grid;
  gap: 10px;
  margin-top: 14px;
  padding-top: 16px;
  border-top: 1px solid var(--c-border-soft);
}

.panel-meta span {
  color: var(--c-text-3);
  font-size: 12px;
  font-weight: 600;
}

.panel-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.paths,
.proof,
.links {
  padding-top: 18px !important;
  padding-bottom: 56px !important;
}

.section-head {
  margin-bottom: 16px;
}

.section-head h2 {
  max-width: 720px;
  margin: 10px 0 0;
  font-size: clamp(28px, 3.2vw, 36px);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: #fff;
}

.paths-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.path-card,
.secondary-card,
.proof-card,
.link-card {
  text-decoration: none;
  color: inherit;
}

.path-card {
  padding: 20px;
  border-radius: 18px;
  border: 1px solid var(--c-border);
  background: linear-gradient(180deg, rgba(11, 11, 12, 0.98), rgba(8, 8, 10, 0.98));
  transition: transform 0.15s, border-color 0.15s, background 0.15s;
}

.path-card:hover,
.secondary-card:hover,
.link-card:hover {
  transform: translateY(-2px);
  border-color: rgba(183, 166, 255, 0.18);
  background: rgba(255, 255, 255, 0.018);
}

.path-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.path-label,
.path-tag {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.path-label {
  color: var(--c-text-3);
}

.path-tag {
  color: #d8ccff;
}

.path-card h3,
.secondary-card h3,
.link-card h3 {
  margin: 12px 0 0;
  font-size: 20px;
  color: #fff;
  letter-spacing: -0.03em;
}

.path-card p,
.secondary-card p,
.proof-card p,
.link-card p {
  margin: 8px 0 0;
  color: var(--c-text-2);
  font-size: 14px;
  line-height: 1.6;
}

.path-card ul {
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.path-card li {
  position: relative;
  padding-left: 16px;
  color: #d0d7df;
  font-size: 13px;
}

.path-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #b8a8ff;
}

.path-link {
  display: inline-block;
  margin-top: 18px;
}

.secondary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 14px;
}

.secondary-card {
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.012);
  transition: transform 0.15s, border-color 0.15s, background 0.15s;
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.proof-card {
  padding: 18px;
  border-radius: 16px;
  border: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.012);
}

.proof-value {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.link-card {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: start;
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.012);
  transition: transform 0.15s, border-color 0.15s, background 0.15s;
}

.link-card span {
  color: #c8baff;
  font-size: 13px;
  font-weight: 650;
  white-space: nowrap;
}

.home-footer {
  padding: 32px 24px !important;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
}

.home-footer p {
  margin: 0;
  color: var(--c-text-3);
  font-size: 13px;
}

@media (max-width: 960px) {
  .nav-links {
    display: none;
  }

  .hero-shell,
  .paths-grid,
  .proof-grid,
  .links-grid,
  .secondary-grid {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    order: -1;
  }
}

@media (max-width: 640px) {
  .home > section,
  .home > footer,
  .nav-inner {
    padding-left: 16px;
    padding-right: 16px;
  }

  .hero {
    padding-top: 108px !important;
    padding-bottom: 28px !important;
  }

  .hero-desc {
    font-size: 16px;
  }

  .path-card,
  .proof-card,
  .secondary-card,
  .link-card,
  .hero-panel {
    padding: 18px;
  }
}
</style>
