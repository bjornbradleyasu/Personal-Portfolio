import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="bg-bg">
      <div className="section-container !pb-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 max-w-xl"
          >
            <div>
              <span className="section-label">About Me</span>
              <div className="divider" />
              <h2 className="font-display text-5xl md:text-6xl font-bold text-text-primary leading-tight">
                Developer. Designer.<br />Creative Problem Solver.
              </h2>
            </div>

            <div className="space-y-4 font-body text-text-secondary leading-relaxed text-xl">
              <p>
                I started in Computer Science before switching to Media Arts and Sciences, where
                I could focus on both the technical and experiential sides of building things.
                Five years of IT work alongside my studies gave me a practical foundation that
                most design and development programs don't teach.
              </p>
              <p>
                My projects span front-end development, VR, hardware, audio systems, and data.
                Not because I couldn't pick a direction, but because I'm genuinely interested in
                how all of it connects. I'm most useful on work that requires both technical and
                creative thinking at the same time.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Based in Phoenix, AZ",
                "ASU Alumni",
                "Open to opportunities",
              ].map(tag => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-surface-alt text-text-secondary bg-surface"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Education */}
            <div className="pt-4">
              <p className="font-mono text-[10px] tracking-widest uppercase text-text-secondary/60 mb-3">
                Education
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { credential: "B.S. Media Arts and Sciences (Media Processing)", institution: "Arizona State University", period: "2022–2026" },
                  { credential: "Certificate · Artificial Intelligence & Digital Media", institution: "Arizona State University", period: "2024" },
                  { credential: "Wwise Certified Professional · In Progress", institution: "Audiokinetic", period: "2025" },
                ].map((item) => (
                  <div
                    key={item.credential}
                    className="flex items-center gap-3 rounded-xl border border-surface-alt bg-surface px-4 py-3"
                  >
                    <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-body text-base font-medium text-text-primary leading-snug">{item.credential}</p>
                      <p className="font-mono text-xs text-text-secondary/70">{item.institution}</p>
                    </div>
                    <span className="font-mono text-[10px] text-text-secondary/50 shrink-0">{item.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center lg:justify-end lg:pt-[5rem]"
          >
            <div className="relative">
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-accent/30"
                aria-hidden="true"
              />
              <div className="relative w-[330px] h-[413px] rounded-2xl overflow-hidden bg-surface-alt">
                <img
                  src="/images/profile.jpg"
                  alt="Bjorn Bradley"
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
