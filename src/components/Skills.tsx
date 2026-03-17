import React, { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { techCategories } from "../content/tech"

const Skills: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()
  const categories = Object.entries(techCategories)
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.[0] ?? "")

  const activeEntry = categories.find(([key]) => key === activeCategory) ?? categories[0]

  if (!activeEntry) return null

  const [activeKey, activeData] = activeEntry

  const trackRows = activeData.items.map((item, idx) => ({
    ...item,
    index: idx + 1,
  }))

  return (
    <section id="skills" className="bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="section-label">Capabilities</span>
          <div className="divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Skills &amp; Tools
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[3.15rem] h-px bg-surface-alt/80" aria-hidden="true" />

          {/* Vinyl tabs */}
          <div className="relative z-10 flex gap-2 overflow-x-auto pb-2 pr-2 md:pr-0 scrollbar-hide">
            {categories.map(([key, category], idx) => {
              const isActive = key === activeKey
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={
                    "relative shrink-0 min-w-[9.5rem] rounded-t-xl border px-4 py-2.5 text-left transition-all duration-200 " +
                    (isActive
                      ? "bg-bg border-surface-alt border-b-bg -mb-px"
                      : "bg-surface-alt/45 border-surface-alt/80 hover:bg-surface-alt/70")
                  }
                  style={{ transform: isActive ? "translateY(0)" : `translateY(${Math.min(idx * 1.5, 7)}px)` }}
                >
                  <p className={"font-mono text-[10px] tracking-widest uppercase " + (isActive ? "text-accent" : "text-text-secondary/70")}>
                    Crate {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className={"font-display text-sm font-bold leading-none mt-1 whitespace-nowrap " + (isActive ? "text-text-primary" : "text-text-secondary")}>
                    {category.title}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Crate body */}
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-0 rounded-2xl border border-surface-alt bg-bg p-4 md:p-5 shadow-[0_14px_50px_rgba(26,20,16,0.08)]"
          >
            <div className="flex flex-wrap items-end justify-between gap-3 pb-3 border-b border-surface-alt/80">
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent">
                  Now Spinning
                </p>
                <p className="font-display text-2xl font-bold text-text-primary leading-tight">
                  {activeData.title}
                </p>
              </div>
              <p className="font-body text-sm text-text-secondary max-w-xl">
                {activeData.description}
              </p>
            </div>

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
              {trackRows.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: item.index * 0.018, ease: "easeOut" }}
                  className="group flex items-center gap-3 rounded-md px-2 py-2 border border-transparent hover:border-surface-alt hover:bg-surface/55 transition-colors"
                >
                  <span className="w-7 shrink-0 text-right font-mono text-[10px] text-text-secondary/60">
                    {String(item.index).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-body text-sm text-text-primary leading-snug">
                        {item.name}
                      </p>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary/70 shrink-0">
                        {item.proficiency}
                      </span>
                    </div>
                    <p className="font-body text-xs text-text-secondary/80 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-text-secondary/70">
          <span className="w-2 h-2 rounded-full bg-accent/60" />
          <p className="font-mono text-[10px] tracking-widest uppercase">
            Select a crate tab to browse each toolkit
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
