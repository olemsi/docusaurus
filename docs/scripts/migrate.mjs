#!/usr/bin/env node
/**
 * DITA → Markdown migration script v2.
 * - Deep XML traversal for tables and nested content
 * - Groups fragments into single pages per topic
 * - Anonymizes brand names
 */

import fs from 'fs';
import path from 'path';
import { XMLParser } from 'fast-xml-parser';

const DITA_DIR = path.resolve('../documentation');
const DOCS_DIR = path.resolve('.');

// Brand anonymization
const BRAND_REPLACEMENTS = [
  [/\bMone?tix\b/gi, 'Some Platform'],
  [/\bGTXPoint\b/gi, 'Some Platform'],
  [/\bJetPay\b/gi, 'Some Platform'],
  [/\bRocketPay\b/gi, 'Some Platform'],
  [/\bSapihost\b/gi, 'Some Platform'],
  [/\bLancore\b/gi, 'Some Platform'],
  [/\bFlagman\b/gi, 'Some Platform'],
  [/\b1D3\b/g, 'Some Platform'],
  [/\bEcommpay\b/gi, 'Some Platform'],
  [/gtxpoint\.com/gi, 'example.com'],
  [/monetix\.io/gi, 'example.com'],
  [/monetix\.pro/gi, 'example.com'],
  [/jetpay\.kz/gi, 'example.com'],
  [/developers-asia\.com/gi, 'example.com'],
  [/api-developers\.gtxpoint\.com/gi, 'api.example.com'],
  [/api\.developers-asia\.com/gi, 'api.example.com'],
  [/support@\S+/gi, 'support@example.com'],
  [/itechpsp/gi, 'platform'],
  [/paymnts\.pro/gi, 'example.com'],
  [/paymntspro/gi, 'platform'],
];

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  preserveOrder: false,
  trimValues: true,
  parseTagValue: false,
  processEntities: false,
  ignoreDeclaration: true,
  ignorePiTags: true,
});

function anonymize(text) {
  if (!text) return text;
  for (const [regex, replacement] of BRAND_REPLACEMENTS) {
    text = text.replace(regex, replacement);
  }
  return text;
}

// ====== Deep text extraction ======
function extractText(node) {
  if (node === null || node === undefined) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (typeof node === 'boolean') return '';
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node['@_product'] === 'in_progress') return '';

  let result = '';
  for (const key of Object.keys(node)) {
    if (key.startsWith('@_')) continue;
    const val = node[key];
    if (key === '#text') { result += val; }
    else if (key === 'b' || key === 'term') { result += `**${extractText(val)}**`; }
    else if (key === 'i') { result += `*${extractText(val)}*`; }
    else if (key === 'codeph' || key === 'apiname' || key === 'cmdname') { result += `\`${extractText(val)}\``; }
    else if (key === 'uicontrol' || key === 'wintitle') { result += `**${extractText(val)}**`; }
    else if (key === 'filepath' || key === 'varname') { result += `\`${extractText(val)}\``; }
    else if (key === 'xref') {
      const xrefs = Array.isArray(val) ? val : [val];
      for (const xr of xrefs) {
        const href = (typeof xr === 'object' ? xr['@_href'] : '') || '';
        const text = extractText(xr) || href;
        result += href.startsWith('http') ? `[${text}](${href})` : text;
      }
    }
    else if (key === 'image') { /* skip */ }
    else { result += extractText(val); }
  }
  return result;
}

// ====== Table conversion ======
function convertTable(tbl) {
  let md = '';
  try {
    const rows = [];

    function extractRows(container, tag) {
      if (!container) return;
      const rowElements = container[tag];
      if (!rowElements) return;
      const rowArr = Array.isArray(rowElements) ? rowElements : [rowElements];
      for (const row of rowArr) {
        const cellTag = row.entry ? 'entry' : 'stentry';
        const cells = row[cellTag];
        if (!cells) continue;
        const cellArr = Array.isArray(cells) ? cells : [cells];
        rows.push(cellArr.map(c => extractText(c).trim().replace(/\|/g, '\\|').replace(/\n/g, ' ')));
      }
    }

    // Standard DITA table: table > tgroup > thead/tbody > row > entry
    if (tbl.tgroup) {
      const tg = tbl.tgroup;
      extractRows(tg.thead, 'row');
      extractRows(tg.tbody, 'row');
    }
    // Simpletable: simpletable > sthead/strow > stentry
    if (tbl.sthead) extractRows(tbl, 'sthead');
    if (tbl.strow) extractRows(tbl, 'strow');
    // Direct rows
    if (tbl.row) extractRows(tbl, 'row');

    if (rows.length > 0) {
      const colCount = Math.max(...rows.map(r => r.length));
      const header = rows[0];
      while (header.length < colCount) header.push('');
      md += '| ' + header.join(' | ') + ' |\n';
      md += '| ' + header.map(() => '---').join(' | ') + ' |\n';
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        while (row.length < colCount) row.push('');
        md += '| ' + row.join(' | ') + ' |\n';
      }
      md += '\n';
    }
  } catch (e) { /* skip broken tables */ }
  return md;
}

// ====== Body to Markdown ======
function bodyToMarkdown(body) {
  if (!body) return '';

  function processNode(node) {
    if (!node) return '';
    if (typeof node === 'string') return node + '\n\n';
    let out = '';
    if (node['@_product'] === 'in_progress') return '';

    // Paragraphs
    if (node.p !== undefined) {
      const ps = Array.isArray(node.p) ? node.p : [node.p];
      for (const p of ps) {
        if (p?.['@_product'] === 'in_progress') continue;
        const text = extractText(p).trim();
        if (text) out += text + '\n\n';
      }
    }
    // Sections
    if (node.section) {
      const secs = Array.isArray(node.section) ? node.section : [node.section];
      for (const sec of secs) {
        if (sec?.['@_product'] === 'in_progress') continue;
        if (sec.title) out += `## ${extractText(sec.title)}\n\n`;
        out += bodyToMarkdown(sec);
      }
    }
    // Lists
    for (const listType of ['ul', 'ol']) {
      if (node[listType]) {
        const list = node[listType];
        const items = Array.isArray(list.li) ? list.li : (list.li ? [list.li] : []);
        let i = 1;
        for (const li of items) {
          if (li?.['@_product'] === 'in_progress') continue;
          const text = extractText(li).trim();
          if (text) out += (listType === 'ol' ? `${i++}. ` : '- ') + text + '\n';
        }
        out += '\n';
      }
    }
    // Code blocks
    if (node.codeblock) {
      const cbs = Array.isArray(node.codeblock) ? node.codeblock : [node.codeblock];
      for (const cb of cbs) {
        const lang = cb?.['@_outputclass'] || '';
        out += '```' + lang + '\n' + extractText(cb) + '\n```\n\n';
      }
    }
    // Tables
    if (node.table) {
      const tables = Array.isArray(node.table) ? node.table : [node.table];
      for (const t of tables) out += convertTable(t);
    }
    if (node.simpletable) {
      const tables = Array.isArray(node.simpletable) ? node.simpletable : [node.simpletable];
      for (const t of tables) out += convertTable(t);
    }
    // Notes
    if (node.note) {
      const notes = Array.isArray(node.note) ? node.note : [node.note];
      for (const note of notes) {
        const type = note['@_type'] || 'info';
        const text = extractText(note).trim();
        const vt = type === 'warning' ? 'warning' : type === 'danger' ? 'danger' : 'tip';
        if (text) out += `::: ${vt}\n${text}\n:::\n\n`;
      }
    }
    // Definition list
    if (node.dl) {
      const dl = node.dl;
      const entries = Array.isArray(dl.dlentry) ? dl.dlentry : (dl.dlentry ? [dl.dlentry] : []);
      for (const entry of entries) {
        const dt = extractText(entry.dt).trim();
        const dd = extractText(entry.dd).trim();
        if (dt) out += `**${dt}**\n: ${dd}\n\n`;
      }
    }
    return out;
  }

  return processNode(body);
}

// ====== Convert single DITA file ======
function convertDitaFile(filePath) {
  try {
    let xml = fs.readFileSync(filePath, 'utf-8');
    xml = xml.replace(/<\?xml[^?]*\?>/g, '');
    xml = xml.replace(/<!DOCTYPE[^>]*>/g, '');
    xml = xml.replace(/<\?[^?]*\?>/g, '');
    // Keyrefs
    xml = xml.replace(/<ph\s+keyref="wl"\s*\/>/g, 'Some Platform');
    xml = xml.replace(/<ph\s+keyref="gate"\s*\/>/g, 'Gate');
    xml = xml.replace(/<ph\s+keyref="pp"\s*\/>/g, 'Payment Page');
    xml = xml.replace(/<ph\s+keyref="db"\s*\/>/g, 'Dashboard');
    xml = xml.replace(/<ph\s+keyref="pm"\s*\/>/g, 'Payment methods');
    xml = xml.replace(/<ph\s+keyref="support"\s*\/>/g, 'support@example.com');
    xml = xml.replace(/<ph\s+keyref="([^"]*)"\s*\/>/g, '$1');
    xml = xml.replace(/<ph\s+keyref="([^"]*)"[^>]*>([^<]*)<\/ph>/g, '$2');

    const parsed = parser.parse(xml);
    const topic = parsed.topic || parsed.concept || parsed.task || parsed.reference;
    if (!topic) return null;

    const title = extractText(topic.title) || 'Untitled';
    const body = topic.body || topic.conbody || topic.taskbody || topic.refbody;
    let md = `# ${title}\n\n`;
    if (body) md += bodyToMarkdown(body);
    md = anonymize(md);
    md = md.replace(/\n{3,}/g, '\n\n').trim() + '\n';
    return { title, md };
  } catch (e) { return null; }
}

// ====== Group files by topic prefix ======
function groupAndMigrate(filePattern, outputDir, lang = 'en') {
  const allFiles = fs.readdirSync(DITA_DIR).filter(f =>
    f.startsWith(lang + '_') && f.endsWith('.dita') && f.includes(filePattern)
  ).sort();

  if (allFiles.length === 0) return 0;

  const outDir = path.join(DOCS_DIR, outputDir);
  fs.mkdirSync(outDir, { recursive: true });

  // Group files by topic: en_gate_purchase_sale.dita → gate-purchase
  // Strategy: extract the "base topic" and group subtopics under it
  const groups = new Map();

  // Keywords that indicate a subtopic (step/detail of a parent topic)
  const subKeywords = ['_callback', '_send_request', '_generate_signature', '_collect_parameters',
    '_build_request', '_encode_request', '_check_', '_intermediate_', '_final_callback',
    '_additional', '_redirect', '_response', '_statuses', '_model', '_scheme', '_testing',
    '_acc_ver', '_ch1', '_ch2'];

  for (const file of allFiles) {
    let name = file.replace(/^(en|ru)_/, '').replace(/\.dita$/, '');

    // Find the base topic name
    let baseName = name;
    for (const kw of subKeywords) {
      const idx = name.indexOf(kw);
      if (idx > 0) {
        baseName = name.substring(0, idx);
        break;
      }
    }

    if (!groups.has(baseName)) groups.set(baseName, []);
    groups.get(baseName).push(file);
  }

  let count = 0;
  for (const [baseName, files] of groups) {
    // Sort: main topic first, then alphabetically
    files.sort((a, b) => {
      const aName = a.replace(/^(en|ru)_/, '').replace(/\.dita$/, '');
      const bName = b.replace(/^(en|ru)_/, '').replace(/\.dita$/, '');
      if (aName === baseName) return -1;
      if (bName === baseName) return 1;
      return aName.localeCompare(bName);
    });

    let combined = '';
    let pageTitle = '';

    for (const file of files) {
      const result = convertDitaFile(path.join(DITA_DIR, file));
      if (!result || result.md.length < 20) continue;

      if (!pageTitle) {
        pageTitle = result.title;
        combined += result.md + '\n\n';
      } else {
        // Downgrade headings for merged content
        let content = result.md;
        content = content.replace(/^### /gm, '#### ');
        content = content.replace(/^## /gm, '### ');
        content = content.replace(/^# /gm, '## ');
        combined += content + '\n\n';
      }
    }

    if (combined.length < 50) continue;

    combined = combined.replace(/\n{3,}/g, '\n\n').trim() + '\n';

    const slug = baseName.replace(/_/g, '-');
    fs.writeFileSync(path.join(outDir, slug + '.md'), combined);
    count++;
  }

  console.log(`  ${lang.toUpperCase()} ${filePattern}: ${allFiles.length} files → ${count} pages in ${outputDir}`);
  return count;
}

// ====== MAIN ======
console.log('DITA → Markdown migration v2\n');
console.log(`Source: ${DITA_DIR}`);
console.log(`Output: ${DOCS_DIR}\n`);

console.log('=== Gate ===');
groupAndMigrate('gate', 'gate', 'en');
groupAndMigrate('gate', 'ru/gate', 'ru');

console.log('\n=== Payment Page ===');
groupAndMigrate('pp_', 'payment-page', 'en');
groupAndMigrate('pp_', 'ru/payment-page', 'ru');

console.log('\n=== Payment Methods ===');
groupAndMigrate('pm_', 'payment-methods', 'en');
groupAndMigrate('pm_', 'ru/payment-methods', 'ru');

console.log('\n=== APAC Payment Methods ===');
groupAndMigrate('apac_pm_', 'payment-methods', 'en');  // merge into same dir

console.log('\n=== Dashboard ===');
groupAndMigrate('db_', 'dashboard', 'en');
groupAndMigrate('db_', 'ru/dashboard', 'ru');

console.log('\n=== 3-D Secure ===');
groupAndMigrate('3ds2', 'gate', 'en');  // merge into gate
groupAndMigrate('3ds2', 'ru/gate', 'ru');

console.log('\n=== SDK ===');
groupAndMigrate('sdk_', 'sdk', 'en');
groupAndMigrate('sdk_', 'ru/sdk', 'ru');

console.log('\n=== FAQ ===');
groupAndMigrate('faq', 'faq', 'en');
groupAndMigrate('faq', 'ru/faq', 'ru');

console.log('\n=== APAC General ===');
groupAndMigrate('apac_', 'gate', 'en');  // APAC gate topics → gate

console.log('\n✅ Migration complete!');
