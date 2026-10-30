const STEPS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'Интегрируете SDK за 15 минут',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Добавляете тариф в кабинет: $50–100/мес',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Забираете 85% ARR без R&D',
    accent: true,
  },
]

export default function Slide6() {
  return (
    <div className="slide s6 anim-fade">
      <div className="slide-inner">
        <div className="label anim-fade anim-fade--d1">Бизнес-модель White-Label</div>

        <h2 className="h2 anim-fade anim-fade--d2">
          Забирайте <span className="accent">85%</span> выручки<br />
          от нового тарифа. Мы остаёмся под капотом.
        </h2>

        <p className="body-lg anim-fade anim-fade--d3" style={{ marginBottom: 0 }}>
          Мы встраиваемся как невидимый вычислительный движок. Вы добавляете одну кнопку в кабинет селлера.
        </p>

        {/* 85 / 15 split block */}
        <div className="s6__split anim-fade anim-fade--d4">
          <div className="s6__block s6__block--main">
            <span className="s6__pct">85%</span>
            <span className="s6__block-title">Ваша платформа</span>
            <span className="s6__block-sub">$42.5–$85 / селлер</span>
            <span className="s6__block-note">Чистой маржи без R&amp;D-затрат</span>
          </div>
          <div className="s6__block s6__block--accent">
            <span className="s6__pct">15%</span>
            <span className="s6__block-title">MF Ardon</span>
            <span className="s6__block-sub">Серверный инференс</span>
            <span className="s6__block-note">Вычислительное ядро под капотом</span>
          </div>
        </div>

        {/* Flow steps */}
        <div className="s6__flow anim-fade anim-fade--d5">
          {STEPS.map((s, i) => (
            <>
              <div className="s6__step" key={s.text}>
                <div className={`s6__step-icon${s.accent ? ' accent' : ''}`} style={s.accent ? { background: 'var(--accent-10)', color: 'var(--accent)' } : {}}>
                  {s.icon}
                </div>
                <span style={{ color: s.accent ? 'var(--accent)' : undefined }}>{s.text}</span>
              </div>
              {i < STEPS.length - 1 && (
                <span className="s6__step-arrow" aria-hidden="true" key={`arrow-${i}`}>→</span>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
