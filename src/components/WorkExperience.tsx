import React, { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { experiences } from "../content/experience"

function parseToTimestamp(dateStr: string): number {
  if (dateStr === "Present") return Date.now()
  if (dateStr.includes("/")) {
    const [m, y] = dateStr.split("/")
    return new Date(parseInt(y), parseInt(m) - 1).getTime()
  }
  const [y, m] = dateStr.split("-")
  return new Date(parseInt(y), parseInt(m) - 1).getTime()
}

function formatDate(dateStr: string): string {
  if (dateStr === "Present") return "Present"
  try {
    const d = new Date(parseToTimestamp(dateStr))
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  } catch {
    return dateStr
  }
}

const WorkExperience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  const sorted = [...experiences].sort((a, b) => {
    const diff = parseToTimestamp(b.startDate) - parseToTimestamp(a.startDate)
    if (diff !== 0) return diff
    if (a.endDate === "Present") return -1
    if (b.endDate === "Present") return 1
    return parseToTimestamp(b.endDate) - parseToTimestamp(a.endDate)
  })

  const [openId, setOpenId] = useState<string>(sorted[0]?.id ?? "")

  const toggle = (id: string) => setOpenId(prev => prev === id ? "" : id)

  return (
    <section id="experience" className="bg-bg">
      <div className="section-container pt-6 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <span className="section-label">Experience</span>
          <div className="divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Work Experience
          </h2>
        </motion.div>

        <div className="divide-y divide-surface-alt border-t border-surface-alt">
          {sorted.map((exp, i) => {
            const isOpen = openId === exp.id
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
              >
                {/* ── Row trigger ── */}
                <button
                  onClick={() => toggle(exp.id)}
                  className="w-full flex items-center gap-6 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  {/* Index */}
                  <span className="font-mono text-xs text-text-secondary/40 w-6 shrink-0 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Role + company */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-display text-xl font-bold leading-snug transition-colors duration-200 ${isOpen ? "text-accent" : "text-text-primary group-hover:text-accent"}`}>
                      {exp.role}
                    </p>
                    <p className="font-body text-sm text-text-secondary/70 mt-0.5">{exp.company}</p>
                  </div>

                  {/* Date */}
                  <span className="font-mono text-xs text-text-secondary/50 shrink-0 hidden sm:block">
                    {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
                  </span>

                  {/* Expand indicator */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                    className={`font-mono text-xl leading-none shrink-0 transition-colors duration-200 ${isOpen ? "text-accent" : "text-text-secondary/30 group-hover:text-accent"}`}
                  >
                    +
                  </motion.span>
                </button>

                {/* ── Expanded panel ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pl-12 pb-8 grid md:grid-cols-[1fr_160px] gap-10 items-start">
                        {/* Bullets */}
                        {exp.hoverBullets && exp.hoverBullets.length > 0 && (
                          <ul className="space-y-3">
                            {exp.hoverBullets.map((bullet, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                                <span className="font-body text-base text-text-secondary leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Tech tags — stacked vertically */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex flex-col gap-2">
                            {exp.technologies.map(t => (
                              <span
                                key={t}
                                className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface border border-surface-alt text-text-secondary text-center"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
