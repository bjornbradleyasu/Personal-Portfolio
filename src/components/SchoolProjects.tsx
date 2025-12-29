import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Github } from 'lucide-react'
import Section3D from './Section3D'
import { caseStudies } from '../content/case-studies'
import { useScrollLock } from '../hooks/useScrollLock'

const SchoolProjects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const open = (id: string) => setSelectedId(id)
  const close = () => setSelectedId(null)

  // Lock scroll when modal is open
  useScrollLock(selectedId !== null)

  return (
    <Section3D
      sectionId="school-projects"
    >
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg mb-4">
          Case Studies
        </h2>
        <p className="text-lg text-fg/70 max-w-2xl mx-auto">
          Deep dives into problems, constraints, solutions, and outcomes
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((cs, index) => (
          <motion.button
            key={cs.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group text-left"
            onClick={() => open(cs.id)}
          >
            <div className="glass-card p-6 h-full flex flex-col hover:scale-105 transition-transform">
              {/* [PLACEHOLDER: Add case study images]
                  Replace this placeholder div with actual images:
                  <img src={cs.images[0]} alt={`${cs.title} screenshot`} className="w-full h-40 object-cover rounded-lg mb-4" />
              */}
              <div className="w-full h-40 bg-gradient-to-br from-accent-sky/20 to-accent-indigo/20 rounded-lg mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-fg mb-2">{cs.title}</h3>
              <p className="text-fg/70 mb-4 leading-relaxed">{cs.description}</p>
              <div className="flex gap-2 text-sm text-fg/60 mt-auto">
                <FileText className="w-4 h-4" />
                View Case Study
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-bg border border-white/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const cs = caseStudies.find(p => p.id === selectedId)
                if (!cs) return null
                return (
                  <div className="p-6 space-y-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-3xl font-bold text-fg">{cs.title}</h2>
                      <button onClick={close} className="text-fg/60 hover:text-fg transition-colors">✕</button>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-fg mb-3">Problem Statement</h3>
                      <p className="text-fg/80 leading-relaxed">{cs.problemStatement}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-fg mb-3">Solution</h3>
                      <p className="text-fg/80 leading-relaxed">{cs.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-fg mb-3">Role</h3>
                        <p className="text-fg/80">{cs.role}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-fg mb-3">Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {cs.stack.map((t) => (
                            <span key={t} className="px-3 py-1 bg-accent-sky/20 text-accent-sky rounded-full text-sm">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-fg mb-3">Key Results</h3>
                      <ul className="space-y-2">
                        {cs.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0" />
                            <span className="text-fg/80">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Code Preview */}
                    <div className="pt-6 border-t border-white/10">
                      <h3 className="text-lg font-semibold text-fg mb-3">Code Preview</h3>
                      <div className="bg-muted/30 border border-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-fg/60">{cs.codePreview.file}</span>
                          <span className="text-xs text-fg/50 bg-fg/10 px-2 py-1 rounded">{cs.codePreview.language}</span>
                        </div>
                        <pre className="text-sm text-fg/80 overflow-x-auto">
                          <code>{cs.codePreview.code}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex gap-4">
                      {cs.githubUrl && (
                        <a href={cs.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                          <Github className="w-4 h-4 mr-2" /> View Code
                        </a>
                      )}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section3D>
  )
}

export default SchoolProjects 