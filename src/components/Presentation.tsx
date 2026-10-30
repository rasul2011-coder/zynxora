import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from 'react'
import ZynxLogo from '../assets/zynxora-logo.svg'

/* ── Icons ─────────────────────────────────────────────────── */
function IconPrev() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconNext() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconFullscreen({ active }: { active: boolean }) {
  return active ? (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 2H2v3M9 2h3v3M5 12H2V9M9 12h3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 5V2h3M9 2h3v3M2 9v3h3M9 12h3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconPdf() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 5h6M4 7.5h6M4 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

/* ── Types ─────────────────────────────────────────────────── */
interface SlideInfo {
  label: string
  component: ReactNode
}

interface Props {
  slides: SlideInfo[]
}

/* ── Component ─────────────────────────────────────────────── */
export default function Presentation({ slides }: Props) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'right' | 'left'>('right')
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPrinting, setIsPrinting] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const total = slides.length

  /* ── Navigation ──────────────────────────────────────────── */
  const goTo = useCallback((idx: number, dir: 'right' | 'left' = 'right') => {
    if (idx < 0 || idx >= total) return
    setDirection(dir)
    setCurrent(idx)
  }, [total])

  const prev = useCallback(() => goTo(current - 1, 'left'), [current, goTo])
  const next = useCallback(() => goTo(current + 1, 'right'), [current, goTo])

  /* ── Keyboard ────────────────────────────────────────────── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault()
          next()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          prev()
          break
        case 'Home':
          e.preventDefault()
          goTo(0, 'left')
          break
        case 'End':
          e.preventDefault()
          goTo(total - 1, 'right')
          break
        case 'f':
        case 'F':
          toggleFullscreen()
          break
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev, goTo, total])

  /* ── Fullscreen ──────────────────────────────────────────── */
  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      try { await wrapRef.current?.requestFullscreen() } catch { /* ignore */ }
    } else {
      try { await document.exitFullscreen() } catch { /* ignore */ }
    }
  }, [])

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  /* ── PDF / Print export ──────────────────────────────────── */
  const exportPdf = useCallback(async () => {
    if (isPrinting) return
    setIsPrinting(true)
    // Save current slide, iterate all, print each page via CSS
    const original = current
    const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    // Temporarily set body overflow for print
    document.body.style.overflow = 'auto'

    // Build a print iframe with all slides stacked
    const iframe = document.createElement('iframe')
    iframe.style.cssText = 'position:fixed;inset:0;width:100%;height:0;border:none;opacity:0;'
    document.body.appendChild(iframe)
    const iDoc = iframe.contentDocument!
    const iWin = iframe.contentWindow!

    // Collect slide HTML snapshots
    let slidesHtml = ''
    for (let i = 0; i < total; i++) {
      goTo(i, 'right')
      await delay(200)
      const el = wrapRef.current?.querySelector('.slide-stage') as HTMLElement | null
      if (el) {
        slidesHtml += `<div class="print-page">${el.innerHTML}</div>`
      }
    }

    // Build print doc
    const styleHref = Array.from(document.querySelectorAll('link[rel=stylesheet]'))
      .map((l) => (l as HTMLLinkElement).href)
      .filter(Boolean)
      .map((h) => `<link rel="stylesheet" href="${h}">`)
      .join('')

    const inlineStyles = Array.from(document.querySelectorAll('style'))
      .map((s) => `<style>${s.textContent}</style>`)
      .join('')

    iDoc.write(`<!DOCTYPE html><html><head>
      ${styleHref}${inlineStyles}
      <style>
        *{box-sizing:border-box;margin:0;padding:0;}
        html,body{background:#0A0A0A;overflow:auto;}
        .print-page{
          width:297mm;height:167mm;
          position:relative;overflow:hidden;
          page-break-after:always;break-after:page;
          display:flex;flex-direction:column;
        }
        .slide{position:relative;flex:1;}
        .slide-footer{display:none;}
        @media print{
          @page{size:297mm 167mm landscape;margin:0;}
          .print-page{page-break-after:always;}
        }
      </style>
    </head><body>${slidesHtml}</body></html>`)
    iDoc.close()

    await delay(500)
    iWin.focus()
    iWin.print()

    // Restore
    document.body.removeChild(iframe)
    document.body.style.overflow = 'hidden'
    goTo(original, 'left')
    setIsPrinting(false)
  }, [current, total, goTo, isPrinting])

  /* ── Touch swipe ─────────────────────────────────────────── */
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) next()
      else prev()
    }
  }

  const animClass = direction === 'right' ? 'anim-in-right' : 'anim-in-left'

  return (
    <div
      ref={wrapRef}
      className="presentation"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Slide stage ─────────────────────────────────────── */}
      <div className="slide-stage">
        <div key={current} className={animClass} style={{ position: 'absolute', inset: 0 }}>
          {slides[current].component}
        </div>
      </div>

      {/* ── Footer bar ──────────────────────────────────────── */}
      <footer className="slide-footer">
        {/* Brand */}
        <div className="slide-footer__brand">
          <img
            src={ZynxLogo}
            alt="ZynxOra Research"
            className="slide-footer__logo-icon"
          />
          <span className="slide-footer__name">ZYNXORA Research</span>
        </div>

        {/* Center: dots + prev/next */}
        <div className="slide-footer__center">
          <div className="slide-footer__controls">
            <button
              className="ctrl-btn"
              onClick={prev}
              disabled={current === 0}
              aria-label="Предыдущий слайд"
            >
              <IconPrev />
            </button>

            {/* Progress dots */}
            <div className="progress-dots" role="tablist" aria-label="Навигация по слайдам">
              {slides.map((s, i) => (
                <button
                  key={i}
                  className={`progress-dot${i === current ? ' progress-dot--active' : ''}`}
                  onClick={() => goTo(i, i > current ? 'right' : 'left')}
                  aria-label={`Слайд ${i + 1}: ${s.label}`}
                  aria-selected={i === current}
                  role="tab"
                  title={s.label}
                />
              ))}
            </div>

            <button
              className="ctrl-btn"
              onClick={next}
              disabled={current === total - 1}
              aria-label="Следующий слайд"
            >
              <IconNext />
            </button>
          </div>

          <span className="slide-counter" aria-live="polite">
            {String(current + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Right: keyboard hint + actions */}
        <div className="slide-footer__right">
          <span className="kbd-hint">← → Space · F fullscreen</span>

          <button
            className="icon-btn"
            onClick={exportPdf}
            disabled={isPrinting}
            aria-label="Экспорт в PDF"
            title="Экспорт в PDF"
          >
            <IconPdf />
          </button>

          <button
            className="icon-btn"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Выйти из полноэкранного режима' : 'Полноэкранный режим'}
            title={isFullscreen ? 'Выйти из полноэкранного режима' : 'Полноэкранный режим'}
          >
            <IconFullscreen active={isFullscreen} />
          </button>
        </div>
      </footer>
    </div>
  )
}
