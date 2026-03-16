import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section3D from './Section3D'
import { caseStudies } from '../content/case-studies'

const CaseStudies: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = caseStudies.find(c => c.id === selectedId) ?? null

  return (
    <Section3D sectionId="case-studies">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg mb-4">
          Case Studies
        </h2>
        <p className="text-lg text-fg/70">
          Deep dives into selected projects and problem-solving approaches
        </p>
      </div>

      <div className="flex flex-col md:flex-row min-h-[560px] rounded-xl border border-white/10 overflow-hidden">

        {/* Left: list */}
        <div className="md:w-72 flex-shrink-0 flex flex-col border-b md:border-b-0 md:border-r border-white/10">
          {caseStudies.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setSelectedId(cs.id)}
              className={`text-left px-5 py-5 transition-all duration-200 border-b border-white/5 last:border-b-0 ${
                selectedId === cs.id
                  ? 'bg-accent-sky/10 text-accent-sky border-l-2 border-l-accent-sky'
                  : 'text-fg/60 hover:text-fg hover:bg-white/5 border-l-2 border-l-transparent'
              }`}
            >
              <span className="font-medium text-sm leading-snug block">{cs.title}</span>
            </button>
          ))}
        </div>

        {/* Right: detail */}
        <div className="flex-1 min-w-0 p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-7"
              >
                {/* Header */}
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-fg mb-1.5">
                    {selected.title}
                  </h3>
                  <p className="text-accent-sky text-sm font-medium">{selected.role}</p>
                </div>

                {/* Problem */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-fg/30 mb-2">Problem</p>
                  <p className="text-fg/80 leading-relaxed text-sm">{selected.problemStatement}</p>
                </div>

                {/* Solution */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-fg/30 mb-2">Solution</p>
                  <p className="text-fg/80 leading-relaxed text-sm">{selected.description}</p>
                </div>

                {/* Stack */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-fg/30 mb-2">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-fg/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                {selected.highlights.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-fg/30 mb-2">Highlights</p>
                    <ul className="space-y-2">
                      {selected.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-fg/80 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-sky flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Constraints */}
                {selected.constraints.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-fg/30 mb-2">Constraints</p>
                    <ul className="space-y-2">
                      {selected.constraints.map((c, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-fg/80 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-indigo flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                {(selected.githubUrl || selected.liveUrl) && (
                  <div className="flex gap-3 pt-1">
                    {selected.githubUrl && (
                      <a
                        href={selected.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm flex items-center gap-2"
                      >
                        GitHub
                      </a>
                    )}
                    {selected.liveUrl && (
                      <a
                        href={selected.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm flex items-center gap-2"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-full min-h-[400px]"
              >
                <p className="text-fg/30 text-base italic">Select a case study to view details</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section3D>
  )
}

export default CaseStudies
