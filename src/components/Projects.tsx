import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="projects" className="bg-bg overflow-visible">
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
          <h2 className="font-display text-5xl md:text-6xl font-bold text-text-primary">
            Projects
          </h2>
        </motion.div>

        {/* Single-column card stack */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <div key={project.slug} className="relative">
              {/* Faint index number in left margin — desktop only */}
              <span
                className="pointer-events-none select-none hidden xl:block absolute font-display font-bold text-text-primary"
                style={{
                  fontSize: "7rem",
                  lineHeight: 1,
                  opacity: 0.045,
                  right: "calc(100% + 1.25rem)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  letterSpacing: "-0.02em",
                }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <ProjectCard
                project={project}
                index={i}
                imageRight={i % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
