import React from 'react'
import { motion } from 'framer-motion'
import { MousePointer2 } from 'lucide-react'
import Section3D from './Section3D'
import TechNetwork from './TechNetwork'

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
  return (
    <Section3D
      sectionId="hero"
      className="min-h-screen pt-16"
    >
      {/* Content - Full width */}
      <div className="w-full h-full flex items-center">
        <div className="w-full px-8 min-h-[85vh] flex items-center">
          {/* Unified Container: Tech Network as outer donut with About in center */}
          <div className="w-full relative">
            {/* Background Tech Network Container */}
            <div className="w-full h-[1000px] relative mb-0">
              <TechNetwork selectedCategory="all" />
            </div>

            {/* Centered About Section (overlaid on tech network) - Made Circular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="bg-gradient-to-b from-bg/95 to-bg/90 backdrop-blur-sm rounded-full border border-white/10 w-[300px] h-[300px] flex flex-col items-center justify-center text-center pointer-events-auto p-8">
                {/* Name and Title - Simplified for circular container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-3"
                >
                  <h1 className="font-display text-3xl font-bold text-fg">
                    Bjorn Bradley
                  </h1>
                  <h2 className="font-display text-sm font-medium text-accent-sky">
                    Front-End & UX Developer
                  </h2>
                  <p className="text-xs text-fg/70 mt-2">
                    Creating engaging experiences with modern web tech
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

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