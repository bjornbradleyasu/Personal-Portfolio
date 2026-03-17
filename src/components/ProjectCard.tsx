import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
      {...(shouldReduceMotion ? {} : { whileHover: { y: -4, transition: { duration: 0.2 } } })}
      className="card group relative flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative bg-surface-alt aspect-[16/9] overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Placeholder gradient when no image */
          <div className="w-full h-full bg-gradient-to-br from-surface-alt to-surface flex items-center justify-center">
            <span className="font-mono text-text-secondary/40 text-sm">{project.title[0]}</span>
          </div>
        )}

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-text-primary/60 flex items-center justify-center gap-2"
        >
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full font-body font-medium text-sm text-text-primary hover:bg-accent hover:text-white transition-colors"
          >
            View Project <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-bg border border-surface-alt text-text-secondary"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-bg border border-surface-alt text-text-secondary/60">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-surface-alt">
          <Link
            to={`/projects/${project.slug}`}
            className="font-body text-sm font-medium text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
          >
            Read more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub for ${project.title}`}
                className="text-text-secondary/50 hover:text-text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="text-text-secondary/50 hover:text-text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
