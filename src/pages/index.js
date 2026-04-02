import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

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
];

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
];

const trustPoints = [
  { value: 'Quickstarts', text: 'Hosted and server-to-server start pages with copy-paste examples.' },
  { value: 'API references', text: 'Transactional and reporting specs with useful first screens.' },
  { value: 'Method docs', text: 'Open Banking and country pages with real implementation context.' },
  { value: 'Operational docs', text: 'Dashboard, balances, and reporting pages for live operations.' },
];

const quickLinks = [
  { title: 'Payment Widget quickstart', desc: 'Fastest route to first payment', link: '/payment-page/pp-quickstart-overview' },
  { title: 'Host-to-host API quickstart', desc: 'Direct backend integration path', link: '/gate/gate-quickstart' },
  { title: 'Signature generation', desc: 'Build signed requests correctly', link: '/gate/signature-gate' },
  { title: 'Open Banking', desc: 'Country pages and bank-specific notes', link: '/payment-methods/openbanking' },
  { title: 'Host-to-host API reference', desc: 'Transactional OpenAPI spec', link: '/api-reference/gate.html' },
  { title: 'Data API reference', desc: 'Reporting and retrieval endpoints', link: '/api-reference/data.html' },
];

function HomePage() {
  const gateApiHref = useBaseUrl('/api-reference/gate.html');
  const dataApiHref = useBaseUrl('/api-reference/data.html');

  return (
    <Layout title="Platform Docs" description="Platform developer documentation">
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={`${styles.heroOrb} ${styles.heroOrbA}`} />
          <div className={`${styles.heroOrb} ${styles.heroOrbB}`} />
          <div className={styles.heroGrid} />
          <div className={styles.heroShell}>
            <div className={styles.heroCopy}>
              <div className={styles.heroBadge}>Platform developer docs</div>
              <h1 className={styles.heroTitle}>
                Integrate payments with the <span className={styles.heroAccent}>right entry point</span>
              </h1>
              <p className={styles.heroDesc}>
                Choose hosted checkout or server-to-server integration, then follow the matching quickstart.
              </p>
            </div>

            <div className={styles.widgetShell}>
              <div className={styles.widgetChrome}>
                <div className={styles.widgetDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.widgetBadge}>Payment Widget</div>
              </div>
              <div className={styles.widgetCard}>
                <div className={styles.widgetHeader}>
                  <div>
                    <div className={styles.widgetLabel}>Pay</div>
                    <div className={styles.widgetAmount}>1.00 EUR</div>
                  </div>
                  <div className={styles.widgetLocale}>EN</div>
                </div>

                <div className={styles.widgetSection}>
                  <div className={styles.widgetFieldLabel}>Card number</div>
                  <div className={styles.widgetField}>4242 4242 4242 4242</div>
                </div>

                <div className={styles.widgetSplit}>
                  <div className={styles.widgetSection}>
                    <div className={styles.widgetFieldLabel}>Expiry date</div>
                    <div className={styles.widgetField}>12 / 26</div>
                  </div>
                  <div className={styles.widgetSection}>
                    <div className={styles.widgetFieldLabel}>CVV</div>
                    <div className={styles.widgetField}>•••</div>
                  </div>
                </div>

                <div className={styles.widgetSection}>
                  <div className={styles.widgetFieldLabel}>Card holder</div>
                  <div className={styles.widgetField}>TEST TEST</div>
                </div>

                <div className={styles.widgetCheck}>
                  <span className={styles.widgetCheckBox} />
                  <span>Save payment card</span>
                </div>

                <Link to="/payment-page/pp-quickstart-overview" className={styles.widgetCta}>
                  Open Payment Widget quickstart
                </Link>

                <div className={styles.widgetLinks}>
                  <Link to="/gate/gate-quickstart">Host-to-host quickstart</Link>
                  <Link to="/gate/signature-gate">Signature guide</Link>
                  <Link to="/api-reference/">API reference</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.paths}>
          <div className={styles.sectionHead}>
            <h2>Pick the integration model first</h2>
          </div>

          <div className={styles.pathsGrid}>
            {mainPaths.map((path) => (
              <Link key={path.title} to={path.link} className={styles.pathCard}>
                <div className={styles.pathTop}>
                  <span className={styles.pathLabel}>{path.label}</span>
                  <span className={styles.pathTag}>{path.tag}</span>
                </div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <ul>
                  {path.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className={styles.pathLink}>Explore</span>
              </Link>
            ))}
          </div>

          <div className={styles.secondaryGrid}>
            {secondaryPaths.map((item) => (
              <Link key={item.title} to={item.link} className={styles.secondaryCard}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.proof}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>What you get</p>
            <h2>Docs for implementation, reference, and live operations</h2>
          </div>

          <div className={styles.proofGrid}>
            {trustPoints.map((item) => (
              <div key={item.value} className={styles.proofCard}>
                <div className={styles.proofValue}>{item.value}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.links}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Jump directly</p>
            <h2>Open the page that matches the question</h2>
          </div>

          <div className={styles.linksGrid}>
            {quickLinks.map((item) => {
              const href =
                item.link === '/api-reference/gate.html'
                  ? gateApiHref
                  : item.link === '/api-reference/data.html'
                    ? dataApiHref
                    : null;

              if (href) {
                return (
                  <a key={item.title} href={href} className={styles.linkCard}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <span>Open</span>
                  </a>
                );
              }

              return (
                <Link key={item.title} to={item.link} className={styles.linkCard}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <span>Open</span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
