import React from 'react'
import { motion } from 'framer-motion'
import { useScene3D } from '../contexts/Scene3DContext'
import { type GeometryConfig } from '../config/scene3DConfig'

/**
 * Section3D Component - Reusable 3D background for any section
 * 
 * CUSTOMIZABLE ELEMENTS:
 * - Geometry types and positions
 * - Material properties and colors
 * - Animation patterns and speeds
 * - Lighting setup
 * - Interaction controls
 * - Performance settings
 */

interface Section3DProps {
  sectionId: string
  children: React.ReactNode
  className?: string
  // Retain optional props for API compatibility; unused now that 3D is disabled
  geometries?: GeometryConfig[]
  enableControls?: boolean
  enableParticles?: boolean
  particleCount?: number
  lighting?: {
    ambient?: { intensity: number; color?: string }
    directional?: { intensity: number; position: [number, number, number]; color?: string }
    point?: { intensity: number; position: [number, number, number]; color?: string }
  }
  quality?: 'low' | 'medium' | 'high'
}

// Lightweight Section component – 3D visuals removed for performance
const Section3D: React.FC<Section3DProps> = ({
  sectionId,
  children,
  className = ''
}) => {
  const { setActiveSection } = useScene3D()
  const isHero = sectionId === 'hero'
  
  return (
    <section id={sectionId} className={`section-padding relative ${className}`}>
      {isHero ? (
        // Hero section: bypass container constraints to allow full-width layout
        <div
          className="relative"
          onMouseEnter={() => setActiveSection(sectionId)}
          onMouseLeave={() => setActiveSection(null)}
        >
          {children}
        </div>
      ) : (
        // Other sections: use standard container
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="container max-w-6xl mx-auto relative"
          onMouseEnter={() => setActiveSection(sectionId)}
          onMouseLeave={() => setActiveSection(null)}
        >
          {children}
        </motion.div>
      )}
    </section>
  )
}

// Export the Section3D component
export default Section3D
