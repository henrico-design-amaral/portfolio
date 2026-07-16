const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const pages = [
  'index.html',
  'about.html',
  'cv.html',
  'cases/petrobras.html',
  'cases/ambev.html',
  'cases/bayer.html'
];
const failures = [];

function read(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) {
    failures.push(`${relativePath}: arquivo esperado ausente`);
    return '';
  }
  return fs.readFileSync(absolutePath, 'utf8');
}

function allFiles(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) return [];
  const result = [];
  const visit = current => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const target = path.join(current, entry.name);
      if (entry.isDirectory()) visit(target);
      else result.push(path.relative(ROOT, target));
    }
  };
  visit(absolutePath);
  return result;
}

const html = pages.map(page => [page, read(page)]);
const siteJs = read('assets/js/site.js');
const ptStart = siteJs.indexOf('pt: {');
const enStart = siteJs.indexOf('en: {', ptStart);
const dictionariesEnd = siteJs.lastIndexOf('\n  }\n};');
const extractKeys = block => new Set(
  [...block.matchAll(/^\s{4,}['"]([^'"]+)['"]\s*:/gm)].map(match => match[1])
);
const ptKeys = extractKeys(siteJs.slice(ptStart, enStart));
const enKeys = extractKeys(siteJs.slice(enStart, dictionariesEnd));
const dictionaryKeys = new Set([...ptKeys, ...enKeys]);

for (const key of ptKeys) {
  if (!enKeys.has(key)) failures.push(`i18n: chave ausente no EN ${key}`);
}
for (const key of enKeys) {
  if (!ptKeys.has(key)) failures.push(`i18n: chave ausente no PT ${key}`);
}

for (const [page, source] of html) {
  const translationAttributes = /data-t(?:-alt|-aria-label|-title)?="([^"]+)"/g;
  for (const match of source.matchAll(translationAttributes)) {
    if (!dictionaryKeys.has(match[1])) failures.push(`${page}: chave i18n ausente ${match[1]}`);
  }

  for (const match of source.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    if (!/\balt="[^"]*"/.test(tag)) failures.push(`${page}: img sem alt`);
    if (/case-screens\//.test(tag) && (!/\bwidth="\d+"/.test(tag) || !/\bheight="\d+"/.test(tag))) {
      failures.push(`${page}: screenshot sem width/height`);
    }
  }
}

const home = read('index.html');
const caseLinks = [...home.matchAll(/href="(cases\/[^"#]+\.html)"/g)].map(match => match[1]);
const expectedLinks = ['cases/petrobras.html', 'cases/ambev.html', 'cases/bayer.html'];
if (caseLinks.length !== expectedLinks.length || expectedLinks.some(link => !caseLinks.includes(link))) {
  failures.push(`index.html: cards esperados ${expectedLinks.join(', ')}; encontrados ${caseLinks.join(', ')}`);
}

for (const relativePath of ['cases/bmg.html', 'public/assets/img/cases/bmg.webp', 'public/assets/img/cases/bmg-640.webp', 'public/assets/img/cases/bmg-960.webp']) {
  if (fs.existsSync(path.join(ROOT, relativePath))) failures.push(`remoção BMG incompleta: ${relativePath}`);
}

for (const relativePath of allFiles('dist')) {
  if (/bmg/i.test(relativePath)) failures.push(`dist contém residual BMG: ${relativePath}`);
}

if (failures.length) {
  console.error(failures.map(failure => `FAIL ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`Static quality check passed: ${pages.length} pages, ${dictionaryKeys.size} translation keys, ${caseLinks.length} case cards.`);
