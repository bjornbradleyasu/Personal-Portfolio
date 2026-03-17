import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="projects" className="bg-bg">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <span className="section-label">Selected Work</span>
          <div className="divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Projects
          </h2>
        </motion.div>

        {/* Grid � intentionally varied sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
