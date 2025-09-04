import React from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`section-padding ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  )
}

export default Section 