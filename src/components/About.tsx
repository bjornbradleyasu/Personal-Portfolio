import React from "react"
import { motion, useReducedMotion } from "framer-motion"

const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="bg-surface">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">

          {/* Left � text */}
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
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                Designer. Developer.<br />ASU Senior.
              </h2>
            </div>

            <div className="space-y-4 font-body text-text-secondary leading-relaxed text-lg">
              <p>
                I'm a Media Arts &amp; Sciences senior at ASU with a background in Computer Science,
                making the switch when I realized I cared more about what technology feels like
                than just how it works.
              </p>
              <p>
                Six years in IT gave me a deep respect for systems that actually hold up under
                pressure. That same sensibility carries into everything I build � clean, durable,
                and worth the attention it asks for.
              </p>
              <p>
                Audio is my other language. From Ableton to FMOD to hand-rolled hardware, if it
                makes sound and requires code, I'm in.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Based in Phoenix, AZ",
                "Currently studying @ ASU",
                "Open to opportunities",
              ].map(tag => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-surface-alt text-text-secondary bg-bg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right � photo */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Offset decorative block */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-accent/30"
                aria-hidden="true"
              />
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden bg-surface-alt">
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
