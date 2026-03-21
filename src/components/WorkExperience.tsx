import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { experiences } from "../content/experience"
import type { Experience } from "../content/types"

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

function EntryInfo({ exp }: { exp: Experience }) {
  return (
    <div className="space-y-0.5">
      <p className="font-mono text-sm text-text-secondary">
        {formatDate(exp.startDate)} &ndash; {formatDate(exp.endDate)}
      </p>
      <p className="font-display text-base font-bold text-text-primary leading-snug">
        {exp.role}
      </p>
      <p className="font-body text-base text-accent">{exp.company}</p>
    </div>
  )
}

const WorkExperience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()
  const sorted = [...experiences].sort(
    (a, b) => parseToTimestamp(b.startDate) - parseToTimestamp(a.startDate)
  )

  return (
    <section id="experience" className="bg-surface overflow-hidden">
      <div className="section-container pt-6 md:pt-8 pb-0">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label">Experience</span>
          <div className="divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Work Experience
          </h2>
        </motion.div>
      </div>

      {/* Desktop: horizontal alternating timeline */}
      <div className="hidden lg:block relative px-16 pb-16 pt-8">
        {/* Dotted baseline */}
        <div
          className="absolute left-16 right-16 pointer-events-none"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-hidden="true"
        >
          <div
            className="w-full"
            style={{
              borderTop: "2px dashed var(--color-surface-alt, #E8E0D0)",
            }}
          />
        </div>

        <div
          className="relative grid"
          style={{
            gridTemplateColumns: `repeat(${sorted.length}, 1fr)`,
            minHeight: "220px",
          }}
        >
          {sorted.map((exp, i) => {
            const above = i % 2 === 0
            return (
              <motion.div
                key={exp.id}
                className="flex flex-col items-center"
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : above ? -24 : 24,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
              >
                {/* Top slot — text when above */}
                <div className="flex-1 flex flex-col justify-end pb-5 text-center px-3">
                  {above && <EntryInfo exp={exp} />}
                </div>

                {/* Timeline dot */}
                <div
                  className="relative z-10 w-3.5 h-3.5 rounded-full bg-accent flex-shrink-0"
                  style={{ boxShadow: "0 0 0 3px var(--color-surface, #F0EBE1)" }}
                />

                {/* Bottom slot — text when below */}
                <div className="flex-1 flex flex-col justify-start pt-5 text-center px-3">
                  {!above && <EntryInfo exp={exp} />}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="lg:hidden px-6 pb-12 pt-8">
        <div
          className="relative pl-7 space-y-10"
          style={{
            borderLeft: "2px dashed var(--color-surface-alt, #E8E0D0)",
          }}
        >
          {sorted.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.08,
              }}
            >
              {/* Dot */}
              <div
                className="absolute top-1.5 w-3.5 h-3.5 rounded-full bg-accent"
                style={{
                  left: "-1.8125rem",
                  boxShadow: "0 0 0 3px var(--color-surface, #F0EBE1)",
                }}
                aria-hidden="true"
              />
              <EntryInfo exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
