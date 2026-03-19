import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

const fiveCardLayout = [
  "md:col-span-2 lg:col-span-8",
  "md:col-span-1 lg:col-span-4",
  "md:col-span-1 lg:col-span-4",
  "md:col-span-1 lg:col-span-4",
  "md:col-span-1 lg:col-span-4",
]

const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()
  const isFiveCardSet = projects.length === 5

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

        {/* Grid optimized for a 5-project set: strong lead card + balanced supporting row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              isHero={isFiveCardSet && i === 0}
              className={
                isFiveCardSet
                  ? fiveCardLayout[i] ?? "md:col-span-1 lg:col-span-4"
                  : "md:col-span-1 lg:col-span-6 xl:col-span-4"
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
