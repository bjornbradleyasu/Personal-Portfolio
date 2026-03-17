import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import ProjectPage from "./pages/ProjectPage"
import ErrorBoundary from "./components/ErrorBoundary"
import PageTransition from "./components/PageTransition"

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        const target = document.getElementById(location.hash.slice(1))
        if (target) {
          target.scrollIntoView({ block: "start" })
          return
        }
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname, location.hash])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/projects/:slug" element={<PageTransition><ProjectPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
