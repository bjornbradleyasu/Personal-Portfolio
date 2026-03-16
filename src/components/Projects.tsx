import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section3D from './Section3D'
import { projects } from '../content/projects'

const Projects: React.FC = () => {
  return (
    <Section3D sectionId="projects">
      <div className="text-center mb-14">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg mb-4">Projects</h2>
        <p className="text-lg text-fg/70 max-w-2xl mx-auto">
          Selected work spanning VR, music tech, and interactive experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Link
              to={`/projects/${project.id}`}
              className="group flex flex-col h-full rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-accent-sky/40 transition-all duration-300 overflow-hidden"
            >
              {/* Accent bar — reveals on hover */}
              <div className="h-[2px] w-full bg-gradient-to-r from-accent-sky via-accent-cyan to-accent-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-fg mb-3 group-hover:text-accent-sky transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-fg/60 leading-relaxed mb-6">
                  {project.problemStatement}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.slice(0, 5).map(tech => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-fg/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-fg/40">
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-sm text-accent-sky flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200 font-medium">
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  {project.githubUrl && (
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
                      }}
                      className="text-fg/40 hover:text-fg/80 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section3D>
  )
}

export default Projects
