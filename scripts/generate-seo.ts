import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// We'll mimic the siteMetadata here to avoid complex TS import issues in a standalone script
// If the user changes siteMetadata, they should update it here or we can try to import it if tsx/ts-node setup allows
const siteMetadata = {
  title: 'BikinProject TanStack Start by Naufal Akbar Nugroho',
  siteUrl: 'https://nuflakbrr.github.io/bikinproject/', // Change this to your production URL
  socialBanner: '/static/images/twitter-card.png',
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PUBLIC_DIR = path.resolve(__dirname, '../public')

const urls = [
  '',
  '/about',
  '/contact',
  '/login',
  '/register',
]

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => {
      return `
  <url>
    <loc>${siteMetadata.siteUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`
    })
    .join('')}
</urlset>`

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap)
  console.log('✅ sitemap.xml generated in public/')
}

function generateRobots() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${siteMetadata.siteUrl}/sitemap.xml
Host: ${siteMetadata.siteUrl}`

  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robots)
  console.log('✅ robots.txt generated in public/')
}

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true })
}

generateSitemap()
generateRobots()
