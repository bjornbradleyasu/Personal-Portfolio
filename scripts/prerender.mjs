/**
 * Prerender script — generates static HTML for each route at build time.
 *
 * Run order (package.json build script):
 *   1. vite build              → client bundle + dist/index.html
 *   2. vite build --ssr        → SSR bundle at dist/entry-server.js
 *   3. node scripts/prerender  → writes static HTML per route into dist/
 *
 * After this script finishes, dist/ contains a fully scannable static site.
 * The client JS still hydrates on load, so interactivity is unchanged.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const toAbs = (p) => path.resolve(root, p)

// ── Routes to prerender ────────────────────────────────────────────────────
// Keep this list in sync with your React Router routes and project slugs.
const routes = [
  '/',
  '/projects/vr-gesture-instrument',
  '/projects/multimodal-ai-chatbot',
  '/projects/spotify-recommendation-algorithm-zine',
  '/projects/diy-cdj-daw-integration',
  '/projects/aqi-prediction-dashboard',
]

// ── Load build artifacts ───────────────────────────────────────────────────
const templatePath = toAbs('dist/index.html')
const serverBundlePath = toAbs('dist/server/entry-server.js')

if (!fs.existsSync(templatePath)) {
  console.error('❌  dist/index.html not found — run `vite build` first.')
  process.exit(1)
}
if (!fs.existsSync(serverBundlePath)) {
  console.error('❌  dist/server/entry-server.js not found — run `vite build --config vite.ssr.config.ts` first.')
  process.exit(1)
}

const template = fs.readFileSync(templatePath, 'utf-8')
const { render } = await import(pathToFileURL(serverBundlePath).href)

// ── Render each route ──────────────────────────────────────────────────────
for (const url of routes) {
  let appHtml
  try {
    appHtml = render(url)
  } catch (err) {
    console.error(`❌  Failed to render ${url}:`, err)
    process.exit(1)
  }

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  // / → dist/index.html  |  /projects/foo → dist/projects/foo/index.html
  const filePath = url === '/'
    ? toAbs('dist/index.html')
    : toAbs(`dist${url}/index.html`)

  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, html, 'utf-8')
  console.log(`✓  ${url}`)
}

// ── Clean up SSR bundle directory (only needed for this script) ───────────
fs.rmSync(toAbs('dist/server'), { recursive: true, force: true })
console.log('\n✅  Prerender complete.')
