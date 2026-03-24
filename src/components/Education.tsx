import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const educationItems = [
  {
    id: "edu-asu-mas",
    institution: "Arizona State University",
    degree: "B.S. Media Arts & Sciences",
    period: "2022 — Present",
    note: "Senior",
    highlights: [
      "Interactive media, UX design, and creative technology",
      "Focus on audio-visual systems and immersive experiences",
      "XR and spatial computing coursework",
    ],
  },
  {
    id: "edu-asu-cs",
    institution: "Arizona State University",
    degree: "Computer Science",
    period: "2021 — 2022",
    note: "Transferred",
    highlights: [
      "Core programming fundamentals and data structures",
      "Object-oriented design and algorithms",
      "Foundation for applied software development",
    ],
  },
]

const Education: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="education" className="bg-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <span className="section-label">Background</span>
          <div className="divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {educationItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
              className="rounded-2xl border border-surface-alt bg-surface p-6 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-text-secondary/70 pt-1">
                  {item.period}
                </span>
              </div>

              {/* Degree info */}
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-accent mb-1">
                  {item.note}
                </p>
                <h3 className="font-display text-xl font-bold text-text-primary leading-snug">
                  {item.degree}
                </h3>
                <p className="font-body text-sm text-text-secondary mt-0.5">
                  {item.institution}
                </p>
              </div>

              {/* Highlights */}
              <ul className="space-y-1.5 mt-auto">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[0.35rem] w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                    <span className="font-body text-sm text-text-secondary leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
