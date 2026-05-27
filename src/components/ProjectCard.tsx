import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
  /** When true the image sits on the right instead of the left */
  imageRight?: boolean
}

function Thumbnail({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const hasThumbnail = Boolean(project.thumbnail) && !imageFailed
  const hasGrid = Boolean(project.thumbnailGrid?.length)

  if (hasThumbnail) {
    return (
      <img
        src={project.thumbnail}
        alt={`${project.title} preview`}
        className="w-full h-full object-cover"
        onError={() => setImageFailed(true)}
      />
    )
  }

  if (hasGrid) {
    return (
      <div className="w-full h-full grid grid-cols-3 grid-rows-2">
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
    )
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-surface-alt via-surface to-bg flex flex-col items-center justify-center gap-2">
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent/60">
        No preview
      </span>
      <span className="font-display text-5xl font-bold text-text-secondary/20 leading-none select-none">
        {project.title[0]}
      </span>
    </div>
  )
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
  imageRight = false,
}) => {
  const shouldReduceMotion = useReducedMotion()
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.07 }}
      className="group flex flex-col md:flex-row rounded-2xl overflow-hidden border border-surface-alt bg-surface md:h-[320px]"
    >
      {/* ── Image pane ── */}
      <div
        className={`relative w-full h-48 md:h-full md:w-2/5 flex-shrink-0 bg-surface-alt overflow-hidden ${
          imageRight ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <Thumbnail project={project} />

        {/* Hover overlay with "View" CTA */}
        <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/50 transition-colors duration-300 flex items-center justify-center">
          <Link
            to={`/projects/${project.slug}`}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 px-5 py-2.5 bg-white rounded-full font-body font-medium text-sm text-text-primary hover:bg-accent hover:text-white transition-colors"
          >
            View project <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ── Info pane ── */}
      <div
        className={`flex flex-col justify-between p-8 flex-1 ${
          imageRight ? 'md:order-1' : 'md:order-2'
        }`}
      >
        {/* Top: number + title + description */}
        <div>
          <span className="font-mono text-xs text-accent/70 tracking-widest mb-3 block">
            {num}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="font-body text-base text-text-secondary leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Bottom: tags + links */}
        <div className="mt-6 pt-5 border-t border-surface-alt">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 5).map(tag => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-bg border border-surface-alt text-text-secondary"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-bg border border-surface-alt text-text-secondary/50">
                +{project.tags.length - 5}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <Link
              to={`/projects/${project.slug}`}
              className="font-body text-sm font-medium text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
            >
              Read more <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-3 ml-auto">
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
      </div>
    </motion.article>
  )
}

export default ProjectCard
