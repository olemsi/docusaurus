#!/usr/bin/env node
/**
 * Groups ALL section fragments into clean pages.
 * - payment-methods: 1 file per method
 * - gate: group by topic (purchase, payout, callbacks, etc.)
 * - payment-page: group by topic
 * - dashboard: group by topic
 */

import fs from 'fs';
import path from 'path';

function groupDir(srcDir, outDir, prefixToStrip) {
  if (!fs.existsSync(srcDir)) return 0;
  fs.mkdirSync(outDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md') && f !== 'index.md');
  const groups = new Map();

  const opKeywords = ['gate', 'pp', 'dash', 'purchase', 'payout', 'refund', 'overview',
    'testing', 'acc', 'recurring', 'callback', 'redirect', 'qr', 'send', 'collect',
    'generate', 'build', 'encode', 'check', 'intermediate', 'final', 'additional',
    'request', 'response', 'statuses', 'model', 'analysis', 'banks', 'ch2', 'ch1',
    'intro', 'about', 'sale', 'auth', 'capture', 'cancel', 'reversal', 'confirm',
    'scheme', 'parameters', 'format', 'interaction', 'preparing', 'processing',
    'emulator', 'design', 'widget', 'method', 'embedded', 'newtab', 'modal',
    'open', 'scheduled', 'invoice', 'token', 'card', 'subscription', 'p2p',
    'mobile', 'sdk', 'instruction', 'details', 'general', 'faq', 'api',
    'signature', 'protocol', 'data', 'balances', 'risks', 'project', 'users',
    'roles', 'reports', 'templates', 'webhook', 'notification'];

  for (const file of files) {
    let name = file.replace(/\.md$/, '');

    // Strip common prefixes
    for (const prefix of prefixToStrip) {
      if (name.startsWith(prefix)) {
        name = name.substring(prefix.length);
        break;
      }
    }

    // Find base topic
    const parts = name.split('-');
    let baseName = name;

    for (let i = 1; i < parts.length; i++) {
      if (opKeywords.includes(parts[i])) {
        const candidate = parts.slice(0, i).join('-');
        if (candidate.length >= 2) {
          baseName = candidate;
          break;
        }
      }
    }

    if (!groups.has(baseName)) groups.set(baseName, []);
    groups.get(baseName).push(file);
  }

  let count = 0;
  for (const [baseName, methodFiles] of groups) {
    // Sort: main file first, then alphabetically
    methodFiles.sort((a, b) => {
      const aSimple = a.replace(/\.md$/, '');
      const bSimple = b.replace(/\.md$/, '');
      // Exact match of baseName goes first
      for (const prefix of prefixToStrip) {
        if (aSimple === prefix + baseName || aSimple === baseName) return -1;
        if (bSimple === prefix + baseName || bSimple === baseName) return 1;
      }
      // Overview/about first
      if (a.includes('overview') || a.includes('about')) return -1;
      if (b.includes('overview') || b.includes('about')) return 1;
      return a.localeCompare(b);
    });

    let combined = '';
    let title = baseName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    for (const file of methodFiles) {
      let content = fs.readFileSync(path.join(srcDir, file), 'utf-8');

      const titleMatch = content.match(/^# (.+)$/m);
      if (titleMatch && !combined) title = titleMatch[1];

      if (combined) {
        content = content.replace(/^#### /gm, '##### ');
        content = content.replace(/^### /gm, '#### ');
        content = content.replace(/^## /gm, '### ');
        content = content.replace(/^# /gm, '## ');
      }

      combined += content + '\n\n---\n\n';
    }

    combined = combined.replace(/---\n\n$/s, '').replace(/\n{3,}/g, '\n\n').trim() + '\n';
    if (combined.length < 50) continue;

    fs.writeFileSync(path.join(outDir, baseName + '.md'), combined);
    count++;
  }

  return count;
}

function swapDirs(original, grouped) {
  const backup = original + '-raw';
  if (fs.existsSync(backup)) fs.rmSync(backup, { recursive: true });
  fs.renameSync(original, backup);
  fs.renameSync(grouped, original);

  // Restore index.md from backup if exists
  const backupIndex = path.join(backup, 'index.md');
  const newIndex = path.join(original, 'index.md');
  if (fs.existsSync(backupIndex) && !fs.existsSync(newIndex)) {
    fs.copyFileSync(backupIndex, newIndex);
  }
}

const BASE = process.cwd();

// Payment Methods
console.log('=== Payment Methods ===');
const pmCount = groupDir(
  path.join(BASE, 'payment-methods'),
  path.join(BASE, 'payment-methods-grouped'),
  ['apac-pm-', 'pm-']
);
console.log(`  EN: ${pmCount} grouped pages`);
swapDirs(path.join(BASE, 'payment-methods'), path.join(BASE, 'payment-methods-grouped'));

// Gate
console.log('=== Gate ===');
const gateCount = groupDir(
  path.join(BASE, 'gate'),
  path.join(BASE, 'gate-grouped'),
  ['apac-gate-', 'gate-', 'apac-', '3ds2-']
);
console.log(`  EN: ${gateCount} grouped pages`);
swapDirs(path.join(BASE, 'gate'), path.join(BASE, 'gate-grouped'));

// Payment Page
console.log('=== Payment Page ===');
const ppCount = groupDir(
  path.join(BASE, 'payment-page'),
  path.join(BASE, 'payment-page-grouped'),
  ['apac-pp-', 'pp-', '3ds2-pp-', '3ds2-']
);
console.log(`  EN: ${ppCount} grouped pages`);
swapDirs(path.join(BASE, 'payment-page'), path.join(BASE, 'payment-page-grouped'));

// Dashboard
console.log('=== Dashboard ===');
const dbCount = groupDir(
  path.join(BASE, 'dashboard'),
  path.join(BASE, 'dashboard-grouped'),
  ['apac-db-', 'db-']
);
console.log(`  EN: ${dbCount} grouped pages`);
swapDirs(path.join(BASE, 'dashboard'), path.join(BASE, 'dashboard-grouped'));

// RU versions
for (const section of ['payment-methods', 'gate', 'payment-page', 'dashboard']) {
  const ruSrc = path.join(BASE, 'ru', section);
  const ruOut = path.join(BASE, 'ru', section + '-grouped');
  if (fs.existsSync(ruSrc) && fs.readdirSync(ruSrc).length > 0) {
    const prefixes = section === 'payment-methods' ? ['apac-pm-', 'pm-'] :
                     section === 'gate' ? ['apac-gate-', 'gate-', 'apac-', '3ds2-'] :
                     section === 'payment-page' ? ['apac-pp-', 'pp-', '3ds2-'] :
                     ['apac-db-', 'db-'];
    const c = groupDir(ruSrc, ruOut, prefixes);
    console.log(`  RU ${section}: ${c} grouped pages`);
    swapDirs(ruSrc, ruOut);
  }
}

// Clean up backups
for (const dir of ['payment-methods-raw', 'gate-raw', 'payment-page-raw', 'dashboard-raw',
  'ru/payment-methods-raw', 'ru/gate-raw', 'ru/payment-page-raw', 'ru/dashboard-raw']) {
  const p = path.join(BASE, dir);
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true });
}

console.log('\n✅ All sections grouped and cleaned up');

// Final counts
for (const dir of ['gate', 'payment-page', 'payment-methods', 'dashboard']) {
  const p = path.join(BASE, dir);
  const count = fs.existsSync(p) ? fs.readdirSync(p).filter(f => f.endsWith('.md')).length : 0;
  console.log(`  ${dir}: ${count} pages`);
}
