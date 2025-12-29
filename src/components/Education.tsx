import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Award, FileText, ChevronDown } from 'lucide-react'
import Section3D from './Section3D'
import { education, certificates } from '../content/education'
import { classProjects } from '../content/courses'
import { useScrollLock } from '../hooks/useScrollLock'

const Education: React.FC = () => {
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null)
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set())
  const open = (id: string) => setSelectedClassId(id)
  const close = () => setSelectedClassId(null)

  // Lock scroll when modal is open
  useScrollLock(selectedClassId !== null)

  // Helpers to interpret and sort semesters like "Fall 2025", "Spring 2026"
  const parseSemester = (label: string): { season: 'Spring' | 'Summer' | 'Fall', year: number } | null => {
    const match = label.match(/^(Spring|Summer|Fall)\s+(\d{4})$/)
    if (!match) return null
    return { season: match[1] as 'Spring' | 'Summer' | 'Fall', year: Number(match[2]) }
  }

  

  // (Removed semesterCompare; using year-based grouping and sorting instead)

  // Group projects by year, then by semester; sort years and semesters (newest first)
  const { yearsSorted, projectsByYear } = useMemo(() => {
    const byYear = new Map<number, Map<'Spring' | 'Summer' | 'Fall', typeof classProjects>>()
    for (const proj of classProjects) {
      const p = parseSemester(proj.semester)
      if (!p) continue
      const yearMap = byYear.get(p.year) ?? new Map<'Spring' | 'Summer' | 'Fall', typeof classProjects>()
      const list = yearMap.get(p.season) ?? []
      list.push(proj)
      yearMap.set(p.season, list)
      byYear.set(p.year, yearMap)
    }
    const years = Array.from(byYear.keys()).sort((a, b) => b - a) // newest year first
    // Sort projects in each season by title for stable ordering
    for (const y of years) {
      const ym = byYear.get(y)
      if (!ym) continue
      const seasons: Array<'Spring' | 'Summer' | 'Fall'> = ['Fall', 'Summer', 'Spring']
      for (const season of seasons) {
        const list = ym.get(season)
        if (list && list.length) ym.set(season, list.slice().sort((a, b) => a.title.localeCompare(b.title)))
      }
    }
    return { yearsSorted: years, projectsByYear: byYear }
  }, [])

  // Determine current semester based on today's date
  const getCurrentSemesterLabel = (): string | null => {
    const now = new Date()
    const y = now.getFullYear()
    const m = now.getMonth() + 1 // 1-12
    let label: string
    if (m >= 9) label = `Fall ${y}`
    else if (m >= 5) label = `Summer ${y}`
    else label = `Spring ${y}`
    // If site data doesn't include this label, fall back to the latest semester found within the latest year
    const latestYear = yearsSorted[0]
    if (!latestYear) return label
    const latestYearMap = projectsByYear.get(latestYear)
    const latestSeasonInLatestYear = latestYearMap
      ? (['Fall', 'Summer', 'Spring'] as const).find((s) => (latestYearMap.get(s) ?? []).length > 0)
      : undefined
    const fallback = latestSeasonInLatestYear ? `${latestSeasonInLatestYear} ${latestYear}` : null
    const hasLabel = (() => {
      const p = parseSemester(label)
      if (!p) return false
      const ym = projectsByYear.get(p.year)
      const list = ym?.get(p.season) ?? []
      return list.length > 0
    })()
    if (!hasLabel) return fallback
    return label
  }

  const currentSemester = getCurrentSemesterLabel()
  const currentParsed = currentSemester ? parseSemester(currentSemester) : null
  const currentCourses = (() => {
    if (!currentParsed) return []
    const ym = projectsByYear.get(currentParsed.year)
    return (ym?.get(currentParsed.season) ?? [])
  })()
  const pastYears = yearsSorted.filter((y) => y !== (currentParsed?.year ?? -1))
  const toggleYear = (year: number) => {
    setExpandedYears((prev) => {
      const next = new Set(prev)
      if (next.has(year)) next.delete(year)
      else next.add(year)
      return next
    })
  }



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

      {/* Current Coursework - Always Visible */}
      <div>
        <h3 className="font-display text-2xl font-semibold text-fg mb-6">Current Coursework</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCourses.map((proj, index) => (
            <motion.button
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-5 text-left group cursor-pointer"
              onClick={() => open(proj.id)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-sky/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2" />
                <div className="relative">
                  <h4 className="font-semibold text-fg mb-2 line-clamp-2 bg-gradient-to-r from-accent-cyan to-accent-sky bg-clip-text text-transparent">
                    {proj.title}
                  </h4>
                  <p className="text-sm text-fg/70 line-clamp-2 group-hover:text-fg/90 transition-colors duration-300">
                    {proj.description}
                  </p>
                  <div className="mt-3 text-xs text-fg/60 inline-flex items-center gap-2 group-hover:text-accent-sky transition-colors duration-300">
                    <FileText className="w-3.5 h-3.5" /> View details
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Years - Individual dropdowns with semester grouping */}
      {pastYears.length > 0 && (
        <div className="mt-12">
          <h3 className="font-display text-2xl font-semibold text-fg mb-4">Years</h3>
          <div className="space-y-4">
            {pastYears.map((year) => {
              const isOpen = expandedYears.has(year)
              const ym = projectsByYear.get(year)
              const seasonsInOrder = ['Fall', 'Summer', 'Spring'] as const
              return (
                <div key={year} className="glass-card p-4">
                  <button
                    onClick={() => toggleYear(year)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-fg">{year}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-fg/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && ym && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        {seasonsInOrder.map((season) => {
                          const items = ym.get(season) ?? []
                          if (!items.length) return null
                          return (
                            <div key={`${year}-${season}`} className="mt-4">
                              <h4 className="text-lg font-semibold text-fg mb-3">{season} {year}</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {items.map((proj, index) => (
                                  <motion.button
                                    key={proj.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, delay: index * 0.04 }}
                                    className="glass-card p-5 text-left group cursor-pointer"
                                    onClick={() => open(proj.id)}
                                  >
                                    <div className="relative">
                                      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-sky/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2" />
                                      <div className="relative">
                                        <h4 className="font-semibold text-fg mb-2 line-clamp-2 bg-gradient-to-r from-accent-cyan to-accent-sky bg-clip-text text-transparent">
                                          {proj.title}
                                        </h4>
                                        <p className="text-sm text-fg/70 line-clamp-2 group-hover:text-fg/90 transition-colors duration-300">
                                          {proj.description}
                                        </p>
                                        <div className="mt-3 text-xs text-fg/60 inline-flex items-center gap-2 group-hover:text-accent-sky transition-colors duration-300">
                                          <FileText className="w-3.5 h-3.5" /> View details
                                        </div>
                                      </div>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      )}


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