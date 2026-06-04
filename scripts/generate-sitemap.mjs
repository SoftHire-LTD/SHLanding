/**
 * Sitemap generator — runs after `vite build`.
 * Writes dist/sitemap.xml with the current build date as lastmod for all pages.
 *
 * HOW TO ADD A NEW ROUTE:
 *   - Static page  → add an entry to STATIC_ROUTES below.
 *   - Blog article → add an entry to BLOG_ARTICLES below (keep in sync with src/lib/blogData.ts).
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const BASE_URL = 'https://www.softhire.co.uk';

// Build date — every deploy automatically gets today's date as lastmod
const buildDate = new Date().toISOString().split('T')[0];

// ── Static routes ─────────────────────────────────────────────────────────────
const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/candidates', priority: '0.8', changefreq: 'monthly' },
  { path: '/immigration-compliance', priority: '0.8', changefreq: 'monthly' },
  { path: '/sponsor-licence-care-homes', priority: '0.8', changefreq: 'monthly' },
  { path: '/sponsor-licence-restaurants', priority: '0.8', changefreq: 'monthly' },
  { path: '/sponsor-licence-tech-startups', priority: '0.8', changefreq: 'monthly' },
  { path: '/sponsor-licence-universities', priority: '0.8', changefreq: 'monthly' },
  { path: '/sponsor-licence-application', priority: '0.9', changefreq: 'monthly' },
  { path: '/skilled-worker-visa-employer', priority: '0.9', changefreq: 'monthly' },
  { path: '/sponsor-licence-compliance', priority: '0.8', changefreq: 'monthly' },
  { path: '/sponsor-licence-cost', priority: '0.8', changefreq: 'monthly' },
  { path: '/sponsor-licence-checklist', priority: '0.8', changefreq: 'monthly' },
  { path: '/certificate-of-sponsorship', priority: '0.8', changefreq: 'monthly' },
  { path: '/sponsor-licence-for-foreign-companies', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
];

// ── Blog articles (keep dateModified in sync with src/lib/blogData.ts) ────────
const BLOG_ARTICLES = [
  {
    slug: 'sponsor-licence-suspended-what-happens',
    dateModified: '2026-05-21',
  },
  {
    slug: 'why-sponsor-licences-get-revoked',
    dateModified: '2026-05-21',
  },
  {
    slug: 'home-office-compliance-visit-preparation',
    dateModified: '2026-05-21',
  },
];

// ── XML helpers ───────────────────────────────────────────────────────────────
function urlEntry({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// ── Build entries ─────────────────────────────────────────────────────────────
const entries = [
  // Static pages — lastmod = build date so it updates on every deploy
  ...STATIC_ROUTES.map((r) =>
    urlEntry({
      loc: `${BASE_URL}${r.path}`,
      lastmod: buildDate,
      changefreq: r.changefreq,
      priority: r.priority,
    })
  ),
  // Blog articles — lastmod = article's own dateModified
  ...BLOG_ARTICLES.map((a) =>
    urlEntry({
      loc: `${BASE_URL}/blog/${a.slug}`,
      lastmod: a.dateModified,
      changefreq: 'monthly',
      priority: '0.7',
    })
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

// ── Write to dist/ ────────────────────────────────────────────────────────────
mkdirSync(DIST_DIR, { recursive: true });
writeFileSync(join(DIST_DIR, 'sitemap.xml'), xml, 'utf-8');
console.log(`✓  sitemap.xml generated (${entries.length} URLs) — lastmod: ${buildDate}`);
