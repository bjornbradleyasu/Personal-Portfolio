import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Code2 } from 'lucide-react'
import { projects } from '../content/projects'

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen bg-bg text-fg flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-fg/50 text-lg">Project not found.</p>
          <Link to="/" className="text-accent-sky hover:text-accent-cyan transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Minimal top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-fg/60 hover:text-fg transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-2 text-fg/60">
            <Code2 className="w-4 h-4 text-accent-sky" />
            <span className="font-display text-sm font-medium text-fg">Bjorn Bradley</span>
          </div>
        </div>
      </header>

      {/* Hero band */}
      <div className="pt-14">
        <div className="relative overflow-hidden border-b border-white/10 py-24 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-sky/5 via-transparent to-accent-indigo/5 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="h-0.5 w-16 bg-gradient-to-r from-accent-sky to-accent-cyan mb-8 rounded-full" />
            <h1 className="font-display text-4xl md:text-6xl font-bold text-fg mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-accent-sky text-lg font-medium mb-8">{project.role}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded-full bg-accent-sky/10 border border-accent-sky/20 text-accent-sky"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Body */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* Problem Statement */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-fg/30 mb-3">The Problem</p>
            <p className="text-fg/70 leading-relaxed text-lg max-w-3xl">{project.problemStatement}</p>
          </motion.section>

          <div className="border-t border-white/5" />

          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-fg/30 mb-3">Overview</p>
            <p className="text-fg/70 leading-relaxed text-lg max-w-3xl">{project.description}</p>
          </motion.section>

          <div className="border-t border-white/5" />

          {/* Highlights + Constraints */}
          {(project.highlights.length > 0 || project.constraints.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-12"
            >
              {project.highlights.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-fg/30 mb-4">Highlights</p>
                  <ul className="space-y-3">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-fg/70 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-sky flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.constraints.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-fg/30 mb-4">Constraints</p>
                  <ul className="space-y-3">
                    {project.constraints.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-fg/70 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-indigo flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}

          {/* Links */}
          {(project.githubUrl || project.liveUrl) && (
            <>
              <div className="border-t border-white/5" />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-4"
              >
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" /> View on GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </motion.div>
            </>
          )}

          {/* Bottom back link */}
          <div className="pt-4 border-t border-white/5">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-fg/40 hover:text-fg/80 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
