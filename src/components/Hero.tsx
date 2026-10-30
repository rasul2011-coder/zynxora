import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let animId = 0
    let tick = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width  = rect.width  * DPR
      canvas.height = rect.height * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark'

    const draw = () => {
      const W = canvas.width  / DPR
      const H = canvas.height / DPR
      const dark = isDark()

      ctx.clearRect(0, 0, W, H)

      // bg
      ctx.fillStyle = dark ? '#111114' : '#FAF9F6'
      ctx.fillRect(0, 0, W, H)

      // grid
      ctx.strokeStyle = dark ? 'rgba(255,255,255,.05)' : '#E5E5EA'
      ctx.lineWidth = .75
      const step = 48
      for (let x = step; x < W; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = step; y < H; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }

      const px = 44, py = 44
      const gW = W - px * 2
      const gH = H - py * 2
      const inkCol  = dark ? 'rgba(255,255,255,.7)'  : '#1C1C1E'
      const ink2Col = dark ? 'rgba(255,255,255,.35)' : '#6E6E73'
      const accentCol = '#3D6B58'

      // axes
      ctx.strokeStyle = inkCol
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(px, py)
      ctx.lineTo(px, py + gH)
      ctx.lineTo(px + gW, py + gH)
      ctx.stroke()

      // axis labels
      ctx.font = `400 10px 'JetBrains Mono', monospace`
      ctx.fillStyle = ink2Col
      ctx.fillText('Цена', px + 6, py + 14)
      ctx.fillText('Количество', px + gW - 72, py + gH - 8)

      // demand curve
      ctx.beginPath()
      ctx.strokeStyle = inkCol
      ctx.lineWidth = 1.5
      for (let i = 0; i <= gW; i++) {
        const t = i / gW
        const x = px + i
        const y = py + gH * (.05 + .88 * t)
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()

      // MR curve (dashed)
      ctx.beginPath()
      ctx.strokeStyle = ink2Col
      ctx.lineWidth = 1
      ctx.setLineDash([4, 3])
      for (let i = 0; i <= gW; i++) {
        const t = i / gW
        const x = px + i
        const y = py + gH * (.92 - .85 * t)
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.setLineDash([])

      // equilibrium point
      const eqX = px + gW * .42
      const eqY = py + gH * .42
      const pulse = .6 + .4 * Math.sin(tick * .04)

      ctx.beginPath()
      ctx.strokeStyle = `rgba(61,107,88,${.18 * pulse})`
      ctx.lineWidth = 1
      ctx.arc(eqX, eqY, 20 * pulse, 0, Math.PI * 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.strokeStyle = `rgba(61,107,88,${.38 * pulse})`
      ctx.lineWidth = 1
      ctx.arc(eqX, eqY, 11 * pulse, 0, Math.PI * 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.fillStyle = accentCol
      ctx.arc(eqX, eqY, 4.5, 0, Math.PI * 2)
      ctx.fill()

      // dashed projections
      ctx.setLineDash([3, 4])
      ctx.strokeStyle = accentCol
      ctx.lineWidth = .9
      ctx.beginPath(); ctx.moveTo(eqX, eqY); ctx.lineTo(px, eqY); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(eqX, eqY); ctx.lineTo(eqX, py + gH); ctx.stroke()
      ctx.setLineDash([])

      // label
      ctx.font = `500 11px 'JetBrains Mono', monospace`
      ctx.fillStyle = accentCol
      ctx.fillText('x* = argmax Π(p)', eqX + 10, eqY - 12)

      ctx.font = `400 9px 'JetBrains Mono', monospace`
      ctx.fillStyle = ink2Col
      ctx.fillText('p*', eqX - 4, py + gH + 13)
      ctx.fillText('q*', px - 20, eqY + 4)

      // badge
      ctx.font = `600 14px 'JetBrains Mono', monospace`
      ctx.fillStyle = accentCol
      ctx.textAlign = 'right'
      ctx.fillText('0.4 мс', W - px - 4, py + 16)
      ctx.font = `400 9px 'JetBrains Mono', monospace`
      ctx.fillStyle = ink2Col
      ctx.fillText('libardon.so', W - px - 4, py + 30)
      ctx.textAlign = 'left'

      tick++
      animId = requestAnimationFrame(draw)
    }

    const startDraw = () => {
      cancelAnimationFrame(animId)
      resize()
      animId = requestAnimationFrame(draw)
    }

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          startDraw()
        } else {
          cancelAnimationFrame(animId)
        }
      })
    }, { threshold: .1 })
    io.observe(canvas)

    // Also start immediately in case already visible
    startDraw()

    const onResize = () => {
      cancelAnimationFrame(animId)
      resize()
      animId = requestAnimationFrame(draw)
    }
    window.addEventListener('resize', onResize, { passive: true })

    // redraw on theme change — restart loop so colours update instantly
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(animId)
      animId = requestAnimationFrame(draw)
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      cancelAnimationFrame(animId)
      io.disconnect()
      mo.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb"  aria-hidden="true" />

      <div className="container">
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge" data-aos="fade-down" data-aos-duration="600">
            <span className="badge">
              <span className="mono">libardon.so</span>
              <span className="badge__sep">·</span>
              <span className="mono">C&thinsp;/&thinsp;C++17 Native ABI</span>
              <span className="badge__sep">·</span>
              <span className="mono">Zero-Knowledge Protocol</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="h1 hero__title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="80">
            Zynx<span className="accent">Ora</span>
          </h1>

          {/* Sub */}
          <p className="body-lg hero__sub" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
            Математическое ядро калибровки цен<br className="br-d"/>
            и товарных матриц в реальном времени.
          </p>
          <p className="body-lg hero__sub2" style={{ fontSize: 'clamp(.875rem,1.35vw,1rem)', color: 'var(--ink-3)' }}
            data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
            Расчёт равновесия Курно и графа перекрёстного спроса<br className="br-d"/>
            для каталогов от&nbsp;150&nbsp;000&nbsp;SKU.
          </p>

          {/* Equation */}
          <div className="hero__eq" data-aos="fade-up" data-aos-duration="600" data-aos-delay="260">
            <span className="hero__eq-text">x* = argmax Π(p)</span>
          </div>

          {/* Actions */}
          <div className="hero__actions" data-aos="fade-up" data-aos-duration="600" data-aos-delay="320">
            <a href="#cta" className="btn btn--primary">Запустить пилот →</a>
            <a href="#solution" className="btn btn--ghost">Как это работает</a>
          </div>

          {/* Metrics */}
          <div className="hero__metrics" data-aos="fade-up" data-aos-duration="600" data-aos-delay="390">
            <div className="hero__metric">
              <span className="hero__metric-val accent">0.4 мс</span>
              <span className="hero__metric-label">расчёт матрицы</span>
            </div>
            <div className="hero__metric-sep" aria-hidden="true" />
            <div className="hero__metric">
              <span className="hero__metric-val">150K+</span>
              <span className="hero__metric-label">SKU в реальном времени</span>
            </div>
            <div className="hero__metric-sep" aria-hidden="true" />
            <div className="hero__metric">
              <span className="hero__metric-val">+15%</span>
              <span className="hero__metric-label">рост маржинальности</span>
            </div>
          </div>
        </div>

        {/* Canvas visual */}
        <div className="hero__visual" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <canvas ref={canvasRef} className="hero__canvas" aria-label="График равновесия Курно" />
        </div>
      </div>
    </section>
  )
}
