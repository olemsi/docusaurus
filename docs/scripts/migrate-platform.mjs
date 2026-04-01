#!/usr/bin/env node
/**
 * DITA → Markdown migration for Platform (ecl).
 * - Full audience filtering from ditamaps
 * - Keyref resolution from ditamap keydefs
 * - xref resolution (dita cross-references → markdown links or text)
 * - Country/currency reference resolution
 * Source: gaas/ directory, Language: EN only
 */

import fs from 'fs';
import path from 'path';
import { XMLParser } from 'fast-xml-parser';

const DITA_DIR = path.resolve('../../gaas');
const DOCS_DIR = path.resolve('..');
const BRAND = 'ecl';

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


// ══════════════════════════════════════════
// Reference lookups (countries, currencies)
// ══════════════════════════════════════════

const countryCache = new Map();
const currencyCache = new Map();

function loadRefName(filePath) {
  try {
    let xml = fs.readFileSync(filePath, 'utf-8');
    const sdMatch = xml.match(/<shortdesc>([^<]+)<\/shortdesc>/);
    return sdMatch ? sdMatch[1].trim() : null;
  } catch { return null; }
}

function resolveRef(href) {
  if (!href) return null;
  // references/en/countries_by_id/AT.dita → AT (code, like original docs)
  const countryMatch = href.match(/countries_by_id\/([A-Z]{2})\.dita/);
  if (countryMatch) {
    return countryMatch[1];
  }
  // references/en/currencies/EUR.dita → EUR
  const currMatch = href.match(/currencies\/([A-Z0-9_]+)\.dita/);
  if (currMatch) {
    return currMatch[1];
  }
  return null;
}


// ══════════════════════════════════════════
// Keyref resolution from ditamaps
// ══════════════════════════════════════════

/** Global keys (from brand + shared configs) */
const globalKeys = new Map([
  ['wl', 'Platform'],
  ['gate', 'Gate'],
  ['pp', 'Payment Page'],
  ['db', 'Dashboard'],
  ['pm', 'Payment methods'],
  ['support', 'support@platform.dev'],
  ['support_email', 'support@platform.dev'],
  ['sts_api', 'API'],
]);

/** Parse keydefs from a ditamap and return Map<keyname, value> */
function parseKeydefs(ditamapPath) {
  const keys = new Map(globalKeys);
  try {
    const xml = fs.readFileSync(ditamapPath, 'utf-8');
    // Match: <keydef keys="name">...<keyword>value</keyword>...
    const keydefRegex = /<keydef[^>]*keys="([^"]+)"[^>]*>[\s\S]*?<keyword>([^<]+)<\/keyword>/g;
    let m;
    while ((m = keydefRegex.exec(xml)) !== null) {
      keys.set(m[1], m[2].trim());
    }
    // Also match keydefs with href (link-type keys)
    const keydefHrefRegex = /<keydef[^>]*keys="([^"]+)"[^>]*href="([^"]+)"[^>]*>[\s\S]*?<linktext>([^<]+)<\/linktext>/g;
    while ((m = keydefHrefRegex.exec(xml)) !== null) {
      keys.set(m[1], m[3].trim());
    }
  } catch { /* ignore */ }
  return keys;
}

// Load global brand keys
const brandKeysPath = path.join(DITA_DIR, 'en_keys_ecl.ditamap');
if (fs.existsSync(brandKeysPath)) {
  const brandKeys = parseKeydefs(brandKeysPath);
  for (const [k, v] of brandKeys) globalKeys.set(k, v);
  console.log(`Loaded ${brandKeys.size} brand keys from en_keys_ecl.ditamap`);
}


// ══════════════════════════════════════════
// Ditamap audience filter
// ══════════════════════════════════════════

function parseDitamap(filePath) {
  const allowed = new Set();
  try {
    let xml = fs.readFileSync(filePath, 'utf-8');
    xml = xml.replace(/<\?xml[^?]*\?>/g, '');
    xml = xml.replace(/<!DOCTYPE[^>]*>/g, '');
    xml = xml.replace(/<!ENTITY[^>]*>/g, '');
    xml = xml.replace(/&\w+;/g, '');
    const topicrefPattern = /<topicref[^>]*>/g;
    let match;
    while ((match = topicrefPattern.exec(xml)) !== null) {
      const tag = match[0];
      const hrefMatch = tag.match(/href="([^"]+\.dita)"/);
      if (!hrefMatch) continue;
      const audienceMatch = tag.match(/audience="([^"]*)"/);
      if (!audienceMatch || audienceMatch[1].split(/\s+/).includes(BRAND)) {
        allowed.add(hrefMatch[1]);
      }
    }
    const maprefPattern = /<(?:mapref|topicref)[^>]*href="([^"]+\.ditamap)"[^>]*>/g;
    while ((match = maprefPattern.exec(xml)) !== null) {
      const tag = match[0];
      const audienceMatch = tag.match(/audience="([^"]*)"/);
      if (!audienceMatch || audienceMatch[1].split(/\s+/).includes(BRAND)) {
        const submapPath = path.join(path.dirname(filePath), match[1]);
        if (fs.existsSync(submapPath)) {
          for (const f of parseDitamap(submapPath)) allowed.add(f);
        }
      }
    }
  } catch (e) { console.error(`  ⚠ ${filePath}: ${e.message}`); }
  return allowed;
}

function buildAllowedFiles() {
  console.log('\nBuilding allowed file list...');
  const allowed = { gate: new Set(), pp: new Set(), dashboard: new Set(), pm: new Set() };

  const gateDm = path.join(DITA_DIR, 'en_gate_site.ditamap');
  if (fs.existsSync(gateDm)) { allowed.gate = parseDitamap(gateDm); console.log(`  Gate: ${allowed.gate.size} files`); }

  const ppDm = path.join(DITA_DIR, 'en_paymentpage_site.ditamap');
  if (fs.existsSync(ppDm)) { allowed.pp = parseDitamap(ppDm); console.log(`  PP: ${allowed.pp.size} files`); }

  const dbDm = path.join(DITA_DIR, 'en_dblight_site.ditamap');
  if (fs.existsSync(dbDm)) { allowed.dashboard = parseDitamap(dbDm); console.log(`  Dashboard: ${allowed.dashboard.size} files`); }

  // Payment methods — only ditamaps that reference ecl
  for (const dmFile of fs.readdirSync(DITA_DIR).filter(f => f.startsWith('en_pm_') && f.endsWith('.ditamap'))) {
    const content = fs.readFileSync(path.join(DITA_DIR, dmFile), 'utf-8');
    if (new RegExp(`\\b${BRAND}\\b`).test(content)) {
      const method = dmFile.replace('en_pm_', '').replace('.ditamap', '');
      // Add all dita files for this method
      for (const f of fs.readdirSync(DITA_DIR).filter(f => f.startsWith(`en_pm_${method}`) && f.endsWith('.dita'))) {
        allowed.pm.add(f);
      }
    }
  }
  console.log(`  PM: ${allowed.pm.size} files`);
  return allowed;
}


// ══════════════════════════════════════════
// DITA → Markdown conversion
// ══════════════════════════════════════════

/** Current file's keyrefs (set per-ditamap context) */
let currentKeys = globalKeys;

function extractText(node) {
  if (node === null || node === undefined) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (typeof node === 'boolean') return '';
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node['@_product'] === 'in_progress') return '';
  // Skip show_less content (keep show_more — the full version)
  if (node['@_outputclass'] === 'show_less') return '';

  let result = '';
  for (const key of Object.keys(node)) {
    if (key.startsWith('@_')) continue;
    const val = node[key];

    if (key === '#text') {
      result += val;
    } else if (key === 'ph') {
      const phs = Array.isArray(val) ? val : [val];
      for (const ph of phs) {
        if (typeof ph === 'string') { result += ph; continue; }
        // Skip show_less <ph> elements
        if (ph?.['@_outputclass'] === 'show_less') continue;
        const kr = ph?.['@_keyref'];
        if (kr && currentKeys.has(kr)) {
          result += currentKeys.get(kr);
        } else if (kr) {
          result += kr.replace(/_/g, ' ');
        } else {
          result += extractText(ph);
        }
      }
    } else if (key === 'b' || key === 'term') {
      result += `**${extractText(val)}**`;
    } else if (key === 'i') {
      result += `*${extractText(val)}*`;
    } else if (key === 'codeph' || key === 'apiname' || key === 'cmdname') {
      result += `\`${extractText(val)}\``;
    } else if (key === 'uicontrol' || key === 'wintitle') {
      result += `**${extractText(val)}**`;
    } else if (key === 'filepath' || key === 'varname') {
      result += `\`${extractText(val)}\``;
    } else if (key === 'xref') {
      const xrefs = Array.isArray(val) ? val : [val];
      for (let xi = 0; xi < xrefs.length; xi++) {
        const xr = xrefs[xi];
        const href = (typeof xr === 'object' ? xr['@_href'] : '') || '';
        const text = extractText(xr);

        if (href.startsWith('http')) {
          result += `[${text || href}](${href})`;
        } else if (href.endsWith('.dita')) {
          const refName = resolveRef(href);
          if (refName) {
            // Add comma separator between consecutive refs
            if (xi > 0) result += ', ';
            result += refName;
          } else if (text) {
            result += text;
          }
        } else if (text) {
          result += text;
        }
      }
    } else if (key === 'image') {
      /* skip images */
    } else {
      result += extractText(val);
    }
  }
  return result;
}

function convertTable(tbl) {
  let md = '';
  try {
    const rows = [];
    function extractRows(container, tag) {
      if (!container) return;
      const rowElements = container[tag];
      if (!rowElements) return;
      for (const row of (Array.isArray(rowElements) ? rowElements : [rowElements])) {
        const cellTag = row.entry ? 'entry' : 'stentry';
        const cells = row[cellTag];
        if (!cells) continue;
        rows.push((Array.isArray(cells) ? cells : [cells]).map(c =>
          extractText(c).trim().replace(/\|/g, '\\|').replace(/\n/g, ' ')
        ));
      }
    }
    if (tbl.tgroup) { extractRows(tbl.tgroup.thead, 'row'); extractRows(tbl.tgroup.tbody, 'row'); }
    if (tbl.sthead) extractRows(tbl, 'sthead');
    if (tbl.strow) extractRows(tbl, 'strow');
    if (tbl.row) extractRows(tbl, 'row');
    if (rows.length > 0) {
      const cc = Math.max(...rows.map(r => r.length));
      const hdr = rows[0]; while (hdr.length < cc) hdr.push('');
      md += '| ' + hdr.join(' | ') + ' |\n| ' + hdr.map(() => '---').join(' | ') + ' |\n';
      for (let i = 1; i < rows.length; i++) {
        const r = rows[i]; while (r.length < cc) r.push('');
        md += '| ' + r.join(' | ') + ' |\n';
      }
      md += '\n';
    }
  } catch { /* skip */ }
  return md;
}

function bodyToMarkdown(body) {
  if (!body) return '';
  function proc(node) {
    if (!node) return '';
    if (typeof node === 'string') return node + '\n\n';
    let out = '';
    if (node['@_product'] === 'in_progress') return '';

    if (node.p !== undefined) {
      for (const p of (Array.isArray(node.p) ? node.p : [node.p])) {
        if (p?.['@_product'] === 'in_progress') continue;
        if (p?.['@_outputclass'] === 'show_less') continue;
        const text = extractText(p).trim();
        if (text) out += text + '\n\n';
      }
    }
    if (node.section) {
      for (const sec of (Array.isArray(node.section) ? node.section : [node.section])) {
        if (sec?.['@_product'] === 'in_progress') continue;
        if (sec.title) out += `## ${extractText(sec.title)}\n\n`;
        out += bodyToMarkdown(sec);
      }
    }
    for (const lt of ['ul', 'ol']) {
      if (node[lt]) {
        const items = Array.isArray(node[lt].li) ? node[lt].li : (node[lt].li ? [node[lt].li] : []);
        let i = 1;
        for (const li of items) {
          if (li?.['@_product'] === 'in_progress') continue;
          const text = extractText(li).trim();
          if (text) out += (lt === 'ol' ? `${i++}. ` : '- ') + text + '\n';
        }
        out += '\n';
      }
    }
    if (node.codeblock) {
      for (const cb of (Array.isArray(node.codeblock) ? node.codeblock : [node.codeblock])) {
        const lang = (cb?.['@_outputclass'] || '').replace(/^language-/, '');
        out += '```' + lang + '\n' + extractText(cb) + '\n```\n\n';
      }
    }
    if (node.table) { for (const t of (Array.isArray(node.table) ? node.table : [node.table])) out += convertTable(t); }
    if (node.simpletable) { for (const t of (Array.isArray(node.simpletable) ? node.simpletable : [node.simpletable])) out += convertTable(t); }
    if (node.note) {
      for (const note of (Array.isArray(node.note) ? node.note : [node.note])) {
        const type = note['@_type'] || 'info';
        const text = extractText(note).trim();
        const vt = type === 'warning' ? 'warning' : type === 'danger' ? 'danger' : 'tip';
        if (text) out += `::: ${vt}\n${text}\n:::\n\n`;
      }
    }
    if (node.dl) {
      const entries = Array.isArray(node.dl.dlentry) ? node.dl.dlentry : (node.dl.dlentry ? [node.dl.dlentry] : []);
      for (const entry of entries) {
        const dt = extractText(entry.dt).trim();
        const dd = extractText(entry.dd).trim();
        if (dt) out += `**${dt}**\n: ${dd}\n\n`;
      }
    }
    return out;
  }
  return proc(body);
}

function convertDitaFile(filePath, keys) {
  try {
    let xml = fs.readFileSync(filePath, 'utf-8');
    xml = xml.replace(/<\?xml[^?]*\?>/g, '');
    xml = xml.replace(/<!DOCTYPE[^>]*>/g, '');
    xml = xml.replace(/<\?[^?]*\?>/g, '');

    // ── XML preprocessing (before parsing) ──

    // Remove show_less content entirely (keep show_more = full version)
    xml = xml.replace(/<ph\s+outputclass="show_less"[^>]*>[\s\S]*?<\/ph>/g, '');
    xml = xml.replace(/<p\s+outputclass="show_less"[^>]*>[\s\S]*?<\/p>/g, '');
    // Unwrap show_more — remove tags but keep content
    xml = xml.replace(/<ph\s+outputclass="show_more"[^>]*>([\s\S]*?)<\/ph>/g, '$1');

    // Resolve keyrefs inline (before parsing loses element order)
    xml = xml.replace(/<ph\s+keyref="([^"]*)"\s*\/>/g, (_, kr) => keys.get(kr) || kr.replace(/_/g, ' '));
    xml = xml.replace(/<ph\s+keyref="([^"]*)"[^>]*>([^<]*)<\/ph>/g, (_, kr, text) => text || keys.get(kr) || kr.replace(/_/g, ' '));

    // Convert xref to .dita into resolved text (before parser loses position)
    xml = xml.replace(/<xref\s+href="(references\/en\/countries_by_id\/([A-Z]{2})\.dita)"[^>]*\/>/g, (_, __, code) => code);
    xml = xml.replace(/<xref\s+href="(references\/en\/currencies\/([A-Z]+)\.dita)"[^>]*\/>/g, (_, __, code) => code);
    // Strip xrefs to other .dita files (unresolvable cross-refs)
    xml = xml.replace(/<xref\s+href="[^"]*\.dita"[^>]*\/>/g, '');
    xml = xml.replace(/<xref\s+href="([^"]*\.dita)"[^>]*>([^<]*)<\/xref>/g, '$2');

    currentKeys = keys;
    const parsed = parser.parse(xml);
    const topic = parsed.topic || parsed.concept || parsed.task || parsed.reference;
    if (!topic) return null;

    const title = extractText(topic.title) || 'Untitled';
    const body = topic.body || topic.conbody || topic.taskbody || topic.refbody;
    let md = `# ${title}\n\n`;
    if (body) md += bodyToMarkdown(body);
    md = md.replace(/\n{3,}/g, '\n\n').trim() + '\n';
    return { title, md };
  } catch (e) { return null; }
}


// ══════════════════════════════════════════
// Filtered migration with keyref context
// ══════════════════════════════════════════

function groupAndMigrate(filePattern, outputDir, allowedFiles, keys) {
  let allFiles = fs.readdirSync(DITA_DIR).filter(f =>
    f.startsWith('en_') && f.endsWith('.dita') && f.includes(filePattern)
  ).sort();
  if (allowedFiles && allowedFiles.size > 0) allFiles = allFiles.filter(f => allowedFiles.has(f));
  if (allFiles.length === 0) return 0;

  const outDir = path.join(DOCS_DIR, outputDir);
  fs.mkdirSync(outDir, { recursive: true });

  const groups = new Map();
  const subKw = ['_callback', '_send_request', '_generate_signature', '_collect_parameters',
    '_build_request', '_encode_request', '_check_', '_intermediate_', '_final_callback',
    '_additional', '_redirect', '_response', '_statuses', '_model', '_scheme', '_testing',
    '_acc_ver', '_ch1', '_ch2'];

  for (const file of allFiles) {
    let name = file.replace(/^en_/, '').replace(/\.dita$/, '');
    let baseName = name;
    for (const kw of subKw) {
      const idx = name.indexOf(kw);
      if (idx > 0) { baseName = name.substring(0, idx); break; }
    }
    if (!groups.has(baseName)) groups.set(baseName, []);
    groups.get(baseName).push(file);
  }

  let count = 0;
  for (const [baseName, files] of groups) {
    files.sort((a, b) => {
      const an = a.replace(/^en_/, '').replace(/\.dita$/, '');
      const bn = b.replace(/^en_/, '').replace(/\.dita$/, '');
      if (an === baseName) return -1;
      if (bn === baseName) return 1;
      return an.localeCompare(bn);
    });

    let combined = '', pageTitle = '';
    // For PM files, load method-specific keys from ditamap
    let methodKeys = keys || globalKeys;
    let ditamapTitle = '';
    if (files[0]?.startsWith('en_pm_')) {
      const parts = baseName.replace(/^pm_/, '').split('_');
      for (let i = parts.length; i >= 1; i--) {
        const methodName = parts.slice(0, i).join('_');
        const dmPath = path.join(DITA_DIR, `en_pm_${methodName}.ditamap`);
        if (fs.existsSync(dmPath)) {
          methodKeys = parseKeydefs(dmPath);
          ditamapTitle = methodKeys.get('title') || '';
          break;
        }
      }
    }

    for (const file of files) {
      const result = convertDitaFile(path.join(DITA_DIR, file), methodKeys);
      if (!result || result.md.length < 20) continue;
      if (!pageTitle) {
        // Use ditamap title if available (e.g., "Open Banking in Austria" instead of "Overview")
        pageTitle = ditamapTitle || result.title;
        let content = result.md;
        if (ditamapTitle && result.title !== ditamapTitle) {
          // Replace the generic H1 with the real title
          content = content.replace(/^# .+\n/, `# ${ditamapTitle}\n`);
        }
        combined += content + '\n\n';
      } else {
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

  console.log(`  ${filePattern}: ${allFiles.length} files → ${count} pages in ${outputDir}`);
  return count;
}


// ══════════════════════════════════════════
// MAIN
// ══════════════════════════════════════════

console.log(`DITA → Markdown migration for Platform (${BRAND})\n`);
console.log(`Source: ${DITA_DIR}`);
console.log(`Output: ${DOCS_DIR}`);

const allowed = buildAllowedFiles();

// Section-specific keydefs
const gateKeys = parseKeydefs(path.join(DITA_DIR, 'en_gate_site.ditamap'));
const ppKeys = parseKeydefs(path.join(DITA_DIR, 'en_paymentpage_site.ditamap'));
const dbKeys = parseKeydefs(path.join(DITA_DIR, 'en_dblight_site.ditamap'));

console.log('\n=== Gate ===');
groupAndMigrate('gate', 'gate', allowed.gate, gateKeys);
groupAndMigrate('3ds2', 'gate', allowed.gate, gateKeys);

console.log('\n=== Payment Page ===');
groupAndMigrate('pp_', 'payment-page', allowed.pp, ppKeys);

console.log('\n=== Payment Methods ===');
groupAndMigrate('pm_', 'payment-methods', allowed.pm);

console.log('\n=== Dashboard ===');
groupAndMigrate('db_', 'dashboard', allowed.dashboard, dbKeys);
groupAndMigrate('dbl_', 'dashboard', allowed.dashboard, dbKeys);

console.log('\n✅ Migration complete!');
