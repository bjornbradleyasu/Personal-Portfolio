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

// ─── Card ─────────────────────────────────────────────────────────────────────

function EntryCard({ exp }: { exp: Experience }) {
  return (
    <div className="rounded-xl border border-surface-alt bg-surface px-4 py-5 space-y-3 h-full">
      <div>
        <p className="font-mono text-sm tracking-wide text-text-secondary mb-1">
          {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
        </p>
        <p className="font-display text-lg font-bold text-text-primary leading-snug">
          {exp.role}
        </p>
        <p className="font-body text-base text-accent">{exp.company}</p>
      </div>

      {exp.hoverBullets && exp.hoverBullets.length > 0 && (
        <ul className="space-y-2">
          {exp.hoverBullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-body text-sm leading-snug text-text-secondary">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      )}

      {exp.technologies && exp.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1 pt-1">
          {exp.technologies.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-bg border border-surface-alt text-text-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const WorkExperience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  const sorted = [...experiences].sort((a, b) => {
    const diff = parseToTimestamp(b.startDate) - parseToTimestamp(a.startDate)
    if (diff !== 0) return diff
    if (a.endDate === "Present") return -1
    if (b.endDate === "Present") return 1
    return parseToTimestamp(b.endDate) - parseToTimestamp(a.endDate)
  })

  return (
    <section id="experience" className="bg-bg">
      <div className="section-container pt-6 md:pt-8 pb-0">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label">Experience</span>
          <div className="divider" />
          <h2 className="font-display text-5xl md:text-6xl font-bold text-text-primary">
            Work Experience
          </h2>
        </motion.div>
      </div>

      {/* ── Desktop: single-row, dashed line threads behind cards ─────── */}
      <div className="hidden lg:block px-16 pb-16 pt-10">
        {/* Outer wrapper establishes the positioning context for the line */}
        <div className="relative">
          {/* Dashed line runs at the top of the card row, behind every card.
              Each card's bg-surface covers it inline; the gap between cards
              lets it show through, visually "connecting" them. */}
          <div
            className="absolute inset-x-0 pointer-events-none"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              borderTop: "2px dashed var(--color-surface-alt)",
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          <div
            className="relative grid gap-3"
            style={{
              gridTemplateColumns: `repeat(${sorted.length}, 1fr)`,
              zIndex: 1,
            }}
          >
            {sorted.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <EntryCard exp={exp} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical left-spine list ──────────────────────────── */}
      <div className="lg:hidden px-6 pb-12 pt-8">
        <div
          className="relative pl-7 space-y-6"
          style={{ borderLeft: "2px dashed var(--color-surface-alt)" }}
        >
          {sorted.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <div
                className="absolute w-2.5 h-2.5 rounded-full bg-accent"
                style={{
                  top: "1rem",
                  left: "-1.625rem",
                  boxShadow: "0 0 0 3px var(--color-bg)",
                }}
                aria-hidden="true"
              />
              <EntryCard exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
