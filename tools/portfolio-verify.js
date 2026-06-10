const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:4173';
const ROOT = path.resolve(__dirname, '..');

const pages = [
  { path: '/', label: 'home', file: 'index.html' },
  { path: '/about.html', label: 'about', file: 'about.html' },
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
  await page.locator('[data-lang="en"]').first().click();
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

async function inspectCaseModal(browser) {
  const expectedLinks = {
    '0': 'cases/petrobras.html',
    '1': 'cases/bayer.html',
    '2': 'cases/ambev.html',
    '3': 'cases/bmg.html',
  };
  const context = await browser.newContext({
    viewport: { width: 1366, height: 900 },
    reducedMotion: 'reduce',
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
  await page.locator('#cases').scrollIntoViewIfNeeded();

  const results = [];
  const cards = await page.locator('[data-case-index]').count();

  for (let order = 0; order < cards; order += 1) {
    const card = page.locator('[data-case-index]').nth(order);
    await card.scrollIntoViewIfNeeded();
    const index = await card.getAttribute('data-case-index');
    await card.click({ force: true });
    await page.waitForSelector('#case-modal:not(.hidden)', { timeout: 5000 });

    const modalState = await page.evaluate(() => ({
      client: document.querySelector('#modal-client')?.textContent?.trim() || '',
      desc: document.querySelector('#modal-desc')?.textContent?.trim() || '',
      metric: document.querySelector('#modal-metric')?.textContent?.trim() || '',
      link: document.querySelector('#modal-case-link')?.getAttribute('href') || '',
      hidden: document.querySelector('#case-modal')?.classList.contains('hidden') ?? true,
    }));

    results.push({
      order,
      index,
      expectedLink: expectedLinks[index],
      ...modalState,
    });

    await page.keyboard.press('Escape');
    await page.waitForFunction(
      () => document.querySelector('#case-modal')?.classList.contains('hidden'),
      null,
      { timeout: 5000 }
    );
  }

  const firstCard = page.locator('[data-case-index]').first();
  await firstCard.focus();
  await page.keyboard.press('Enter');
  await page.waitForSelector('#case-modal:not(.hidden)', { timeout: 5000 });
  const enterOpens = await page.evaluate(() => !document.querySelector('#case-modal')?.classList.contains('hidden'));
  await page.keyboard.press('Escape');
  await page.waitForFunction(
    () => document.querySelector('#case-modal')?.classList.contains('hidden'),
    null,
    { timeout: 5000 }
  );

  await firstCard.focus();
  await page.keyboard.press('Space');
  await page.waitForSelector('#case-modal:not(.hidden)', { timeout: 5000 });
  const spaceOpens = await page.evaluate(() => !document.querySelector('#case-modal')?.classList.contains('hidden'));

  await page.close();
  await context.close();

  return {
    cards,
    results,
    enterOpens,
    spaceOpens,
    messages,
  };
}

function collectFailures(results, englishToggle, caseModal, referenceFailures) {
  const failures = [];

  for (const result of results) {
    const prefix = `${result.viewport} ${result.path}`;
    if (result.status !== 200) failures.push(`${prefix}: status ${result.status}`);
    if (result.h1 !== 1) failures.push(`${prefix}: h1 count ${result.h1}`);
    if (result.main !== 1) failures.push(`${prefix}: main count ${result.main}`);
    if (result.footer !== 1) failures.push(`${prefix}: footer count ${result.footer}`);
    if (result.overflow > 1) failures.push(`${prefix}: horizontal overflow ${result.overflow}px`);
    if (result.visibleEN > 0) failures.push(`${prefix}: EN content visible while PT is active (${result.visibleEN})`);
    if (result.messages.length > 0) failures.push(`${prefix}: console ${result.messages.join(' | ')}`);
  }

  if (englishToggle.lang !== 'en' || englishToggle.dataLang !== 'en') {
    failures.push(`EN toggle: lang state ${englishToggle.lang}/${englishToggle.dataLang}`);
  }
  if (!englishToggle.h1.includes('Structure before')) {
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

  if (caseModal.cards !== 4) {
    failures.push(`case modal: expected 4 cards, found ${caseModal.cards}`);
  }
  if (!caseModal.enterOpens) failures.push('case modal: Enter key did not open modal');
  if (!caseModal.spaceOpens) failures.push('case modal: Space key did not open modal');
  if (caseModal.messages.length > 0) failures.push(`case modal: console ${caseModal.messages.join(' | ')}`);

  for (const result of caseModal.results) {
    const prefix = `case modal card ${result.order} index ${result.index}`;
    if (!result.index) failures.push(`${prefix}: missing data-case-index`);
    if (result.hidden) failures.push(`${prefix}: modal remained hidden`);
    if (!result.client) failures.push(`${prefix}: missing client`);
    if (!result.desc) failures.push(`${prefix}: missing description`);
    if (!result.metric) failures.push(`${prefix}: missing metric`);
    if (result.link !== result.expectedLink) {
      failures.push(`${prefix}: link ${result.link}, expected ${result.expectedLink}`);
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
  const caseModal = await inspectCaseModal(browser);
  await browser.close();

  const referenceFailures = inspectLocalReferences();
  const failures = collectFailures(results, englishToggle, caseModal, referenceFailures);
  const summary = {
    baseUrl: BASE_URL,
    checkedPages: results.length,
    englishToggle,
    caseModal,
    localReferences: {
      failures: referenceFailures,
    },
    failures,
  };

  console.log(JSON.stringify(summary, null, 2));
  process.exit(failures.length > 0 ? 1 : 0);
})();
