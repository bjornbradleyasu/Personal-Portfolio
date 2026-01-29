import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, MousePointer2 } from 'lucide-react'
import Section3D from './Section3D'
import TechIcon from './TechIcon'
import { techCategories } from '../content/tech'
import { TechItem } from '../content/types'

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

  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<'all' | keyof typeof techCategories>('all')

  const techItems = useMemo<TechItem[]>(() => {
    if (selectedCategory === 'all') {
      return Object.values(techCategories).flatMap(category => category.items) as TechItem[]
    }
    return (techCategories[selectedCategory]?.items ?? []) as TechItem[]
  }, [selectedCategory])

  // Vertical auto-scroll for tech stack (loops seamlessly)
  useEffect(() => {
    const container = scrollRef.current
    if (!container || techItems.length === 0) return

    let animationId = 0
    let scrollPosition = 0
    const scrollSpeed = 0.35

    const animate = () => {
      scrollPosition += scrollSpeed
      container.scrollTop = scrollPosition

      if (scrollPosition >= container.scrollHeight - container.clientHeight) {
        scrollPosition = 0
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const onEnter = () => cancelAnimationFrame(animationId)
    const onLeave = () => { animationId = requestAnimationFrame(animate) }
    container.addEventListener('mouseenter', onEnter)
    container.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener('mouseenter', onEnter)
      container.removeEventListener('mouseleave', onLeave)
    }
  }, [techItems.length])

  const loopingItems = useMemo(() => techItems.length ? [...techItems, ...techItems] : [], [techItems])

  return (
    <Section3D
      sectionId="hero"
      className="min-h-screen overflow-hidden"
    >
      {/* Content - Full width, no constraints */}
      <div className="w-full h-full flex items-center">
        <div className="relative w-[90vw] mx-auto px-6 min-h-[85vh]">
          <div className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm pointer-events-none" aria-hidden="true" />
          <div className="relative z-10">
            <div className="grid lg:grid-cols-[1fr_0.5fr_0.7fr] gap-0 items-end w-full">
              {/* Left: Text Content */}
              <div className="space-y-8 text-left">
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
                  className="text-lg md:text-xl text-fg/80 max-w-2xl leading-relaxed"
                >
                  Creating clean, accessible, and engaging user experiences with modern web technologies. 
                  Specializing in interactive design, smooth animations, and intuitive interfaces.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
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
              </div>

              {/* Middle: Full Body Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="hidden lg:block"
              >
                <div className="relative h-[80vh] max-h-[80vh]">
                  <img
                    src="/assets/fullbodyimage.png"
                    alt="Bjorn Bradley"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Right: Tech Stack Card (Far Right with Margin) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative hidden lg:flex lg:items-center lg:ml-auto self-center"
              >
                <div className="glass-card border border-white/10 p-6 rounded-xl shadow-glass lg:h-[80vh] lg:max-h-[80vh] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-base font-semibold uppercase tracking-[0.15em] text-fg/70">Tech Stack</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent-sky/15 border border-accent-sky/30 flex items-center justify-center text-accent-sky">
                      ⚡
                    </div>
                  </div>
                  {/* Top bar toggles for grouping */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {([
                      { key: 'all', label: 'All' },
                      ...Object.entries(techCategories).map(([key, cat]) => ({ key, label: cat.title }))
                    ] as Array<{ key: 'all' | keyof typeof techCategories, label: string }>).map(btn => (
                      <button
                        key={btn.key}
                        onClick={() => setSelectedCategory(btn.key)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                          selectedCategory === btn.key
                            ? 'bg-accent-sky text-white shadow shadow-accent-sky/30'
                            : 'bg-muted/40 text-fg hover:bg-muted/60'
                        }`}
                        aria-pressed={selectedCategory === btn.key}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <div className="relative flex-1 overflow-hidden">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-bg via-bg/40 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                    <div
                      ref={scrollRef}
                      className="overflow-y-auto scrollbar-hide h-full pr-1"
                      style={{ scrollBehavior: 'auto' }}
                      role="list"
                      aria-label="Technology stack vertical carousel"
                    >
                      <div className="flex flex-col gap-3" style={{ paddingBottom: '1rem' }}>
                        {loopingItems.map((tech, index) => (
                          <div
                            key={`${tech.id}-${index}`}
                            className="glass-card bg-white/5 border border-white/10 p-3 rounded-lg flex items-center gap-3 hover:translate-x-1 hover:-translate-y-0.5 transition-transform duration-300"
                            role="listitem"
                            aria-label={`${tech.name}`}
                          >
                            <TechIcon icon={tech.icon} className="w-14 h-14" />
                            <div className="flex-1 min-w-0">
                              <p className="text-base font-semibold text-fg truncate">{tech.name}</p>
                              <p className="text-sm text-fg/60 truncate capitalize">{tech.proficiency}</p>
                            </div>
                            <div className="text-xs px-2 py-1 rounded-full bg-accent-sky/15 text-accent-sky capitalize">
                              {tech.proficiency}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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