import React from 'react'

interface Section3DProps {
  sectionId: string
  className?: string
  children: React.ReactNode
}

const Section3D: React.FC<Section3DProps> = ({ sectionId, className = '', children }) => {
  return (
    <section id={sectionId} className={className}>
      {children}
    </section>
  )
}

export default Section3D
