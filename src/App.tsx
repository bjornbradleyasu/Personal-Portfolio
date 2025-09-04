import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import SchoolProjects from './components/SchoolProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Scene3DControls from './components/Scene3DControls'
import { Scene3DProvider } from './contexts/Scene3DContext'

function App() {
  return (
    <Scene3DProvider>
      <div className="min-h-screen bg-bg text-fg">
        <NavBar />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Education />
          <TechStack />
          <Projects />
          <SchoolProjects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <Scene3DControls />
      </div>
    </Scene3DProvider>
  )
}

export default App 