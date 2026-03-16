import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Scene3DControls from './components/Scene3DControls'
import ErrorBoundary from './components/ErrorBoundary'
import { Scene3DProvider } from './contexts/Scene3DContext'

import ProjectDetail from './components/ProjectDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <NavBar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Scene3DControls />
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <Scene3DProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
      </Scene3DProvider>
    </ErrorBoundary>
  )
}

export default App 