import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, ChevronDown } from 'lucide-react'
import Section3D from './Section3D'
import { experiences } from '../content/experience'

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const toggle = (id: string) => setExpandedId(prev => (prev === id ? null : id))

  return (
    <Section3D
      sectionId="experience"
    >
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg mb-4">
          Work Experience
        </h2>
        <p className="text-lg text-fg/70 max-w-2xl mx-auto">
          My professional journey in software development and design
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-sky to-accent-indigo" />

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-0 w-4 h-4 bg-accent-sky rounded-full border-4 border-bg" />

              {/* Content */}
              <div className="ml-20">
                <button
                  onClick={() => toggle(experience.id)}
                  className="glass-card p-6 w-full text-left cursor-pointer group"
                  aria-expanded={expandedId === experience.id}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-fg mb-2">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-4 text-fg/70">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-fg/60">
                      <span className="text-sm hidden sm:inline">Click to {expandedId === experience.id ? 'hide' : 'see'} details</span>
                      <motion.span
                        animate={{ rotate: expandedId === experience.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-accent-sky"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.span>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {expandedId === experience.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-fg mb-3">Achievments & Responsibilities</h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-accent-sky rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-fg/80">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-fg mb-3">Skills Learned</h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-accent-sky/20 text-accent-sky rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section3D>
  )
}

export default Experience 