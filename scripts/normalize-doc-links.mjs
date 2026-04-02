import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve('docs');
const skippedDirs = new Set([
  '.vitepress',
  'node_modules',
  'public',
  'ru',
  'sdk',
  'payment-methods-flat',
]);
const fileExtensions = new Set(['.md', '.mdx']);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    if (skippedDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, out);
      continue;
    }
    if (fileExtensions.has(path.extname(entry.name))) {
      out.push(fullPath);
    }
  }
  return out;
}

function resolveMarkdownTarget(filePath, rawTarget) {
  if (!rawTarget.startsWith('./') && !rawTarget.startsWith('../')) {
    return null;
  }
  if (path.extname(rawTarget)) {
    return null;
  }

  const absoluteBase = path.resolve(path.dirname(filePath), rawTarget);
  const candidates = [
    `${absoluteBase}.md`,
    `${absoluteBase}.mdx`,
    path.join(absoluteBase, 'index.md'),
    path.join(absoluteBase, 'index.mdx'),
  ];

  const existingTarget = candidates.find((candidate) => fs.existsSync(candidate));
  if (!existingTarget) {
    return null;
  }

  let relativeTarget = path.relative(path.dirname(filePath), existingTarget);
  if (!relativeTarget.startsWith('.')) {
    relativeTarget = `./${relativeTarget}`;
  }
  return relativeTarget.replace(/\\/g, '/');
}

const markdownLinkPattern = /\]\(((?:\.{1,2}\/)[^)\s#?]+)(#[^)]+)?\)/g;
let changedFiles = 0;
let changedLinks = 0;

for (const filePath of walk(docsRoot)) {
  const source = fs.readFileSync(filePath, 'utf8');
  let fileChanged = false;

  const updated = source.replace(markdownLinkPattern, (full, target, anchor = '') => {
    const normalizedTarget = resolveMarkdownTarget(filePath, target);
    if (!normalizedTarget || normalizedTarget === target) {
      return full;
    }
    fileChanged = true;
    changedLinks += 1;
    return `](${normalizedTarget}${anchor})`;
  });

  if (fileChanged) {
    fs.writeFileSync(filePath, updated);
    changedFiles += 1;
  }
}

console.log(`Updated ${changedLinks} links in ${changedFiles} files.`);
