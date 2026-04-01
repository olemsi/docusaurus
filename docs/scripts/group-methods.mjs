#!/usr/bin/env node
/**
 * Groups payment method fragment files into single pages per method.
 * e.g. pm-pix-overview.md + pm-pix-gate-purchase.md + ... → pix.md
 */

import fs from 'fs';
import path from 'path';

const PM_DIR = path.resolve('payment-methods');
const PM_RU_DIR = path.resolve('ru/payment-methods');
const GROUPED_DIR = path.resolve('payment-methods-grouped');
const GROUPED_RU_DIR = path.resolve('ru/payment-methods-grouped');

function groupFiles(srcDir, outDir) {
  if (!fs.existsSync(srcDir)) return 0;
  fs.mkdirSync(outDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md') && f !== 'index.md' && f !== 'pix.md');

  // Extract method names from filenames
  // pm-pix-gate-purchase.md → pix
  // apac-pm-7-eleven-purchase-gate.md → 7-eleven
  const methods = new Map();

  for (const file of files) {
    let method = file.replace(/\.md$/, '');

    // Remove prefix
    method = method.replace(/^pm-/, '').replace(/^apac-pm-/, '');

    // Extract base method name (before operation keywords)
    const parts = method.split('-');
    let baseName = '';

    // Find where the operation part starts
    const opKeywords = ['gate', 'pp', 'dash', 'purchase', 'payout', 'refund', 'overview', 'testing', 'acc', 'recurring', 'callback', 'redirect', 'qr', 'send', 'collect', 'generate', 'build', 'encode', 'check', 'intermediate', 'final', 'additional', 'request', 'response', 'statuses', 'model', 'analysis', 'banks', 'ch2', 'ch1', 'intro', 'about'];

    for (let i = 0; i < parts.length; i++) {
      if (opKeywords.includes(parts[i])) {
        baseName = parts.slice(0, i).join('-');
        break;
      }
    }

    // If no operation keyword found, the whole thing is the method name
    if (!baseName) baseName = method;

    // Skip empty
    if (!baseName) continue;

    if (!methods.has(baseName)) methods.set(baseName, []);
    methods.get(baseName).push(file);
  }

  let count = 0;

  for (const [method, methodFiles] of methods) {
    // Sort: overview first, then gate, then pp, then dash
    methodFiles.sort((a, b) => {
      const order = (f) => {
        if (f.includes('overview') || f.includes('about') || f.includes('intro')) return 0;
        if (f.includes('gate') && f.includes('purchase')) return 1;
        if (f.includes('gate') && f.includes('payout')) return 2;
        if (f.includes('gate') && f.includes('refund')) return 3;
        if (f.includes('gate')) return 4;
        if (f.includes('pp') && f.includes('purchase')) return 5;
        if (f.includes('pp') && f.includes('payout')) return 6;
        if (f.includes('pp')) return 7;
        if (f.includes('dash') || f.includes('analysis')) return 8;
        if (f.includes('testing')) return 9;
        return 5;
      };
      return order(a) - order(b);
    });

    // Read and concatenate
    let combined = '';
    let title = method.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    for (const file of methodFiles) {
      let content = fs.readFileSync(path.join(srcDir, file), 'utf-8');

      // Extract title from first heading
      const titleMatch = content.match(/^# (.+)$/m);
      if (titleMatch && !combined) {
        title = titleMatch[1];
      }

      // Downgrade h1 → h2, h2 → h3 (except first file's h1 becomes the page title)
      if (combined) {
        // Not the first file — downgrade headings
        content = content.replace(/^### /gm, '#### ');
        content = content.replace(/^## /gm, '### ');
        content = content.replace(/^# /gm, '## ');
      }

      combined += content + '\n\n---\n\n';
    }

    // Clean up
    combined = combined.replace(/---\n\n$/s, '');
    combined = combined.replace(/\n{3,}/g, '\n\n');
    combined = combined.replace(/<!-- image -->/g, '');

    // Skip tiny files
    if (combined.length < 50) continue;

    fs.writeFileSync(path.join(outDir, `${method}.md`), combined);
    count++;
  }

  return count;
}

console.log('Grouping payment method fragments...\n');

const enCount = groupFiles(PM_DIR, GROUPED_DIR);
console.log(`EN: ${enCount} grouped method pages`);

const ruCount = groupFiles(PM_RU_DIR, GROUPED_RU_DIR);
console.log(`RU: ${ruCount} grouped method pages`);

// Also group APAC methods
const apacDir = path.join(PM_DIR, 'apac');
const apacGroupedDir = path.join(GROUPED_DIR, 'apac');
if (fs.existsSync(apacDir)) {
  const apacCount = groupFiles(apacDir, apacGroupedDir);
  console.log(`APAC EN: ${apacCount} grouped method pages`);
}

// Copy index.md and pix.md if they exist
for (const f of ['index.md', 'pix.md']) {
  const src = path.join(PM_DIR, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(GROUPED_DIR, f));
  }
}

// Swap directories
console.log('\nSwapping directories...');
const backupDir = PM_DIR + '-flat';
if (fs.existsSync(backupDir)) fs.rmSync(backupDir, { recursive: true });
fs.renameSync(PM_DIR, backupDir);
fs.renameSync(GROUPED_DIR, PM_DIR);

if (fs.existsSync(PM_RU_DIR)) {
  const backupRuDir = PM_RU_DIR + '-flat';
  if (fs.existsSync(backupRuDir)) fs.rmSync(backupRuDir, { recursive: true });
  fs.renameSync(PM_RU_DIR, backupRuDir);
  if (fs.existsSync(GROUPED_RU_DIR)) {
    fs.renameSync(GROUPED_RU_DIR, PM_RU_DIR);
  }
}

console.log('✅ Done! Old flat files backed up to payment-methods-flat/');
