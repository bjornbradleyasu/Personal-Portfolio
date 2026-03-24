import React, { useState } from "react"
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
  const [heroImageFailed, setHeroImageFailed] = useState(false)
  const heroImageSrc = project?.heroImage || project?.thumbnail

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
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {project.status && (
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent">
                  {project.status}
                </span>
              )}
              {project.duration && (
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full bg-surface border border-surface-alt text-text-secondary">
                  {project.duration}
                </span>
              )}
              {project.team && (
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full bg-surface border border-surface-alt text-text-secondary">
                  {project.team}
                </span>
              )}
            </div>
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

          {/* Structured case-study blocks */}
          {(project.projectSnapshot?.length || project.keyContributions?.length || project.researchFocus?.length || project.buildTracks?.length) && (
            <div className="space-y-10 mb-12">
              {project.projectSnapshot && project.projectSnapshot.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                    Project Snapshot
                  </p>
                  <div className="divider !mt-0 !mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.projectSnapshot.map((item) => (
                      <div key={item.label} className="rounded-xl border border-surface-alt bg-surface/65 px-4 py-4">
                        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-secondary/70 mb-2">
                          {item.label}
                        </p>
                        <p className="font-body text-sm md:text-base text-text-primary leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {project.keyContributions && project.keyContributions.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                    Key Contributions
                  </p>
                  <div className="divider !mt-0 !mb-4" />
                  <ul className="space-y-3">
                    {project.keyContributions.map((item, i) => (
                      <li key={`${item}-${i}`} className="flex items-start gap-3 font-body text-base text-text-secondary leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {(project.researchFocus?.length || project.buildTracks?.length) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.researchFocus && project.researchFocus.length > 0 && (
                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                        Research Focus
                      </p>
                      <div className="divider !mt-0 !mb-4" />
                      <ul className="space-y-3">
                        {project.researchFocus.map((item, i) => (
                          <li key={`${item}-${i}`} className="flex items-start gap-3 font-body text-sm md:text-base text-text-secondary leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/80 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.section>
                  )}

                  {project.buildTracks && project.buildTracks.length > 0 && (
                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                        Active Build Tracks
                      </p>
                      <div className="divider !mt-0 !mb-4" />
                      <ul className="space-y-3">
                        {project.buildTracks.map((item, i) => (
                          <li key={`${item}-${i}`} className="flex items-start gap-3 font-body text-sm md:text-base text-text-secondary leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-text-secondary/55 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.section>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Thumbnail / media */}
          {!(project.zineImages && project.zineImages.length > 0) && (
            <div className="rounded-2xl overflow-hidden bg-surface-alt mb-12 aspect-video">
              {heroImageSrc && !heroImageFailed ? (
                <img
                  src={heroImageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={() => setHeroImageFailed(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-surface-alt via-surface to-bg flex flex-col items-center justify-center gap-3">
                  <p className="font-mono text-xs tracking-[0.22em] uppercase text-accent/75">Project Visual</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-text-secondary/55 text-center px-6">
                    {project.title}
                  </h2>
                  <p className="font-body text-sm text-text-secondary/70">No original project images available</p>
                </div>
              )}
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

          {/* Video demo */}
          {project.videoDemo && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-12"
            >
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                Prototype Demo
              </p>
              <div className="divider !mt-0 !mb-4" />
              <div className="rounded-2xl overflow-hidden bg-surface-alt border border-surface-alt">
                <video
                  src={project.videoDemo}
                  controls
                  playsInline
                  className="w-full"
                  aria-label={`${project.title} prototype demonstration`}
                />
              </div>
            </motion.section>
          )}

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <div className="mt-12">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">Process Snapshots</p>
              <div className="divider !mt-0 !mb-4" />
              <div className="grid grid-cols-3 gap-4">
                {project.screenshots.map((src, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="rounded-xl overflow-hidden bg-surface-alt aspect-square">
                      <img src={src} alt={project.screenshotCaptions?.[i] ?? `${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                    {project.screenshotCaptions?.[i] && (
                      <p className="font-mono text-[10px] tracking-widest uppercase text-text-secondary/70 text-center">
                        {project.screenshotCaptions[i]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
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
