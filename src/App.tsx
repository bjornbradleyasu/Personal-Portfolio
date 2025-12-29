import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import SchoolProjects from './components/SchoolProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Scene3DControls from './components/Scene3DControls'
import ErrorBoundary from './components/ErrorBoundary'
import { Scene3DProvider } from './contexts/Scene3DContext'

function App() {
  return (
    <ErrorBoundary>
      <Scene3DProvider>
        <div className="min-h-screen bg-bg text-fg">
          <NavBar />
          <main id="main-content">
            <Hero />
            <Projects />
            <Experience />
            <Education />
            <SchoolProjects />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
          <Scene3DControls />
        </div>
      </Scene3DProvider>
    </ErrorBoundary>
  )
}

export default App 