import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, ArrowRight } from "lucide-react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { projects } from "../data/projects"
import ZineImageFlipbook from "../components/ZineImageFlipbook"

// ─── Helpers ───────────────────────────────────────────────────────

/** Converts any youtu.be or youtube.com/watch URL to an embed URL, or returns null. */
function toYouTubeEmbed(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&\s]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1` : null
}

/** Renders either a YouTube iframe or a native <video> depending on the URL. */
function VideoPlayer({ src, title, poster }: { src: string; title: string; poster?: string }) {
  const embed = toYouTubeEmbed(src)
  if (embed) {
    return (
      <div className="rounded-2xl overflow-hidden max-w-6xl mx-auto aspect-video">
        <iframe
          src={embed}
          title={title}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }
  return (
    <div className="rounded-2xl overflow-hidden max-w-6xl mx-auto">
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        className="w-full block"
        aria-label={title}
      />
    </div>
  )
}

// ─── Primitives ────────────────────────────────────────────────────

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  }
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
      {children}
    </p>
  )
}



// ─── Main page ──────────────────────────────────────────────────────

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const idx        = projects.findIndex(p => p.slug === slug)
  const project    = projects[idx]
  const nextProject = projects[(idx + 1) % projects.length]
  const [heroFailed, setHeroFailed] = useState(false)
  const heroSrc    = project?.heroImage || project?.thumbnail
  const isCaseStudy = Boolean(project?.systems?.length)

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

        {/* ══════════════════════════════════════════
            CASE STUDY PATH — editorial sections
            ══════════════════════════════════════════ */}
        {isCaseStudy ? (
          <div className="-mt-24">

            {/* ═══ 1. HERO ═══════════════════════════════════════ */}
            <section className="bg-surface min-h-[70vh] flex flex-col justify-between px-6 sm:px-10 lg:px-16 xl:px-24 pt-10 pb-20">
              {/* Top bar */}
              <div className="flex items-center justify-between pt-10">
                <Link
                  to="/#projects"
                  className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> All Projects
                </Link>
                <div className="flex items-center gap-6">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent transition-colors">
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" /> Live
                    </a>
                  )}
                </div>
              </div>

              {/* Title block — centred vertically in the remaining space */}
              <div className="flex-1 flex flex-col justify-center py-12">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  {project.subtitle && (
                    <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-6">
                      {project.subtitle}
                    </p>
                  )}
                  <h1
                    className="font-display font-bold text-text-primary leading-[0.92] tracking-tight mb-8"
                    style={{ fontSize: 'clamp(4rem, 10vw, 9.5rem)' }}
                  >
                    {project.title}
                  </h1>
                  <p className="font-body text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
                    {project.shortDescription}
                  </p>
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.status && (
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent">
                        {project.status}
                      </span>
                    )}
                    {project.duration && (
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-bg border border-surface-alt text-text-secondary">
                        {project.duration}
                      </span>
                    )}
                    {project.team && (
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-bg border border-surface-alt text-text-secondary">
                        {project.team}
                      </span>
                    )}
                    <span className="text-surface-alt select-none mx-1">·</span>
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg border border-surface-alt text-text-secondary/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ═══ 2. PROBLEM + ROLE ══════════════════════════════ */}
            {(project.problem || project.contributionDetail) && (
              <section className="bg-bg border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

                  {project.problem && (
                    <motion.div {...fade()} className="relative overflow-hidden">
                      {/* Decorative faint number */}
                      <span
                        className="absolute -top-6 left-1 font-display font-bold leading-none select-none pointer-events-none"
                        style={{ fontSize: '10rem', color: 'rgba(139,58,16,0.07)', lineHeight: 1 }}
                        aria-hidden="true"
                      >
                        01
                      </span>
                      <div className="relative">
                        <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                          The Problem
                        </h2>
                        <div className="divider !mt-0 !mb-8" />
                        <p className="font-body text-xl text-text-secondary leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {project.contributionDetail && (
                    <motion.div {...fade(0.12)} className="relative overflow-hidden">
                      {/* Decorative faint number */}
                      <span
                        className="absolute -top-6 left-1 font-display font-bold leading-none select-none pointer-events-none"
                        style={{ fontSize: '10rem', color: 'rgba(139,58,16,0.07)', lineHeight: 1 }}
                        aria-hidden="true"
                      >
                        02
                      </span>
                      <div className="relative">
                        <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                          My Role
                        </h2>
                        <div className="divider !mt-0 !mb-8" />
                        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent/60 mb-5">
                          Team project · substantial individual contribution
                        </p>
                        <p className="font-body text-xl text-text-secondary leading-relaxed">
                          {project.contributionDetail}
                        </p>
                      </div>
                    </motion.div>
                  )}

                </div>
              </section>
            )}

            {/* ═══ 3. DEMO VIDEO (cinematic dark section) ════════ */}
            {project.videoDemo && (
              <section style={{ background: '#181210' }} className="px-6 sm:px-10 lg:px-16 xl:px-24 pt-14 pb-16">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: '#C47840' }}>
                  Demo
                </p>
                <p className="font-display text-2xl font-bold mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Watch it in action
                </p>
                <VideoPlayer
                  src={project.videoDemo}
                  title={`${project.title} demonstration`}
                  poster={project.thumbnail ?? undefined}
                />
              </section>
            )}

            {/* ═══ 4. FIVE SYSTEMS (card grid) ═══════════════════ */}
            {project.systems && project.systems.length > 0 && (
              <section className="bg-surface border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">
                <motion.div {...fade()} className="mb-14">
                  <SectionLabel>{project.systems.length} Systems</SectionLabel>
                  <div className="divider !mt-0 !mb-0" />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {project.systems.map((system, i) => (
                    <motion.div
                      key={system.name}
                      {...fade(i * 0.07)}
                      className="rounded-2xl border border-surface-alt bg-bg px-7 pt-6 pb-7 flex flex-col"
                    >
                      <span
                        className="font-display font-bold leading-none select-none mb-5"
                        style={{ fontSize: '4rem', color: 'rgba(139,58,16,0.10)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                        {system.name}
                      </h3>
                      <p className="font-body text-base text-text-secondary leading-relaxed flex-1 mb-4">
                        {system.description}
                      </p>
                      <p className="font-body text-sm text-text-secondary/55 leading-relaxed italic border-t border-surface-alt pt-4">
                        {system.why}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* ═══ 6. THE HARD PART (editorial pull-quote) ═══════ */}
            {project.theHardPart && (
              <section className="bg-bg border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">
                <motion.div {...fade()}>
                  <SectionLabel>The Hard Part</SectionLabel>
                  <div className="divider !mt-0 !mb-10" />
                  <blockquote className="border-l-[3px] border-accent pl-8 lg:pl-12 max-w-4xl">
                    <p className="font-body text-xl lg:text-2xl text-text-secondary leading-relaxed">
                      {project.theHardPart}
                    </p>
                  </blockquote>
                </motion.div>
              </section>
            )}

            {/* ═══ 7. OUTCOME + REFLECTION ════════════════════════ */}
            <section className="bg-surface border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-24 lg:py-32">
              <div className={`grid grid-cols-1 ${project.reflection ? 'lg:grid-cols-2' : ''} gap-16 lg:gap-28`}>

                <motion.div {...fade()} className="relative overflow-hidden">
                  <span
                    className="absolute -top-6 left-1 font-display font-bold leading-none select-none pointer-events-none"
                    style={{ fontSize: '10rem', color: 'rgba(139,58,16,0.07)', lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    03
                  </span>
                  <div className="relative">
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                      Outcome
                    </h2>
                    <div className="divider !mt-0 !mb-8" />
                    <p className="font-body text-xl text-text-secondary leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </motion.div>

                {project.reflection && (
                  <motion.div {...fade(0.12)} className="relative overflow-hidden">
                    <span
                      className="absolute -top-6 left-1 font-display font-bold leading-none select-none pointer-events-none"
                      style={{ fontSize: '10rem', color: 'rgba(139,58,16,0.07)', lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      04
                    </span>
                    <div className="relative">
                      <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                        Reflection
                      </h2>
                      <div className="divider !mt-0 !mb-8" />
                      <p className="font-body text-xl text-text-secondary leading-relaxed">
                        {project.reflection}
                      </p>
                    </div>
                  </motion.div>
                )}

              </div>
            </section>

            {/* ═══ 8. SCREENSHOTS ══════════════════════════════════ */}
            {project.screenshots.length > 0 && (
              <section className="bg-bg border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-24">
                <motion.div {...fade()} className="mb-10">
                  <SectionLabel>Screenshots</SectionLabel>
                  <div className="divider !mt-0 !mb-0" />
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {project.screenshots.map((src, i) => (
                    <motion.div
                      key={i}
                      {...fade(i * 0.1)}
                      className="rounded-xl overflow-hidden border border-surface-alt"
                    >
                      <div className="aspect-[16/10]">
                        <img
                          src={src}
                          alt={project.screenshotCaptions?.[i] ?? `Screenshot ${i + 1}`}
                          className="w-full h-full object-cover block"
                        />
                      </div>
                      {project.screenshotCaptions?.[i] && (
                        <p className="font-mono text-[10px] tracking-widest uppercase text-text-secondary/60 text-center py-2 bg-surface">
                          {project.screenshotCaptions[i]}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* ═══ 9. NEXT PROJECT ════════════════════════════════ */}
            {nextProject && nextProject.slug !== project.slug && (
              <section className="bg-bg border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-20">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-secondary/40 mb-5">
                  Next Project
                </p>
                <Link
                  to={`/projects/${nextProject.slug}`}
                  className="group inline-flex items-center gap-5 font-display font-bold text-text-primary hover:text-accent transition-colors"
                  style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: 1 }}
                >
                  {nextProject.title}
                  <ArrowRight
                    className="group-hover:translate-x-3 transition-transform duration-200 shrink-0"
                    style={{ width: 'clamp(1.5rem, 3vw, 2.5rem)', height: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                  />
                </Link>
              </section>
            )}

          </div>

        ) : (

          /* ══════════════════════════════════════════
              LEGACY PATH — editorial sections
             ══════════════════════════════════════════ */
          (() => {
            const galleryImages = project.screenshots.length > 0
              ? project.screenshots
              : (project.thumbnailGrid ?? [])
            return (
              <div className="-mt-24">

                {/* ═══ HERO ══════════════════════════════════════════ */}
                <section className="bg-surface min-h-[70vh] flex flex-col justify-between px-6 sm:px-10 lg:px-16 xl:px-24 pt-10 pb-20">
                  <div className="flex items-center justify-between pt-10">
                    <Link
                      to="/#projects"
                      className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> All Projects
                    </Link>
                    <div className="flex items-center gap-6">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent transition-colors">
                          <Github className="w-3.5 h-3.5" /> GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" /> Live
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center py-12">
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                      {project.subtitle && (
                        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-6">
                          {project.subtitle}
                        </p>
                      )}
                      <h1
                        className="font-display font-bold text-text-primary leading-[0.92] tracking-tight mb-8"
                        style={{ fontSize: 'clamp(4rem, 10vw, 9.5rem)' }}
                      >
                        {project.title}
                      </h1>
                      <p className="font-body text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.status && (
                          <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent">
                            {project.status}
                          </span>
                        )}
                        {project.duration && (
                          <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-bg border border-surface-alt text-text-secondary">
                            {project.duration}
                          </span>
                        )}
                        {project.team && (
                          <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-bg border border-surface-alt text-text-secondary">
                            {project.team}
                          </span>
                        )}
                        <span className="text-surface-alt select-none mx-1">·</span>
                        {project.tags.map(tag => (
                          <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg border border-surface-alt text-text-secondary/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* ═══ HERO IMAGE (if present, no zine, no video) ════ */}
                {heroSrc && !heroFailed && !(project.zineImages?.length) && !project.videoDemo && (
                  <section className="bg-bg px-6 sm:px-10 lg:px-16 xl:px-24 py-8 lg:py-12">
                    <div className="rounded-2xl overflow-hidden max-w-5xl mx-auto border border-surface-alt">
                      <img
                        src={heroSrc}
                        alt={project.title}
                        className="w-full block"
                        onError={() => setHeroFailed(true)}
                      />
                    </div>
                  </section>
                )}

                {/* ═══ OVERVIEW + MY ROLE ════════════════════════════ */}
                {(project.overview || project.role) && (
                  <section className="bg-bg border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-24 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
                      {project.overview && (
                        <motion.div {...fade()} className="relative overflow-hidden">
                          <span
                            className="absolute -top-6 left-1 font-display font-bold leading-none select-none pointer-events-none"
                            style={{ fontSize: '10rem', color: 'rgba(139,58,16,0.07)', lineHeight: 1 }}
                            aria-hidden="true"
                          >
                            01
                          </span>
                          <div className="relative">
                            <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                              Overview
                            </h2>
                            <div className="divider !mt-0 !mb-8" />
                            <p className="font-body text-xl text-text-secondary leading-relaxed">
                              {project.overview}
                            </p>
                          </div>
                        </motion.div>
                      )}
                      {project.role && (
                        <motion.div {...fade(0.12)} className="relative overflow-hidden">
                          <span
                            className="absolute -top-6 left-1 font-display font-bold leading-none select-none pointer-events-none"
                            style={{ fontSize: '10rem', color: 'rgba(139,58,16,0.07)', lineHeight: 1 }}
                            aria-hidden="true"
                          >
                            02
                          </span>
                          <div className="relative">
                            <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                              My Role
                            </h2>
                            <div className="divider !mt-0 !mb-8" />
                            <p className="font-body text-xl text-text-secondary leading-relaxed">
                              {project.role}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </section>
                )}

                {/* ═══ PROJECT SNAPSHOT ══════════════════════════════ */}
                {project.projectSnapshot && project.projectSnapshot.length > 0 && (
                  <section className="bg-surface border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">
                    <motion.div {...fade()} className="mb-14">
                      <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                        Project Snapshot
                      </h2>
                      <div className="divider !mt-0 !mb-0" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {project.projectSnapshot.map((item, i) => (
                        <motion.div
                          key={item.label}
                          {...fade(i * 0.06)}
                          className="rounded-2xl border border-surface-alt bg-bg px-7 py-6"
                        >
                          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent/60 mb-3">
                            {item.label}
                          </p>
                          <p className="font-body text-base text-text-primary leading-relaxed">
                            {item.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* ═══ KEY CONTRIBUTIONS ═════════════════════════════ */}
                {project.keyContributions && project.keyContributions.length > 0 && (
                  <section className="bg-bg border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">
                    <motion.div {...fade()} className="mb-12">
                      <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                        Key Contributions
                      </h2>
                      <div className="divider !mt-0 !mb-0" />
                    </motion.div>
                    <ul className="space-y-6 max-w-4xl">
                      {project.keyContributions.map((item, i) => (
                        <motion.li
                          key={i}
                          {...fade(i * 0.05)}
                          className="flex items-start gap-5"
                        >
                          <span className="font-mono text-xs text-accent/40 pt-1 w-6 shrink-0 select-none">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <p className="font-body text-lg text-text-secondary leading-relaxed">
                            {item}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* ═══ RESEARCH FOCUS + BUILD TRACKS ════════════════ */}
                {(project.researchFocus?.length || project.buildTracks?.length) && (
                  <section className="bg-surface border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">
                    <div className={`grid grid-cols-1 ${project.researchFocus?.length && project.buildTracks?.length ? 'lg:grid-cols-2' : ''} gap-16 lg:gap-28`}>
                      {project.researchFocus && project.researchFocus.length > 0 && (
                        <motion.div {...fade()}>
                          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                            Research Questions
                          </h2>
                          <div className="divider !mt-0 !mb-8" />
                          <ul className="space-y-5">
                            {project.researchFocus.map((q, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <span className="font-mono text-xs text-accent/40 pt-1 w-5 shrink-0 select-none">?</span>
                                <p className="font-body text-lg text-text-secondary leading-relaxed">{q}</p>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                      {project.buildTracks && project.buildTracks.length > 0 && (
                        <motion.div {...fade(0.1)}>
                          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                            Build Tracks
                          </h2>
                          <div className="divider !mt-0 !mb-8" />
                          <ul className="space-y-5">
                            {project.buildTracks.map((track, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <span className="font-mono text-xs text-accent/40 pt-1 w-5 shrink-0 select-none">
                                  {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="font-body text-lg text-text-secondary leading-relaxed">{track}</p>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </section>
                )}

                {/* ═══ ZINE ══════════════════════════════════════════ */}
                {project.zineImages && project.zineImages.length > 0 && (
                  <section className="bg-bg border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-24">
                    <motion.div {...fade()} className="mb-10">
                      <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                        {project.zineTitle ?? 'The Publication'}
                      </h2>
                      <div className="divider !mt-0 !mb-0" />
                    </motion.div>
                    <ZineImageFlipbook
                      pages={project.zineImages}
                      {...(project.zineTitle ? { title: project.zineTitle } : {})}
                    />
                  </section>
                )}

                {/* ═══ INTERACTIVE DEMO (dark) ═══════════════════════ */}
                {(project.embedUrl || project.embedDescription) && (
                  <section style={{ background: '#181210' }} className="px-6 sm:px-10 lg:px-16 xl:px-24 pt-14 pb-16">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: '#C47840' }}>
                      Interactive Demo
                    </p>
                    <p className="font-display text-2xl font-bold mb-3" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {project.embedTitle ?? 'Live Dashboard'}
                    </p>
                    {project.embedDescription && (
                      <p className="font-body text-base mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        {project.embedDescription}
                      </p>
                    )}
                    {project.embedUrl && !project.embedUrl.includes('powerbi.com') ? (
                      <div className="rounded-2xl overflow-hidden max-w-5xl mx-auto">
                        <div className="aspect-[16/10] bg-white">
                          <iframe
                            src={project.embedUrl}
                            title={project.embedTitle ?? project.title}
                            className="w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ) : project.embedUrl?.includes('powerbi.com') && project.liveUrl ? (
                      /* Power BI — public embed requires auth, show preview + link */
                      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden relative group">
                        <img
                          src={project.thumbnail}
                          alt={project.embedTitle ?? 'Dashboard preview'}
                          className="w-full block"
                        />
                        <div className="absolute inset-0 flex items-end justify-start p-6"
                             style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full transition-colors"
                            style={{ background: 'rgba(255,255,255,0.92)', color: '#1a1410' }}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Open Dashboard
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-dashed max-w-5xl px-8 py-10" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                        <p className="font-body text-base" style={{ color: 'rgba(255,255,255,0.3)' }}>Live embed coming soon.</p>
                      </div>
                    )}
                  </section>
                )}

                {/* ═══ VIDEO (cinematic dark) ════════════════════════ */}
                {project.videoDemo && (
                  <section style={{ background: '#181210' }} className="px-6 sm:px-10 lg:px-16 xl:px-24 pt-14 pb-16">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: '#C47840' }}>
                      Demo
                    </p>
                    <p className="font-display text-2xl font-bold mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      Watch it in action
                    </p>
                    <VideoPlayer
                      src={project.videoDemo}
                      title={`${project.title} demonstration`}
                      poster={project.thumbnail ?? undefined}
                    />
                  </section>
                )}

                {/* ═══ OUTCOME ══════════════════════════════════════ */}
                {project.outcome && (
                  <section className="bg-surface border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-24 lg:py-32">
                    <motion.div {...fade()} className="relative overflow-hidden">
                      <span
                        className="absolute -top-6 left-1 font-display font-bold leading-none select-none pointer-events-none"
                        style={{ fontSize: '10rem', color: 'rgba(139,58,16,0.07)', lineHeight: 1 }}
                        aria-hidden="true"
                      >
                        03
                      </span>
                      <div className="relative max-w-4xl">
                        <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                          Outcome
                        </h2>
                        <div className="divider !mt-0 !mb-8" />
                        <p className="font-body text-xl text-text-secondary leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>
                    </motion.div>
                  </section>
                )}

                {/* ═══ SCREENSHOTS / GALLERY ════════════════════════ */}
                {galleryImages.length > 0 && (
                  <section className="bg-bg border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-24">
                    <motion.div {...fade()} className="mb-10">
                      <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
                        {project.thumbnailGrid?.length && !project.screenshots.length ? 'Gallery' : 'Screenshots'}
                      </h2>
                      <div className="divider !mt-0 !mb-0" />
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                      {galleryImages.map((src, i) => (
                        <motion.div
                          key={i}
                          {...fade(i * 0.07)}
                          className="rounded-xl overflow-hidden border border-surface-alt"
                        >
                          <div className="aspect-[16/10]">
                            <img
                              src={src}
                              alt={project.screenshotCaptions?.[i] ?? `Image ${i + 1}`}
                              className="w-full h-full object-cover block"
                            />
                          </div>
                          {project.screenshotCaptions?.[i] && (
                            <p className="font-mono text-[10px] tracking-widest uppercase text-text-secondary/60 text-center py-2 bg-surface">
                              {project.screenshotCaptions[i]}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* ═══ NEXT PROJECT ══════════════════════════════════ */}
                {nextProject && nextProject.slug !== project.slug && (
                  <section className="bg-bg border-t border-surface-alt px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-20">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-secondary/40 mb-5">
                      Next Project
                    </p>
                    <Link
                      to={`/projects/${nextProject.slug}`}
                      className="group inline-flex items-center gap-5 font-display font-bold text-text-primary hover:text-accent transition-colors"
                      style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: 1 }}
                    >
                      {nextProject.title}
                      <ArrowRight
                        className="group-hover:translate-x-3 transition-transform duration-200 shrink-0"
                        style={{ width: 'clamp(1.5rem, 3vw, 2.5rem)', height: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                      />
                    </Link>
                  </section>
                )}

              </div>
            )
          })()
        )}
      </main>

      <Footer />
    </div>
  )
}

export default ProjectPage
