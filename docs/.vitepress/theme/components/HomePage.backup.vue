<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
})

const sections = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    title: 'Host-to-host API',
    desc: 'Server-to-server integration for direct payment processing with full control over the payment flow.',
    link: '/gate/',
    tag: 'S2S',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="18" rx="3"/><path d="M2 9h20"/><circle cx="7" cy="15" r="1.5"/></svg>`,
    title: 'Payment Widget',
    desc: 'Hosted payment form with 200+ methods. No PCI DSS required. Fully customizable.',
    link: '/payment-page/',
    tag: 'Hosted',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
    title: 'Payment Methods',
    desc: 'Per-method integration guides with parameters, code examples, and flow diagrams.',
    link: '/payment-methods/',
    tag: '200+',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    title: 'Dashboard',
    desc: 'Real-time monitoring, transaction search, risk management, and analytics.',
    link: '/dashboard/',
    tag: 'UI',
  },
]

const resources = [
  { title: 'Host-to-host API Reference', desc: 'OpenAPI spec with request/response schemas', link: '/api-reference/gate.html' },
  { title: 'Data API Reference', desc: 'Reporting and analytics endpoints', link: '/api-reference/data.html' },
  { title: 'Test Cards', desc: 'Simulate payments in sandbox environment', link: '/gate/testcards' },
  { title: 'Error Codes', desc: 'Complete list of response codes', link: '/gate/errorcodes' },
]
</script>

<template>
  <div class="home" :class="{ visible }">

    <!-- Nav -->
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

    <!-- Hero -->
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="hero-content">
        <div class="hero-badge">Developer Documentation</div>
        <h1 class="hero-title">
          Build payments<br>
          <span class="hero-gradient">that just work.</span>
        </h1>
        <p class="hero-desc">
          Everything you need to integrate payments: guides, API references, SDKs, and code examples.
        </p>
        <div class="hero-actions">
          <a href="/gate/" class="btn btn-primary">
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
          <a href="/api-reference/gate.html" class="btn btn-secondary">API Reference</a>
        </div>
      </div>
    </section>

    <!-- Sections grid -->
    <section class="sections">
      <div class="sections-grid">
        <a
          v-for="(s, i) in sections"
          :key="s.title"
          :href="s.link"
          class="card"
          :style="{ '--delay': i * 80 + 'ms' }"
        >
          <div class="card-top">
            <div class="card-icon" v-html="s.icon"></div>
            <span class="card-tag">{{ s.tag }}</span>
          </div>
          <h3 class="card-title">{{ s.title }}</h3>
          <p class="card-desc">{{ s.desc }}</p>
          <div class="card-link">
            Explore
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </div>
        </a>
      </div>
    </section>

    <!-- Resources -->
    <section class="resources">
      <h2 class="resources-title">Quick Links</h2>
      <div class="resources-grid">
        <a
          v-for="r in resources"
          :key="r.title"
          :href="r.link"
          class="resource"
        >
          <div class="resource-text">
            <h4>{{ r.title }}</h4>
            <p>{{ r.desc }}</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="home-footer">
      <p>&copy; {{ new Date().getFullYear() }} Platform</p>
    </footer>

  </div>
</template>

<style scoped>
/* ── Base ── */
.home {
  --c-bg: #000;
  --c-surface: #0a0a0a;
  --c-border: #1a1a1a;
  --c-text: #ededed;
  --c-text-2: #888;
  --c-text-3: #555;
  --c-accent: #3b82f6;
  --c-accent-soft: rgba(59, 130, 246, 0.12);

  background: var(--c-bg);
  color: var(--c-text);
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.home > section,
.home > footer {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Nav ── */
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--c-border);
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  text-decoration: none;
  color: #fff;
  font-weight: 650;
  font-size: 15px;
  letter-spacing: -0.01em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-links a {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 450;
  color: var(--c-text-2);
  text-decoration: none;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;
}

.nav-links a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

.nav-api {
  margin-left: 8px;
  border: 1px solid var(--c-border) !important;
}

.nav-api:hover {
  border-color: #333 !important;
}

@media (max-width: 768px) {
  .nav-links { display: none; }
}

/* ── Entrance animation ── */
.home {
  opacity: 0;
  transition: opacity 0.6s ease;
}
.home.visible {
  opacity: 1;
}


/* ── Hero ── */
.hero {
  position: relative;
  padding-top: 160px !important;
  padding-bottom: 80px !important;
  text-align: center;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  border: 1px solid var(--c-border);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: var(--c-text-2);
  margin-bottom: 32px;
  letter-spacing: 0.02em;
}

.hero-title {
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin: 0 0 24px;
  color: #fff;
}

.hero-gradient {
  background: linear-gradient(135deg, #3b82f6 0%, #a78bfa 50%, #f472b6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 18px;
  line-height: 1.6;
  color: var(--c-text-2);
  max-width: 520px;
  margin: 0 auto 40px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 550;
  text-decoration: none;
  transition: all 0.15s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: #fff;
  color: #000;
}
.btn-primary:hover {
  background: #e5e5e5;
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  color: var(--c-text);
  border: 1px solid var(--c-border);
}
.btn-secondary:hover {
  border-color: #333;
  background: rgba(255,255,255,0.04);
}


/* ── Section cards ── */
.sections {
  padding-bottom: 80px !important;
}

.sections-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--c-border);
  border: 1px solid var(--c-border);
  border-radius: 16px;
  overflow: hidden;
}

@media (max-width: 640px) {
  .sections-grid { grid-template-columns: 1fr; }
}

.card {
  background: var(--c-surface);
  padding: 32px;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
  display: flex;
  flex-direction: column;

  opacity: 0;
  transform: translateY(12px);
  animation: cardIn 0.5s ease forwards;
  animation-delay: var(--delay);
}

@keyframes cardIn {
  to { opacity: 1; transform: translateY(0); }
}

.card:hover {
  background: #111;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--c-accent-soft);
  color: var(--c-accent);
}

.card-tag {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(255,255,255,0.06);
  color: var(--c-text-3);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
  color: #fff;
  letter-spacing: -0.01em;
}

.card-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--c-text-2);
  margin: 0 0 auto;
  padding-bottom: 20px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--c-accent);
  transition: gap 0.15s;
}

.card:hover .card-link {
  gap: 10px;
}


/* ── Resources ── */
.resources {
  padding-bottom: 100px !important;
}

.resources-title {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--c-text-3);
  margin: 0 0 20px;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (max-width: 640px) {
  .resources-grid { grid-template-columns: 1fr; }
}

.resource {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid var(--c-border);
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: all 0.15s;
}

.resource:hover {
  border-color: #333;
  background: rgba(255,255,255,0.02);
}

.resource:hover svg {
  transform: translateX(3px);
}

.resource svg {
  color: var(--c-text-3);
  flex-shrink: 0;
  transition: transform 0.15s;
}

.resource h4 {
  font-size: 14px;
  font-weight: 550;
  margin: 0 0 3px;
  color: var(--c-text);
}

.resource p {
  font-size: 13px;
  color: var(--c-text-3);
  margin: 0;
}


/* ── Footer ── */
.home-footer {
  padding: 32px 24px !important;
  border-top: 1px solid var(--c-border);
  text-align: center;
}

.home-footer p {
  font-size: 13px;
  color: var(--c-text-3);
  margin: 0;
}
</style>
