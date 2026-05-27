import React, { forwardRef, useEffect, useRef, useState } from "react"
import HTMLFlipBook from "react-pageflip"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ZineImageFlipbookProps {
  pages: string[]
  title?: string
}

interface FlipPageProps {
  src: string
  pageNumber: number
  total: number
}

// ─── Single page ──────────────────────────────────────────────────────────────

const FlipPage = forwardRef<HTMLDivElement, FlipPageProps>(
  ({ src, pageNumber, total }, ref) => (
    <div ref={ref} className="relative select-none overflow-hidden" style={{ background: "#faf8f5" }}>
      <img
        src={src}
        alt={`Page ${pageNumber}`}
        className="w-full h-full object-contain block"
        draggable={false}
        loading="eager"
      />
      {/* Page number footer */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-2 pointer-events-none">
        <span
          className="font-mono"
          style={{ fontSize: "9px", letterSpacing: "0.14em", color: "rgba(74,52,34,0.35)" }}
        >
          {pageNumber} / {total}
        </span>
      </div>
    </div>
  )
)
FlipPage.displayName = "FlipPage"

// ─── Flipbook wrapper ──────────────────────────────────────────────────────────

interface PageFlipInstance {
  flipPrev: (corner?: string) => void
  flipNext: (corner?: string) => void
  getCurrentPageIndex: () => number
}
interface FlipBookHandle {
  pageFlip: () => PageFlipInstance
}

const ZineImageFlipbook: React.FC<ZineImageFlipbookProps> = ({ pages }) => {
  const bookRef = useRef<FlipBookHandle | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const pageCount = pages.length

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") flipNext()
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   flipPrev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Preload every page image so there's no blank-frame lag during flips
  useEffect(() => {
    pages.forEach(src => {
      const img = new window.Image()
      img.src = src
    })
  }, [pages])

  // Fade in after mount so the initial paint doesn't flash
  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  if (!pageCount) return null

  const flipPrev = () => bookRef.current?.pageFlip()?.flipPrev("top")
  const flipNext = () => bookRef.current?.pageFlip()?.flipNext("top")

  const canGoPrev = currentPage > 0
  const canGoNext = currentPage < pageCount - 1

  // Progress bar width
  const progress = pageCount > 1 ? (currentPage / (pageCount - 1)) * 100 : 100

  return (
    <div className="w-full">
      {/* Clip StPageFlip's outer containers so pages don't bleed outside the book.
          NOTE: do NOT add overflow:hidden to .stf__item — the library renders the
          fold animation as elements that extend beyond the item bounds; clipping
          those would hide the "next page peeks through" reveal during the flip. */}
      <style>{`
        .stf__parent { overflow: hidden !important; }
        .stf__block  { overflow: hidden !important; }
      `}</style>
      {/* ── Reading desk surface ── */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #2a1f14 0%, #1a120b 60%, #120d07 100%)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.3)",
        }}
      >
        {/* Ambient light at top */}
        <div
          className="absolute inset-x-0 top-0 h-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(196,120,64,0.14) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Inner content */}
        <div className="relative px-4 sm:px-8 lg:px-12 pt-8 pb-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p
                className="font-mono text-[9px] tracking-[0.22em] uppercase mb-1"
                style={{ color: "rgba(196,120,64,0.7)" }}
              >
                Zine Reader
              </p>
              <p
                className="font-display text-lg font-bold leading-tight"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                Spotify Recommendation Algorithm
              </p>
            </div>
            <p
              className="font-mono text-[10px] tabular-nums"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {currentPage + 1}&thinsp;/&thinsp;{pageCount}
            </p>
          </div>

          {/* Book + nav buttons */}
          <div className="relative flex items-center justify-center gap-3 sm:gap-5">

            {/* Prev button */}
            <button
              type="button"
              onClick={flipPrev}
              disabled={!canGoPrev}
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150"
              style={{
                background: canGoPrev ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: canGoPrev ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)",
                cursor: canGoPrev ? "pointer" : "not-allowed",
              }}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Book */}
            <div
              className="flex-1 min-w-0 transition-opacity duration-300"
              style={{
                opacity: isReady ? 1 : 0,
                // No CSS filter here — drop-shadow on an animated subtree
                // forces full recomposite every frame and tanks FPS.
                // The outer container box-shadow provides the depth.
                willChange: "transform",
              }}
            >
              <div className="relative overflow-hidden" style={{ isolation: "isolate" }}>
                <HTMLFlipBook
                  ref={bookRef as React.Ref<unknown>}
                  width={300}
                  height={400}
                  minWidth={160}
                  maxWidth={440}
                  minHeight={213}
                  maxHeight={587}
                  size="stretch"
                  autoSize
                  startPage={0}
                  startZIndex={10}
                  useMouseEvents
                  swipeDistance={15}
                  showPageCorners
                  disableFlipByClick={false}
                  flippingTime={380}
                  maxShadowOpacity={0.45}
                  showCover
                  drawShadow
                  usePortrait={false}
                  mobileScrollSupport
                  clickEventForward
                  style={{}}
                  className="mx-auto"
                  onFlip={(e: unknown) => {
                    const ev = e as { data?: unknown }
                    setCurrentPage(typeof ev?.data === "number" ? ev.data : 0)
                  }}
                  onInit={() => setIsReady(true)}
                >
                  {pages.map((src, i) => (
                    <FlipPage
                      key={src}
                      src={src}
                      pageNumber={i + 1}
                      total={pageCount}
                    />
                  ))}
                </HTMLFlipBook>
              </div>
            </div>

            {/* Next button */}
            <button
              type="button"
              onClick={flipNext}
              disabled={!canGoNext}
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150"
              style={{
                background: canGoNext ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: canGoNext ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)",
                cursor: canGoNext ? "pointer" : "not-allowed",
              }}
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-6 mx-auto max-w-sm">
            <div
              className="h-px w-full rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: "rgba(196,120,64,0.7)",
                }}
              />
            </div>
          </div>

          {/* Hint */}
          <p
            className="font-mono text-center mt-3"
            style={{ fontSize: "9px", letterSpacing: "0.16em", color: "rgba(255,255,255,0.2)" }}
          >
            CLICK PAGES · DRAG CORNER · ← → KEYS
          </p>

        </div>
      </div>
    </div>
  )
}

export default ZineImageFlipbook
