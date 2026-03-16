import React from 'react'
import { motion } from 'framer-motion'
<<<<<<< Updated upstream
import { MousePointer2 } from 'lucide-react'
import Section3D from './Section3D'
import TechNetwork from './TechNetwork'
=======
import Section3D from './Section3D'
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
      <div className="w-full h-full min-h-screen px-6 flex items-center justify-center">
>>>>>>> Stashed changes
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <h1 className="font-hero text-5xl md:text-7xl font-semibold tracking-tight text-fg">
            Bjorn Bradley
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-accent-sky">
            Front-End & Interactive UX Developer
          </h2>
          <p className="text-base md:text-lg text-fg/80 leading-relaxed max-w-2xl mx-auto">
            I design and build clean, accessible digital experiences that blend thoughtful interaction with polished visual design.
          </p>
        </motion.div>
      </div>
    </Section3D>
  )
}

export default Hero 