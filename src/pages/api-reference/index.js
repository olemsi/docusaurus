import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const references = [
  {
    eyebrow: 'Transactional',
    title: 'Host-to-host API',
    description: 'Server-to-server endpoints for payments, refunds, payouts, verification, and callbacks.',
    href: '/api-reference/gate.html',
  },
  {
    eyebrow: 'Reporting',
    title: 'Data API',
    description: 'Balance, operation, and payment retrieval endpoints for operational and reporting use cases.',
    href: '/api-reference/data.html',
  },
];

function ApiReferencePage() {
  return (
    <Layout title="API Reference" description="Platform API reference hub">
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>API Reference</p>
          <h1>Open the spec you need</h1>
          <p className={styles.description}>
            Use Host-to-host API for transactional payment flows and Data API for reporting and retrieval.
          </p>
        </section>

        <section className={styles.grid}>
          {references.map((item) => (
            <a key={item.title} className={styles.card} href={useBaseUrl(item.href)}>
              <div className={styles.cardEyebrow}>{item.eyebrow}</div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span>Open</span>
            </a>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export default ApiReferencePage;
