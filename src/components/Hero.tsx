import React from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, MousePointer2 } from 'lucide-react'
import Section3D from './Section3D'

/**
 * Hero Component - Main landing section with 3D background
 * 
 * FEATURES:
 * - Interactive 3D background using Three.js
 * - Animated text content with Framer Motion
 * - Call-to-action buttons
 * - Scroll indicator
 * 
 * CUSTOMIZABLE ELEMENTS:
 * - 3D Scene: Modify scene3DConfig.ts for different 3D effects
 * - Text content: Change name, title, and description
 * - Button actions: Modify scrollToProjects and downloadResume functions
 * - Animations: Adjust Framer Motion transition values
 */
const Hero: React.FC = () => {

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Bjorn_Bradley_Resume.pdf'
    link.download = 'Bjorn_Bradley_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Section3D
      sectionId="hero"
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content - Positioned above 3D scene with backdrop */}
      <div className="hero-content text-center space-y-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-fg">
            Bjorn Bradley
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-accent-sky">
            Front-End & Interactive UX Developer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-fg/80 max-w-2xl mx-auto leading-relaxed"
        >
          Creating clean, accessible, and engaging user experiences with modern web technologies. 
          Specializing in interactive design, smooth animations, and intuitive interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="btn-primary group"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={downloadResume}
            className="btn-secondary group"
          >
            <Download className="mr-2 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Download Résumé
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-fg/60"
          >
            <MousePointer2 className="w-5 h-5" />
            <span className="text-sm">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </Section3D>
  )
}

export default Hero 