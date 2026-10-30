const STEPS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'Интегрируете SDK за 15 минут',
    accent: false,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Добавляете тариф $50–100/мес в кабинет селлера',
    accent: false,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Забираете 85% ARR без R&D-затрат',
    accent: true,
  },
]

export default function BusinessModel() {
  return (
    <section className="section" id="model">
      <div className="container">
        <span className="label" data-aos="fade-right" data-aos-duration="500">Бизнес-модель White-Label</span>

        <h2 className="h2" data-aos="fade-up" data-aos-duration="700">
          Забирайте <span className="accent">85%</span> выручки<br />
          от нового тарифа. Мы остаёмся под капотом.
        </h2>

        <p className="body-lg" style={{ marginBottom: 0 }}
          data-aos="fade-up" data-aos-duration="600" data-aos-delay="80">
          Мы не продаём Enterprise-лицензии за миллионы на старте — встраиваемся
          как невидимый вычислительный движок.
        </p>

        {/* 85/15 split */}
        <div className="bm__split" data-aos="fade-up" data-aos-duration="900" data-aos-delay="120">
          <div className="bm__block bm__block--main">
            <span className="bm__pct">85%</span>
            <span className="bm__block-title">Ваша платформа</span>
            <span className="bm__block-sub">$42.5–$85 / селлер</span>
            <span className="bm__block-note">Чистой маржи без R&amp;D-затрат</span>
          </div>
          <div className="bm__block bm__block--accent">
            <span className="bm__pct">15%</span>
            <span className="bm__block-title">MF Ardon</span>
            <span className="bm__block-sub">Серверный инференс</span>
            <span className="bm__block-note">Вычислительное ядро под капотом</span>
          </div>
        </div>

        {/* Flow */}
        <div className="bm__flow" data-aos="fade-up" data-aos-duration="700" data-aos-delay="180">
          {STEPS.map((s, i) => (
            <>
              <div className={`bm__step${s.accent ? ' bm__step--accent' : ''}`} key={s.text}>
                <div className="bm__step-icon"
                  style={s.accent ? { background: 'var(--accent-10)', color: 'var(--accent)', borderColor: 'var(--accent-20)' } : {}}>
                  {s.icon}
                </div>
                <span style={{ color: s.accent ? 'var(--accent)' : undefined }}>{s.text}</span>
              </div>
              {i < STEPS.length - 1 && (
                <span className="bm__arrow" key={`a${i}`} aria-hidden="true">→</span>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
