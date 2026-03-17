import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WorkExperience from '../components/WorkExperience'

const Home: React.FC = () => (
  <>
    <NavBar />
    <main id="main-content">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
)

export default Home
