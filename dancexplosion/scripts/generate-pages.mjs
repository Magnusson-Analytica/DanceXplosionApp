// Runs after `vite build`: writes one HTML file per page with its own title, description,
// canonical URL and share tags, so search engines and link previews see the right page
// without running JavaScript. Also writes 404.html, sitemap.xml and robots.txt.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL, pages, notFoundPage } from '../src/seo/pages.js';

const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

const escapeHtml = (text) => text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const urlFor = (path) => `${SITE_URL}${path === '/' ? '/' : path}`;

// Replace one tag's value, failing loudly if index.html no longer contains it
const replaceOnce = (html, pattern, replacement, label) => {
    if (!pattern.test(html)) throw new Error(`generate-pages: could not find ${label} in dist/index.html`);
    return html.replace(pattern, replacement);
};

const renderPage = (page, { noindex = false } = {}) => {
    const title = escapeHtml(page.title);
    const description = escapeHtml(page.description);
    const url = urlFor(page.path);
    let html = template;
    html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, 'title');
    html = replaceOnce(html, /(<meta name="description" content=")[^"]*(")/, `$1${description}$2`, 'description');
    html = replaceOnce(html, /(<meta name="robots" content=")[^"]*(")/, `$1${noindex ? 'noindex' : 'index, follow'}$2`, 'robots');
    // A noindex page shouldn't claim a canonical URL
    html = noindex
        ? replaceOnce(html, /\s*<link rel="canonical" href="[^"]*" \/>/, '', 'canonical')
        : replaceOnce(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, 'canonical');
    html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, 'og:url');
    html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`, 'og:title');
    html = replaceOnce(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`, 'og:description');
    return html;
};

// "/salsa" -> dist/salsa.html, served at /salsa thanks to cleanUrls in vercel.json
const fileFor = (path) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`);

for (const page of pages) {
    const file = join(distDir, fileFor(page.path));
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, renderPage(page));
}

writeFileSync(join(distDir, '404.html'), renderPage(notFoundPage, { noindex: true }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${urlFor(page.path)}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(distDir, 'sitemap.xml'), sitemap);

writeFileSync(join(distDir, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`);

console.log(`generate-pages: wrote ${pages.length} pages, 404.html, sitemap.xml and robots.txt`);
