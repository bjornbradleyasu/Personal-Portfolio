import React, { forwardRef, useMemo, useRef, useState } from "react"
import HTMLFlipBook from "react-pageflip"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"

interface ZineImageFlipbookProps {
  pages: string[]
  title?: string
}

interface FlipPageProps {
  src: string
  pageNumber: number
  title: string
}

const FlipPage = forwardRef<HTMLDivElement, FlipPageProps>(({ src, pageNumber, title }, ref) => {
  return (
    <div ref={ref} className="bg-white">
      <div className="relative w-full h-full bg-white overflow-hidden">
        <img
          src={src}
          alt={`${title} page ${pageNumber}`}
          className="w-full h-full object-contain select-none"
          draggable={false}
          loading="lazy"
        />
        <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
          <span className="font-mono text-[10px] text-text-secondary/70">{pageNumber}</span>
        </div>
      </div>
    </div>
  )
})

FlipPage.displayName = "FlipPage"

const ZineImageFlipbook: React.FC<ZineImageFlipbookProps> = ({ pages, title }) => {
  const bookRef = useRef<{ pageFlip: () => { flipPrev: (corner: string) => void; flipNext: (corner: string) => void } } | null>(null)
  const [pageIndex, setPageIndex] = useState(0)
  const pageCount = pages.length

  const zineTitle = title ?? "Research Zine"

  const displayedRange = useMemo(() => {
    if (!pageCount) return ""
    const left = pageIndex + 1
    const isCoverLike = pageIndex === 0 || pageIndex === pageCount - 1
    if (isCoverLike) return `${left}`
    const right = Math.min(pageIndex + 2, pageCount)
    return `${left}-${right}`
  }, [pageIndex, pageCount])

  if (!pageCount) return null

  const canGoPrev = pageIndex > 0
  const canGoNext = pageIndex < pageCount - 1

  const goPrev = () => {
    bookRef.current?.pageFlip()?.flipPrev("top")
  }

  const goNext = () => {
    bookRef.current?.pageFlip()?.flipNext("top")
  }

  return (
    <section className="py-4 md:py-6">
      <div className="mb-4 text-center">
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">
          Zine Reader
        </p>
        <p className="font-display text-xl md:text-2xl font-bold text-text-primary inline-flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          {zineTitle}
        </p>
        <p className="font-mono text-xs text-text-secondary mt-2">
          Pages {displayedRange}
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-3 md:px-12">
        <button
          type="button"
          onClick={goPrev}
          disabled={!canGoPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-surface-alt bg-bg/90 backdrop-blur-sm text-text-primary flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent hover:text-accent transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={!canGoNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-surface-alt bg-bg/90 backdrop-blur-sm text-text-primary flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent hover:text-accent transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="relative" style={{ perspective: "1600px" }}>
          {/* Soft table shadow to make it feel like it is lying on the page */}
          <div className="absolute -inset-x-6 md:-inset-x-12 -bottom-3 h-12 bg-gradient-to-r from-transparent via-text-primary/10 to-transparent blur-xl" />

          <div className="relative z-10 mx-auto max-w-5xl">
            <HTMLFlipBook
              ref={bookRef}
              width={520}
              height={700}
              style={{}}
              startZIndex={0}
              autoSize
              useMouseEvents
              swipeDistance={30}
              showPageCorners
              disableFlipByClick={false}
              minWidth={320}
              maxWidth={1040}
              minHeight={420}
              maxHeight={1320}
              size="stretch"
              maxShadowOpacity={0.32}
              showCover
              drawShadow
              usePortrait
              mobileScrollSupport
              flippingTime={720}
              clickEventForward
              startPage={0}
              className="mx-auto"
              onFlip={(e: unknown) => {
                const eventWithData = e as { data?: unknown }
                setPageIndex(typeof eventWithData?.data === "number" ? eventWithData.data : 0)
              }}
            >
              {pages.map((src, i) => (
                <FlipPage
                  key={`${src}-${i}`}
                  src={src}
                  pageNumber={i + 1}
                  title={zineTitle}
                />
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      </div>

      <p className="font-mono text-[11px] text-text-secondary/80 text-center mt-4">
        Use arrows to turn one page at a time
      </p>
    </section>
  )
}

export default ZineImageFlipbook
