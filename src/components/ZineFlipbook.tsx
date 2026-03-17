import React, { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"
import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

interface ZineFlipbookProps {
  pdfUrl: string
  pageCount: number
  title?: string
}

const ZineFlipbook: React.FC<ZineFlipbookProps> = ({ pdfUrl, pageCount, title }) => {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(1)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [containerWidth, setContainerWidth] = useState(900)
  const [detectedPages, setDetectedPages] = useState<number | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current
    const ro = new ResizeObserver(entries => {
      const width = entries[0]?.contentRect.width ?? 900
      setContainerWidth(width)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const totalPages = useMemo(() => detectedPages ?? pageCount, [detectedPages, pageCount])

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages)
    }
  }, [page, totalPages])

  const canGoPrev = page > 1
  const canGoNext = page < totalPages

  const goPrev = () => {
    if (!canGoPrev) return
    setDirection(-1)
    setPage(p => p - 1)
  }

  const goNext = () => {
    if (!canGoNext) return
    setDirection(1)
    setPage(p => p + 1)
  }

  const motionProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      }
    : {
        initial: {
          opacity: 0,
          rotateY: direction > 0 ? 18 : -18,
          x: direction > 0 ? 16 : -16,
          transformPerspective: 1200,
        },
        animate: {
          opacity: 1,
          rotateY: 0,
          x: 0,
          transformPerspective: 1200,
        },
        exit: {
          opacity: 0,
          rotateY: direction > 0 ? -18 : 18,
          x: direction > 0 ? -16 : 16,
          transformPerspective: 1200,
        },
        transition: { duration: 0.42, ease: "easeInOut" as const },
      }

  return (
    <section className="rounded-2xl border border-surface-alt bg-surface p-4 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">
            Zine Reader
          </p>
          <p className="font-display text-xl md:text-2xl font-bold text-text-primary inline-flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            {title ?? "Research Zine"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            className="btn-outline !py-2 !px-3 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs text-text-secondary min-w-[92px] text-center">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            className="btn-outline !py-2 !px-3 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div ref={containerRef} className="relative rounded-xl overflow-hidden bg-white border border-surface-alt shadow-[0_14px_50px_rgba(26,20,16,0.08)]">
        <div className="aspect-[4/3] md:aspect-[16/10] flex items-center justify-center p-2 md:p-3">
          {loadError ? (
            <div className="px-6 text-center">
              <p className="font-body text-sm text-text-secondary">
                Could not load this zine page. You can still open the file directly:
              </p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-3 btn-outline !py-2 !px-4"
              >
                Open PDF
              </a>
            </div>
          ) : (
            <Document
              file={pdfUrl}
              onLoadSuccess={({ numPages }) => {
                setDetectedPages(numPages)
                setLoadError(null)
              }}
              onLoadError={() => {
                setLoadError("failed")
              }}
              loading={<p className="font-body text-sm text-text-secondary">Loading zine...</p>}
              error={null}
              noData={<p className="font-body text-sm text-text-secondary">No zine file provided.</p>}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={page}
                  className="w-full h-full flex items-center justify-center"
                  {...motionProps}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Page
                    pageNumber={page}
                    width={Math.max(280, Math.floor(containerWidth - 24))}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={<p className="font-body text-sm text-text-secondary">Loading page...</p>}
                  />
                </motion.div>
              </AnimatePresence>
            </Document>
          )}
        </div>
      </div>
    </section>
  )
}

export default ZineFlipbook
