import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section3D from './Section3D'
import TechIcon from './TechIcon'
import { techCategories } from '../content/tech'
import { TechItem } from '../content/types'

const Skills: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<'all' | keyof typeof techCategories>('all')

  const techItems = useMemo<TechItem[]>(() => {
    if (selectedCategory === 'all') {
      return Object.values(techCategories).flatMap((category) => category.items) as TechItem[]
    }
    return (techCategories[selectedCategory]?.items ?? []) as TechItem[]
  }, [selectedCategory])

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
    const onLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    container.addEventListener('mouseenter', onEnter)
    container.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener('mouseenter', onEnter)
      container.removeEventListener('mouseleave', onLeave)
    }
  }, [techItems.length])

  const loopingItems = useMemo(() => (techItems.length ? [...techItems, ...techItems] : []), [techItems])

  return (
    <Section3D sectionId="skills">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg mb-4">Skills</h2>
        <p className="text-lg text-fg/70 max-w-2xl mx-auto">
          Core tools and technologies I use to design and deliver modern web experiences.
        </p>
      </div>

      <div className="glass-card border border-white/10 p-6 rounded-xl shadow-glass max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <p className="text-base font-semibold uppercase tracking-[0.15em] text-fg/70">Tech Stack</p>
          <div className="w-10 h-10 rounded-full bg-accent-sky/15 border border-accent-sky/30 flex items-center justify-center text-accent-sky">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {([
            { key: 'all', label: 'All' },
            ...Object.entries(techCategories).map(([key, cat]) => ({ key, label: cat.title }))
          ] as Array<{ key: 'all' | keyof typeof techCategories; label: string }>).map((btn) => (
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

        <div className="relative h-[30rem] overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-bg via-bg/40 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-bg via-bg/40 to-transparent z-10" />
          <div
            ref={scrollRef}
            className="overflow-y-auto scrollbar-hide h-full pr-1"
            style={{ scrollBehavior: 'auto' }}
            role="list"
            aria-label="Skills vertical carousel"
          >
            <div className="grid md:grid-cols-2 gap-3" style={{ paddingBottom: '1rem' }}>
              {loopingItems.map((tech, index) => (
                <div
                  key={`${tech.id}-${index}`}
                  className="glass-card bg-white/5 border border-white/10 p-3 rounded-lg flex items-center gap-3 hover:translate-x-1 hover:-translate-y-0.5 transition-transform duration-300"
                  role="listitem"
                >
                  <TechIcon icon={tech.icon} className="w-12 h-12" />
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
    </Section3D>
  )
}

export default Skills