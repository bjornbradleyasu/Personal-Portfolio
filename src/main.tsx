import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// [PLACEHOLDER: Analytics Setup]
// Uncomment and configure your analytics service:
//
// Option 1: Vercel Analytics (Recommended for Vercel deployments)
// import { Analytics } from '@vercel/analytics/react'
// Add <Analytics /> inside App component
//
// Option 2: Google Analytics
// import { useEffect } from 'react'
// useEffect(() => {
//   const script = document.createElement('script')
//   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
//   script.async = true
//   document.head.appendChild(script)
//   window.dataLayer = window.dataLayer || []
//   function gtag(...args) { window.dataLayer.push(args) }
//   gtag('js', new Date())
//   gtag('config', 'G-XXXXXXXXXX')
// }, [])

const rootEl = document.getElementById('root')!

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Use hydrateRoot when prerendered HTML is present (production), createRoot otherwise (dev)
if (rootEl.innerHTML.trim()) {
  ReactDOM.hydrateRoot(rootEl, app)
} else {
  ReactDOM.createRoot(rootEl).render(app)
} 