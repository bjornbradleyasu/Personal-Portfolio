import React from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, ArrowRight } from "lucide-react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { projects } from "../data/projects"
import ZineImageFlipbook from "../components/ZineImageFlipbook"

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const idx = projects.findIndex(p => p.slug === slug)
  const project = projects[idx]
  const nextProject = projects[(idx + 1) % projects.length]

  if (!project) {
    return (
      <div className="min-h-screen bg-bg flex flex-col">
        <NavBar />
        <main className="flex-1 flex items-center justify-center">
          <p className="font-body text-text-secondary">Project not found.</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <NavBar />

      <main id="main-content" className="flex-1 pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          {/* Back link */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>

          {/* Hero area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface border border-surface-alt text-text-secondary">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
              {project.title}
            </h1>
            <p className="font-body text-xl text-text-secondary leading-relaxed mb-6">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="btn-outline !py-2 !px-4 text-sm">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="btn-primary !py-2 !px-4 text-sm">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* Thumbnail / media */}
          {project.thumbnail && !(project.zineImages && project.zineImages.length > 0) && (
            <div className="rounded-2xl overflow-hidden bg-surface-alt mb-12 aspect-video">
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Zine viewer */}
          {project.zineImages && project.zineImages.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-12"
            >
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                Interactive Reading
              </p>
              <div className="divider !mt-0 !mb-4" />
              <ZineImageFlipbook
                pages={project.zineImages}
                {...(project.zineTitle ? { title: project.zineTitle } : {})}
              />
            </motion.section>
          )}

          {/* Interactive embed */}
          {(project.embedUrl || project.embedDescription) && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-12"
            >
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                Interactive Demo
              </p>
              <div className="divider !mt-0 !mb-4" />
              {project.embedTitle && (
                <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3">
                  {project.embedTitle}
                </h2>
              )}
              {project.embedDescription && (
                <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
                  {project.embedDescription}
                </p>
              )}

              {project.embedUrl ? (
                <div className="rounded-2xl overflow-hidden border border-surface-alt bg-surface shadow-[0_18px_60px_rgba(26,20,16,0.08)]">
                  <div className="aspect-[16/10] bg-white">
                    <iframe
                      src={project.embedUrl}
                      title={project.embedTitle ?? `${project.title} interactive embed`}
                      className="w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-surface-alt bg-surface px-6 py-8">
                  <p className="font-body text-base text-text-secondary leading-relaxed">
                    The project page is ready for a live embed. Add the Power BI publish-to-web iframe URL to this project entry and the dashboard will render here.
                  </p>
                </div>
              )}
            </motion.section>
          )}

          {/* Case study sections */}
          <div className="space-y-12">
            {[
              { label: "Overview",      content: project.overview },
              { label: "My Role",       content: project.role    },
              { label: "Outcome",       content: project.outcome },
            ].map(({ label, content }) => (
              <motion.section
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                  {label}
                </p>
                <div className="divider !mt-0 !mb-4" />
                <p className="font-body text-lg text-text-secondary leading-relaxed">
                  {content}
                </p>
              </motion.section>
            ))}
          </div>

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-surface-alt aspect-video">
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Next project */}
          {nextProject && nextProject.slug !== project.slug && (
            <div className="mt-20 pt-10 border-t border-surface-alt">
              <p className="font-mono text-xs tracking-widest uppercase text-text-secondary/60 mb-2">Next Project</p>
              <Link
                to={"/projects/" + nextProject.slug}
                className="group inline-flex items-center gap-3 font-display text-2xl font-bold text-text-primary hover:text-accent transition-colors"
              >
                {nextProject.title}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProjectPage
