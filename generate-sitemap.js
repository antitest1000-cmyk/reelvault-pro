/**
 * generate-sitemap.js
 * Builds a comprehensive, compliant sitemap.xml for ReelVault PRO
 */

const fs = require('fs');
const path = require('path');

const baseUrl = (process.env.SITE_URL || 'https://reelvault.store').replace(/\/+$/, '');
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: `${baseUrl}/index.html`, priority: '1.0', changefreq: 'daily' },
  { url: `${baseUrl}/ai-reels-bundle.html`, priority: '0.9', changefreq: 'weekly' },
  { url: `${baseUrl}/faceless-reels-bundle.html`, priority: '0.9', changefreq: 'weekly' },
  { url: `${baseUrl}/motivational-reels-bundle.html`, priority: '0.9', changefreq: 'weekly' },
  { url: `${baseUrl}/luxury-reels-bundle.html`, priority: '0.9', changefreq: 'weekly' },
  { url: `${baseUrl}/cooking-reels-bundle.html`, priority: '0.9', changefreq: 'weekly' },
  { url: `${baseUrl}/free-sample.html`, priority: '0.8', changefreq: 'weekly' },
  { url: `${baseUrl}/tools.html`, priority: '0.8', changefreq: 'weekly' },
  { url: `${baseUrl}/reviews.html`, priority: '0.8', changefreq: 'weekly' },
  { url: `${baseUrl}/how-to-buy.html`, priority: '0.8', changefreq: 'monthly' },
  { url: `${baseUrl}/faq.html`, priority: '0.8', changefreq: 'weekly' },
  { url: `${baseUrl}/about.html`, priority: '0.7', changefreq: 'monthly' },
  { url: `${baseUrl}/license.html`, priority: '0.7', changefreq: 'monthly' },
  { url: `${baseUrl}/policies.html`, priority: '0.6', changefreq: 'monthly' },
  { url: `${baseUrl}/contact.html`, priority: '0.7', changefreq: 'monthly' },
  { url: `${baseUrl}/request-bundle.html`, priority: '0.7', changefreq: 'monthly' },
  { url: `${baseUrl}/affiliate.html`, priority: '0.8', changefreq: 'weekly' }
];

// Add all generated static bundle pages
const bundleDir = path.join(__dirname, 'bundle');
if (fs.existsSync(bundleDir)) {
  const files = fs.readdirSync(bundleDir).filter(f => f.endsWith('.html'));
  files.forEach(file => {
    staticPages.push({
      url: `${baseUrl}/bundle/${file}`,
      priority: '0.85',
      changefreq: 'weekly'
    });
  });
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

staticPages.forEach(p => {
  xml += `  <url>\n`;
  xml += `    <loc>${p.url}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap.xml with ${staticPages.length} URLs.`);
