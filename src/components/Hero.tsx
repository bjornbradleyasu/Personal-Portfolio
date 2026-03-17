import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import AudioVisualizer from "./AudioVisualizer"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const itemVariants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg"
    >
      {/* Right-side abstract figure to fill negative space */}
      <motion.div
        {...(shouldReduceMotion
          ? { initial: { opacity: 1 } }
          : {
              initial: { opacity: 0, x: 40 },
              animate: { opacity: 1, x: 0, y: [0, -8, 0] },
              transition: { duration: 1.1, ease: "easeOut", y: { duration: 6, repeat: Infinity, ease: "easeInOut" } },
            }
        )}
        className="absolute right-[-10%] md:right-[-4%] lg:right-[2%] top-[12%] md:top-[7%] lg:top-[5%] w-[31rem] h-[31rem] md:w-[38rem] md:h-[38rem] lg:w-[44rem] lg:h-[44rem] pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-surface/90 via-surface-alt/58 to-transparent border border-surface-alt/85" />
        <div className="absolute inset-[11%] rounded-full border border-surface-alt/90" />
        <div className="absolute inset-[24%] rounded-full border border-surface-alt/80" />
        <div className="absolute inset-[37%] rounded-full border border-accent/35" />

        <motion.div
          {...(shouldReduceMotion ? {} : { animate: { rotate: 360 }, transition: { duration: 48, repeat: Infinity, ease: "linear" } })}
          className="absolute inset-[8%]"
        >
          <div className="absolute left-[7%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent/60" />
          <div className="absolute right-[9%] top-[36%] w-1.5 h-1.5 rounded-full bg-text-secondary/35" />
        </motion.div>

        <div
          className="absolute inset-[43%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,107,47,0.22) 0%, rgba(212,107,47,0.08) 42%, rgba(212,107,47,0) 72%)",
            boxShadow: "0 0 90px rgba(212,107,47,0.18)",
          }}
        />
      </motion.div>

      {/* Audio visualizer � decorative background element */}
      <div className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none select-none" aria-hidden="true">
        <AudioVisualizer opacity={0.45} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-40 w-full">
        <motion.div
          {...(shouldReduceMotion
            ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
            : { variants: containerVariants, initial: 'hidden', animate: 'visible' }
          )}
          className="max-w-3xl"
        >
          <motion.span
            {...(shouldReduceMotion ? {} : { variants: itemVariants })}
            className="section-label"
          >
            Portfolio — Media &amp; Technology
          </motion.span>

          <motion.h1
            {...(shouldReduceMotion ? {} : { variants: itemVariants })}
            className="font-display font-extrabold text-[clamp(3rem,10vw,6rem)] leading-[0.95] text-text-primary mt-4 mb-6 tracking-tight"
          >
            Bjorn
            <br />
            Bradley
          </motion.h1>

          <motion.p
            {...(shouldReduceMotion ? {} : { variants: itemVariants })}
            className="font-body text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mb-10"
          >
            Media designer &amp; developer. I build things that look good and feel alive.
          </motion.p>

          <motion.div
            {...(shouldReduceMotion ? {} : { variants: itemVariants })}
            className="flex flex-wrap gap-4"
          >
            <button onClick={() => scrollTo("projects")} className="btn-primary">
              View Work
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-outline">
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] text-text-secondary/60 tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          {...(shouldReduceMotion ? {} : { animate: { y: [0, 8, 0] }, transition: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } })}
          className="w-px h-8 bg-surface-alt"
        />
      </motion.div>
    </section>
  )
}

export default Hero
