import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
  className?: string
  isHero?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
  className = '',
  isHero = false,
}) => {
  const shouldReduceMotion = useReducedMotion()
  const [imageFailed, setImageFailed] = useState(false)
  const hasThumbnail = Boolean(project.thumbnail) && !imageFailed
  const hasGrid = Boolean(project.thumbnailGrid?.length)

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
      {...(shouldReduceMotion ? {} : { whileHover: { y: -4, transition: { duration: 0.2 } } })}
      className={`card group relative flex h-full flex-col ${className}`}
    >
      {/* Thumbnail */}
      <div className={`relative bg-surface-alt overflow-hidden ${isHero ? 'aspect-[16/9] lg:aspect-[18/8]' : 'aspect-[16/9]'}`}>
        {hasThumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} preview`}
            className={`w-full h-full ${project.thumbnailFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            onError={() => setImageFailed(true)}
          />
        ) : hasGrid ? (
          <div className="w-full h-full grid grid-cols-2 grid-rows-3">
            {project.thumbnailGrid!.slice(0, 6).map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-surface-alt via-surface to-bg flex flex-col items-center justify-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent/70">
              Visual Archive
            </span>
            <span className="font-display text-2xl font-bold text-text-secondary/55 leading-none">
              {project.title[0]}
            </span>
            <span className="font-body text-xs text-text-secondary/65">No project image available</span>
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
          <h3 className={`font-display font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200 leading-snug ${isHero ? 'text-2xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          <p className={`font-body text-text-secondary leading-relaxed ${isHero ? 'text-base' : 'text-sm'}`}>
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
