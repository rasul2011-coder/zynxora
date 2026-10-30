import ZynxLogo from '../assets/zynxora-logo.svg'

export default function Slide1() {
  return (
    <div className="slide s1 anim-fade">
      {/* Decorative vertical axis line */}
      <div className="s1__eq-line" aria-hidden="true">
        <div className="s1__eq-node">
          <div className="s1__eq-dot" />
          <span className="s1__eq-label mono">x* = argmax Π(p)</span>
        </div>
      </div>

      <div className="slide-inner" style={{ maxWidth: '55%' }}>
        {/* ZYNXORA brand badge */}
        <div className="anim-fade anim-fade--d1" style={{ display: 'flex', alignItems: 'center', gap: '.625rem', marginBottom: 'clamp(.75rem,2vw,1.5rem)' }}>
          <img src={ZynxLogo} alt="ZynxOra Research" style={{ width: 28, height: 28, borderRadius: 6 }} />
          <span style={{
            fontFamily: 'var(--f-mono)',
            fontSize: 'clamp(.6rem,.85vw,.7rem)',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
          }}>
            ZYNXORA Research
          </span>
        </div>

        {/* Main headline */}
        <h1 className="h1 anim-fade anim-fade--d2">
          MF&nbsp;<span className="accent">Ardon</span>
        </h1>

        {/* Sublines */}
        <p className="body-lg s1__sub anim-fade anim-fade--d3">
          Математическое ядро калибровки цен<br />
          и товарных матриц в реальном времени.
        </p>
        <p className="body-lg s1__sub2 anim-fade anim-fade--d4" style={{ fontSize: 'clamp(.875rem,1.4vw,1rem)', color: 'var(--ink-3)' }}>
          Расчёт равновесия Курно и графа перекрёстного спроса<br />
          для каталогов от&nbsp;150&nbsp;000&nbsp;SKU.
        </p>

        {/* Tech stack badge */}
        <div className="badge anim-fade anim-fade--d5" style={{ marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
          <span className="mono">libardon.so</span>
          <span className="badge__sep">·</span>
          <span className="mono">C&thinsp;/&thinsp;C++17 Native ABI</span>
          <span className="badge__sep">·</span>
          <span className="mono">Zero-Knowledge Protocol</span>
        </div>

        {/* Key metrics row */}
        <div className="anim-fade anim-fade--d6" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem,3vw,2.5rem)', flexWrap: 'wrap' }}>
          <div>
            <span className="stat-val stat-val--accent" style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)' }}>0.4 мс</span>
            <span className="stat-desc">расчёт матрицы</span>
          </div>
          <div style={{ width: 1, height: 44, background: 'var(--line)', flexShrink: 0 }} aria-hidden="true" />
          <div>
            <span className="stat-val" style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)' }}>150K+</span>
            <span className="stat-desc">SKU в реальном времени</span>
          </div>
          <div style={{ width: 1, height: 44, background: 'var(--line)', flexShrink: 0 }} aria-hidden="true" />
          <div>
            <span className="stat-val" style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)' }}>+15%</span>
            <span className="stat-desc">рост маржинальности</span>
          </div>
        </div>
      </div>
    </div>
  )
}
