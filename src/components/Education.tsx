import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Award, FileText } from 'lucide-react'
import Section3D from './Section3D'
import { education, certificates } from '../content/education'
import { classProjects } from '../content/class-projects'
import { useScrollLock } from '../hooks/useScrollLock'

const Education: React.FC = () => {
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null)
  const open = (id: string) => setSelectedClassId(id)
  const close = () => setSelectedClassId(null)

  // Lock scroll when modal is open
  useScrollLock(selectedClassId !== null)

  return (
    <Section3D
      sectionId="education"
    >
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg mb-4">
          Education & Certificates
        </h2>
        <p className="text-lg text-fg/70 max-w-2xl mx-auto">
          My academic background, certifications, and selected class projects
        </p>
      </div>

      {/* Top: Education (left) and Certificates (right) */}
      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-semibold text-fg mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-accent-sky" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="glass-card p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-fg mb-2">
                      {edu.degree} in {edu.field}
                    </h4>
                    <div className="text-fg/70 text-sm">
                      <span className="mr-4">{edu.institution}</span>
                      <span>{edu.startDate} - {edu.endDate}</span>
                    </div>
                  </div>
                  {edu.gpa && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent-sky">{edu.gpa}</div>
                      <div className="text-sm text-fg/60">GPA</div>
                    </div>
                  )}
                </div>
                {edu.relevantCourses && (
                  <div>
                    <h5 className="font-medium text-fg mb-3">Relevant Courses</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course) => (
                        <span key={course} className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-display text-2xl font-semibold text-fg mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-accent-indigo" />
            Certificates
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div key={cert.id} className="glass-card p-4">
                <h4 className="font-semibold text-fg mb-1">{cert.name}</h4>
                <p className="text-sm text-fg/70 mb-2">{cert.issuingOrg}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-fg/70">{cert.year}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${cert.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {cert.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom: 2 rows x 4 cols of clickable class project cards */}
      <div>
        <h3 className="font-display text-2xl font-semibold text-fg mb-6">Class Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classProjects.slice(0, 8).map((proj, index) => (
            <motion.button
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-5 text-left hover:scale-[1.02] transition-transform"
              onClick={() => open(proj.id)}
            >
              <h4 className="font-semibold text-fg mb-2 line-clamp-2">{proj.title}</h4>
              <p className="text-sm text-fg/70 line-clamp-2">{proj.description}</p>
              <div className="mt-3 text-xs text-fg/60 inline-flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" /> View details
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal for class projects */}
      <AnimatePresence>
        {selectedClassId && (
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
                const proj = classProjects.find(p => p.id === selectedClassId)
                if (!proj) return null
                return (
                  <div className="p-6 space-y-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-3xl font-bold text-fg">{proj.title}</h2>
                      <button onClick={close} className="text-fg/60 hover:text-fg transition-colors">✕</button>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-fg mb-3">Overview</h3>
                      <p className="text-fg/80 leading-relaxed">{proj.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-fg mb-3">What I Learned</h3>
                        <ul className="space-y-2">
                          {proj.whatLearned.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0" />
                              <span className="text-fg/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-fg mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {proj.technologies.map((t) => (
                            <span key={t} className="px-3 py-1 bg-accent-sky/20 text-accent-sky rounded-full text-sm">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      {proj.githubUrl && (
                        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                          View Code
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

export default Education 