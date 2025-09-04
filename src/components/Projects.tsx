import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, FileText, Eye } from 'lucide-react'
import Section3D from './Section3D'
import { projects } from '../content/projects'
import { useScrollLock } from '../hooks/useScrollLock'

/**
 * Projects Component - Displays personal projects in a responsive grid layout
 * 
 * CUSTOMIZABLE DESIGN ELEMENTS:
 * - Grid layout: Change .projects-grid in CSS to adjust columns (currently 2 for 2 projects)
 * - Card styling: Modify .project-card, .project-image-container, etc. in CSS
 * - Colors: Update color variables in src/styles/colors.css
 * - Animations: Adjust Framer Motion transition values below
 * - Tech stack display: Change the slice(0, 4) to show more/fewer tech tags
 * - Modal content: Modify the modal structure and styling in CSS
 */
const Projects: React.FC = () => {
  // State management for modal functionality
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  // Modal control functions
  const openCaseStudy = (id: string) => setSelectedProject(id)
  const closeCaseStudy = () => setSelectedProject(null)

  // Lock scroll when modal is open to prevent background scrolling
  useScrollLock(selectedProject !== null)

  return (
    <Section3D
      sectionId="projects"
    >
      {/* Section Header - Customize title and description here */}
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg mb-4">
          Personal Projects
        </h2>
        <p className="text-lg text-fg/70 max-w-2xl mx-auto">
          Selected projects showcasing my skills and passion for development
        </p>
      </div>

      {/* Project Grid - Uses CSS classes for easy customization */}
      {/* Change .projects-grid in CSS to modify layout (currently 2 columns for 2 projects) */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.button
            key={project.id}
            // Animation settings - customize duration and delay for different effects
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group text-left"
            onClick={() => openCaseStudy(project.id)}
          >
            {/* Project Card - All styling moved to CSS classes for easy customization */}
            <div className="project-card">
              {/* Project Image Container - Customize height and gradient in CSS */}
              <div className="project-image-container">
                <div className="project-image-placeholder">
                  <Eye className="w-12 h-12 mx-auto mb-2" />
                  <p>Project Image</p>
                </div>
              </div>

              {/* Project Content - Flex layout for proper card height distribution */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.problemStatement}</p>
                
                {/* Tech Stack Tags - Change slice(0, 4) to show more/fewer technologies */}
                <div className="tech-stack">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="tech-tag-more">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Actions - Links and buttons */}
              <div className="project-actions">
                <span className="case-study-link">
                  <FileText className="w-4 h-4 mr-2" />
                  Open Case Study
                </span>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Case Study Modal - All styling moved to CSS classes */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            // Modal overlay animation - customize in CSS
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="project-modal-overlay"
            onClick={closeCaseStudy}
          >
            <motion.div
              // Modal content animation - customize scale and timing
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null

                return (
                  <div className="project-modal-content">
                    {/* Modal Header */}
                    <div className="project-modal-header">
                      <h2 className="project-modal-title">{project.title}</h2>
                      <button onClick={closeCaseStudy} className="project-modal-close">✕</button>
                    </div>

                    {/* Modal Content Sections */}
                    <div className="space-y-6">
                      {/* Problem & Solution Section */}
                      <div className="project-modal-section">
                        <h3 className="project-modal-section-title">Problem & Solution</h3>
                        <p className="project-modal-text">{project.description}</p>
                      </div>
                      
                      {/* Role and Tech Stack Grid */}
                      <div className="project-modal-grid">
                        <div className="project-modal-section">
                          <h3 className="project-modal-section-title">My Role</h3>
                          <p className="project-modal-text">{project.role}</p>
                        </div>
                        <div className="project-modal-section">
                          <h3 className="project-modal-section-title">Tech Stack</h3>
                          <div className="project-modal-tech-stack">
                            {project.stack.map((tech) => (
                              <span key={tech} className="project-modal-tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Constraints Section (if any) */}
                      {project.constraints.length > 0 && (
                        <div className="project-modal-section">
                          <h3 className="project-modal-section-title">Constraints</h3>
                          <ul className="project-modal-list">
                            {project.constraints.map((c, idx) => (
                              <li key={idx} className="project-modal-list-item">
                                <div className="project-modal-bullet project-modal-bullet-sky" />
                                <span className="project-modal-text">{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Key Highlights Section */}
                      <div className="project-modal-section">
                        <h3 className="project-modal-section-title">Key Highlights</h3>
                        <ul className="project-modal-list">
                          {project.highlights.map((h, idx) => (
                            <li key={idx} className="project-modal-list-item">
                              <div className="project-modal-bullet project-modal-bullet-cyan" />
                              <span className="project-modal-text">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section3D>
  )
}

export default Projects 