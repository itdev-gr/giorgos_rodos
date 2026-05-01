import { chromium } from 'playwright';

const BASE = process.env.BASE || 'http://localhost:4322';
const PATHS = [
  '/', '/about', '/service', '/service/rhodes-rent-a-boat',
  '/things-to-do', '/contact', '/blog', '/blog/1', '/blog/rhodes-rent-a-boat',
  '/faq', '/sitemap.xml', '/robots.txt'
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const issues = [];
for (const p of PATHS) {
  const url = BASE + p;
  const resp = await page.goto(url, { waitUntil: 'networkidle' }).catch(() => null);
  const status = resp?.status() ?? 0;
  if (status >= 400) { issues.push(`${status} ${p}`); continue; }
  if (p === '/sitemap.xml' || p === '/robots.txt') continue;
  const data = await page.evaluate(() => ({
    title: document.title,
    desc: document.querySelector('meta[name="description"]')?.content,
    canonical: document.querySelector('link[rel="canonical"]')?.href,
    ogImage: document.querySelector('meta[property="og:image"]')?.content,
    h1: document.querySelectorAll('h1').length,
    noAlt: Array.from(document.querySelectorAll('img')).filter(i => !i.alt || !i.alt.trim()).length,
    invisibleAboveFold: Array.from(document.querySelectorAll('h1,h2,p')).filter(e => {
      const r = e.getBoundingClientRect();
      const inView = r.top < window.innerHeight && r.bottom > 0;
      return inView && parseFloat(getComputedStyle(e).opacity) < 0.5 && e.textContent.trim().length > 5;
    }).length,
  }));
  if (!data.title) issues.push(`${p}: missing title`);
  if (!data.desc) issues.push(`${p}: missing description`);
  if (!data.canonical) issues.push(`${p}: missing canonical`);
  if (!data.ogImage) issues.push(`${p}: missing og:image`);
  if (data.h1 < 1) issues.push(`${p}: 0 <h1>`);
  if (data.h1 > 1) issues.push(`${p}: ${data.h1} <h1> (>1)`);
  if (data.noAlt > 0) issues.push(`${p}: ${data.noAlt} imgs without alt`);
  if (data.invisibleAboveFold > 0) issues.push(`${p}: ${data.invisibleAboveFold} above-fold text elements at opacity < 0.5`);
}

await browser.close();

if (issues.length === 0) {
  console.log('✓ all checks passed');
  process.exit(0);
} else {
  console.error('✗ issues found:');
  issues.forEach((i) => console.error(' - ' + i));
  process.exit(1);
}
