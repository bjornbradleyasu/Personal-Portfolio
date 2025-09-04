import React, { useEffect, useState } from 'react'

interface ScrollSpyProps {
  sectionIds: string[]
  onSectionChange: (id: string) => void
}

const ScrollSpy: React.FC<ScrollSpyProps> = ({ sectionIds, onSectionChange }) => {
  const [, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          setActiveSection(id)
          onSectionChange(id)
        }
      })
    }, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds, onSectionChange])

  return null
}

export default ScrollSpy 