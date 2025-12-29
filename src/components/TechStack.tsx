import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Section3D from './Section3D'
import { techCategories } from '../content/tech'
import TechIcon from './TechIcon'
import { TechItem } from '../content/types'

const TechStack: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filteredTech, setFilteredTech] = useState<TechItem[]>([])

  // Get all tech items or filter by category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredTech(Object.values(techCategories).flatMap(category => category.items) as TechItem[])
    } else {
      setFilteredTech((techCategories[selectedCategory as keyof typeof techCategories]?.items || []) as TechItem[])
    }
  }, [selectedCategory])

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
  }, [filteredTech])

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert': return 'from-green-400/20 to-emerald-500/20'
      case 'advanced': return 'from-blue-400/20 to-cyan-500/20'
      case 'intermediate': return 'from-yellow-400/20 to-orange-500/20'
      default: return 'from-gray-400/20 to-gray-500/20'
    }
  }

  const getProficiencyText = (proficiency: string) => {
    switch (proficiency) {
      case 'expert': return 'Expert'
      case 'advanced': return 'Advanced'
      case 'intermediate': return 'Intermediate'
      default: return 'Beginner'
    }
  }

  const categoryButtons = [
    { key: 'all', label: 'All', count: Object.values(techCategories).flatMap(cat => cat.items).length },
    ...Object.entries(techCategories).map(([key, category]) => ({
      key,
      label: category.title,
      count: category.items.length
    }))
  ]

  return (
    <Section3D
      sectionId="tech"
      className="py-0"
    >
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-fg/70 max-w-2xl mx-auto mb-8">
          Technologies and tools I use to bring ideas to life
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categoryButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => setSelectedCategory(button.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === button.key
                  ? 'bg-accent-sky text-white shadow-lg shadow-accent-sky/25'
                  : 'bg-muted/50 text-fg hover:bg-muted/70 hover:scale-105'
              }`}
            >
              {button.label}
              <span className="ml-2 text-xs opacity-70">({button.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tech Carousel */}
      <div className="relative">
          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
            role="list"
            aria-label="Technology stack carousel"
          >
            <div className="flex gap-6" style={{ width: 'max-content' }}>
            {/* Duplicate the filtered tech for seamless loop */}
            {[...filteredTech, ...filteredTech].map((tech, index) => (
              <motion.div
                key={`${tech.id}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % filteredTech.length) * 0.05 }}
                className="flex-shrink-0"
              >
                <div 
                  className="glass-card p-5 w-44 h-44 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
                  role="listitem"
                  aria-label={`${tech.name} - ${getProficiencyText(tech.proficiency)} proficiency`}
                >
                  <div className={`w-24 h-24 mb-3 bg-gradient-to-br ${getProficiencyColor(tech.proficiency)} rounded-xl flex items-center justify-center text-accent-sky`}>
                    <TechIcon icon={tech.icon} className="w-12 h-12" />
                  </div>
                  <h3 className="font-semibold text-fg mb-1">{tech.name}</h3>
                  <div 
                    className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getProficiencyColor(tech.proficiency)} text-fg`}
                    aria-label={`Proficiency level: ${getProficiencyText(tech.proficiency)}`}
                  >
                    {getProficiencyText(tech.proficiency)}
                  </div>
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