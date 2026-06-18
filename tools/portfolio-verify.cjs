const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:4173';
const ROOT = path.resolve(__dirname, '..');

const pages = [
  { path: '/', label: 'home', file: 'index.html' },
  { path: '/about.html', label: 'about', file: 'about.html' },
  { path: '/cv.html', label: 'cv', file: 'cv.html' },
  { path: '/cases/petrobras.html', label: 'petrobras', file: 'cases/petrobras.html' },
  { path: '/cases/bayer.html', label: 'bayer', file: 'cases/bayer.html' },
  { path: '/cases/ambev.html', label: 'ambev', file: 'cases/ambev.html' },
  { path: '/cases/bmg.html', label: 'bmg', file: 'cases/bmg.html' },
];

const viewports = [
  { name: 'mobile390', width: 390, height: 844 },
  { name: 'desktop1366', width: 1366, height: 900 },
  { name: 'desktop1440', width: 1440, height: 960 },
];

function visibleCount(selector) {
  return [...document.querySelectorAll(selector)].filter((element) => {
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
  }).length;
}

function normalizeLocalPath(value) {
  return value.replace(/\\/g, '/');
}

function resolveLocalRef(fromFile, target) {
  return normalizeLocalPath(path.normalize(path.join(path.dirname(fromFile), target)));
}

function collectIdsByFile() {
  const idsByFile = new Map();

  for (const target of pages) {
    const html = fs.readFileSync(path.join(ROOT, target.file), 'utf8');
    const ids = new Set();
    for (const match of html.matchAll(/\s(?:id|name)=["']([^"']+)["']/g)) {
      ids.add(match[1]);
    }
    idsByFile.set(normalizeLocalPath(target.file), ids);
  }

  return idsByFile;
}

function inspectLocalReference({ fromFile, attr, rawRef, idsByFile, failures }) {
  const ref = rawRef.trim().replace(/&amp;/g, '&');
  if (
    !ref ||
    ref === '#' ||
    ref.startsWith('%23') ||
    /^(mailto:|tel:|https?:|data:|javascript:)/i.test(ref)
  ) {
    return;
  }

  const hashIndex = ref.indexOf('#');
  const pathWithQuery = hashIndex >= 0 ? ref.slice(0, hashIndex) : ref;
  const hash = hashIndex >= 0 ? ref.slice(hashIndex + 1).split('?')[0] : '';
  const targetPathRaw = pathWithQuery.split('?')[0];
  const targetPath = targetPathRaw
    ? resolveLocalRef(fromFile, targetPathRaw)
    : normalizeLocalPath(fromFile);

  if (targetPathRaw && !fs.existsSync(path.join(ROOT, targetPath))) {
    failures.push(`${fromFile}: missing ${attr} target "${ref}"`);
    return;
  }

  if (!hash) return;

  const anchorTarget = targetPathRaw ? targetPath : normalizeLocalPath(fromFile);
  if (!anchorTarget.endsWith('.html') && !idsByFile.has(anchorTarget)) return;

  const ids = idsByFile.get(anchorTarget);
  if (!ids) {
    failures.push(`${fromFile}: anchor target not indexed "${ref}"`);
    return;
  }
  if (!ids.has(hash)) {
    failures.push(`${fromFile}: missing anchor "#${hash}" in ${anchorTarget}`);
  }
}

function inspectLocalReferences() {
  const failures = [];
  const idsByFile = collectIdsByFile();
  const cssFiles = [
    'assets/css/site.css',
    'assets/css/about.css',
    'assets/css/cases.css',
  ];

  for (const target of pages) {
    const html = fs.readFileSync(path.join(ROOT, target.file), 'utf8');
    for (const match of html.matchAll(/\s(href|src)=["']([^"']+)["']/g)) {
      inspectLocalReference({
        fromFile: target.file,
        attr: match[1],
        rawRef: match[2],
        idsByFile,
        failures,
      });
    }
    for (const match of html.matchAll(/\ssrcset=["']([^"']+)["']/g)) {
      for (const part of match[1].split(',')) {
        inspectLocalReference({
          fromFile: target.file,
          attr: 'srcset',
          rawRef: part.trim().split(/\s+/)[0],
          idsByFile,
          failures,
        });
      }
    }
  }

  for (const cssFile of cssFiles) {
    const css = fs.readFileSync(path.join(ROOT, cssFile), 'utf8');
    for (const match of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
      inspectLocalReference({
        fromFile: cssFile,
        attr: 'css-url',
        rawRef: match[1],
        idsByFile,
        failures,
      });
    }
  }

  return failures;
}

async function inspectPage(context, target, viewport) {
  const page = await context.newPage();
  const messages = [];

  page.on('console', (message) => {
    if (['error', 'warning'].includes(message.type())) {
      messages.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on('pageerror', (error) => messages.push(`pageerror: ${error.message}`));

  const response = await page.goto(`${BASE_URL}${target.path}`, { waitUntil: 'networkidle' });
  const metrics = await page.evaluate(visibleCountSource => {
    const countVisible = new Function(`return (${visibleCountSource})`)();
    return {
      title: document.title,
      h1: document.querySelectorAll('h1').length,
      main: document.querySelectorAll('main').length,
      footer: document.querySelectorAll('footer').length,
      overflow: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - document.documentElement.clientWidth,
      visiblePT: countVisible('.lang-pt'),
      visibleEN: countVisible('.lang-en'),
    };
  }, visibleCount.toString());

  await page.close();

  return {
    page: target.label,
    path: target.path,
    viewport: viewport.name,
    status: response ? response.status() : 0,
    messages,
    ...metrics,
  };
}

async function inspectEnglishToggle(browser) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(`${BASE_URL}/about.html`, { waitUntil: 'networkidle' });
  await page.locator('#mobile-menu-toggle').click();
  await page.locator('#mobile-menu [data-lang="en"]').click();
  await page.waitForTimeout(100);

  const state = await page.evaluate(visibleCountSource => {
    const countVisible = new Function(`return (${visibleCountSource})`)();
    return {
      lang: document.documentElement.lang,
      dataLang: document.documentElement.dataset.lang,
      h1: document.querySelector('h1') ? document.querySelector('h1').innerText : '',
      visiblePT: countVisible('.lang-pt'),
      visibleEN: countVisible('.lang-en'),
      overflow: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - document.documentElement.clientWidth,
    };
  }, visibleCount.toString());

  await page.close();
  await context.close();
  return state;
}


async function inspectCaseLinks(browser) {
  const expectedLinks = {
    '0': 'cases/petrobras.html',
    '1': 'cases/bayer.html',
    '2': 'cases/ambev.html',
    '3': 'cases/bmg.html',
  };
  const context = await browser.newContext({
    viewport: { width: 1366, height: 900 }
  });
  const page = await context.newPage();
  const messages = [];

  page.on('console', (message) => {
    if (['error', 'warning'].includes(message.type())) {
      messages.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on('pageerror', (error) => messages.push(`pageerror: ${error.message}`));

  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });

  const results = [];
  const cards = await page.locator('[data-case-index]').count();

  for (let order = 0; order < cards; order += 1) {
    const card = page.locator('[data-case-index]').nth(order);
    const index = await card.getAttribute('data-case-index');
    const tagName = await card.evaluate(el => el.tagName.toLowerCase());
    const href = await card.getAttribute('href');

    results.push({
      order,
      index,
      tagName,
      href,
      expectedLink: expectedLinks[index],
    });
  }

  // Verify that clicking a card actually navigates to the expected page
  let navigationSuccess = true;
  for (let order = 0; order < cards; order += 1) {
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    const card = page.locator('[data-case-index]').nth(order);
    const index = await card.getAttribute('data-case-index');
    const targetHref = expectedLinks[index];
    await card.click();
    await page.waitForURL(`**/${targetHref}`, { timeout: 5000 });
    if (!page.url().endsWith(targetHref)) {
      navigationSuccess = false;
    }
  }

  await page.close();
  await context.close();

  return {
    cards,
    results,
    navigationSuccess,
    messages,
  };
}

function collectFailures(results, englishToggle, caseLinks, referenceFailures) {
  const failures = [];

  for (const result of results) {
    const prefix = `${result.viewport} ${result.path}`;
    const expectsFooter = result.path !== '/cv.html';
    if (result.status !== 200) failures.push(`${prefix}: status ${result.status}`);
    if (result.h1 !== 1) failures.push(`${prefix}: h1 count ${result.h1}`);
    if (result.main !== 1) failures.push(`${prefix}: main count ${result.main}`);
    if (expectsFooter && result.footer !== 1) failures.push(`${prefix}: footer count ${result.footer}`);
    if (result.overflow > 1) failures.push(`${prefix}: horizontal overflow ${result.overflow}px`);
    if (result.visibleEN > 0) failures.push(`${prefix}: EN content visible while PT is active (${result.visibleEN})`);
    if (result.messages.length > 0) failures.push(`${prefix}: console ${result.messages.join(' | ')}`);
  }

  if (englishToggle.lang !== 'en' || englishToggle.dataLang !== 'en') {
    failures.push(`EN toggle: lang state ${englishToggle.lang}/${englishToggle.dataLang}`);
  }
  if (!englishToggle.h1.includes('Behind')) {
    failures.push(`EN toggle: unexpected h1 "${englishToggle.h1}"`);
  }
  if (englishToggle.visiblePT > 0) {
    failures.push(`EN toggle: PT content visible (${englishToggle.visiblePT})`);
  }
  if (englishToggle.overflow > 1) {
    failures.push(`EN toggle: horizontal overflow ${englishToggle.overflow}px`);
  }

  for (const failure of referenceFailures) {
    failures.push(`local reference: ${failure}`);
  }

  if (caseLinks.cards !== 4) {
    failures.push(`case links: expected 4 cards, found ${caseLinks.cards}`);
  }
  if (!caseLinks.navigationSuccess) {
    failures.push('case links: navigation failed when clicking card');
  }
  if (caseLinks.messages.length > 0) {
    failures.push(`case links: console ${caseLinks.messages.join(' | ')}`);
  }

  for (const result of caseLinks.results) {
    const prefix = `case links card ${result.order} index ${result.index}`;
    if (!result.index) failures.push(`${prefix}: missing data-case-index`);
    if (result.tagName !== 'a') failures.push(`${prefix}: tagName is "${result.tagName}", expected "a"`);
    if (result.href !== result.expectedLink) {
      failures.push(`${prefix}: href "${result.href}", expected "${result.expectedLink}"`);
    }
  }

  return failures;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport });
    for (const target of pages) {
      results.push(await inspectPage(context, target, viewport));
    }
    await context.close();
  }

  const englishToggle = await inspectEnglishToggle(browser);
  const caseLinks = await inspectCaseLinks(browser);
  await browser.close();

  const referenceFailures = inspectLocalReferences();
  const failures = collectFailures(results, englishToggle, caseLinks, referenceFailures);
  const summary = {
    baseUrl: BASE_URL,
    checkedPages: results.length,
    englishToggle,
    caseLinks,
    localReferences: {
      failures: referenceFailures,
    },
    failures,
  };

  console.log(JSON.stringify(summary, null, 2));
  process.exit(failures.length > 0 ? 1 : 0);
})();
