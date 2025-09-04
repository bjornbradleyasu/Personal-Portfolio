import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Section3D from './Section3D'
import { techStack } from '../content/tech'

const TechStack: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed
      scrollContainer.scrollLeft = scrollPosition
      
      // Reset scroll position when we've scrolled past all content
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0
      }
      
      animationId = requestAnimationFrame(animate)
    }

    // Start animation
    animationId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }
    
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <Section3D
      sectionId="tech"
      className="py-0"
    >
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-fg/70 max-w-xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Tech Carousel */}
      <div className="relative">
        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {/* Duplicate the tech stack for seamless loop */}
            {[...techStack, ...techStack].map((tech, index) => (
              <motion.div
                key={`${tech.id}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % techStack.length) * 0.05 }}
                className="flex-shrink-0"
              >
                <div className="glass-card p-5 w-44 h-44 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
                  <div className="w-24 h-24 mb-3 bg-gradient-to-br from-accent-sky/20 to-accent-indigo/20 rounded-xl flex items-center justify-center">
                    <div className="text-2xl">
                      {tech.icon === 'react' && '⚛️'}
                      {tech.icon === 'typescript' && '📘'}
                      {tech.icon === 'tailwind' && '🎨'}
                      {tech.icon === 'nextjs' && '⚡'}
                      {tech.icon === 'vue' && '💚'}
                      {tech.icon === 'figma' && '🎨'}
                      {tech.icon === 'framer' && '✨'}
                      {tech.icon === 'adobe' && '🎭'}
                      {tech.icon === 'ableton' && '🎵'}
                      {tech.icon === 'protools' && '🎧'}
                      {tech.icon === 'dante' && '🔌'}
                      {tech.icon === 'aws' && '☁️'}
                      {tech.icon === 'nodejs' && '🟢'}
                      {tech.icon === 'postgresql' && '🐘'}
                      {tech.icon === 'docker' && '🐳'}
                    </div>
                  </div>
                  <h3 className="font-semibold text-fg">{tech.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section3D>
  )
}

export default TechStack 