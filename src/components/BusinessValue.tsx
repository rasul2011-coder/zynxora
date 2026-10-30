const POINTS = [
  { num: '30%',  accent: true,  text: 'оборотного капитала среднего мерчанта заморожено в позициях, чья валовая прибыль ниже стоимости хранения на складе (~2% в месяц)' },
  { num: '59%',  accent: false, text: 'неликвида можно разморозить через Курно-скидки — вернуть живые деньги в оборот без скидочных войн' },
  { num: '0',    accent: false, text: 'математических инструментов у селлеров для отличия товара-локомотива трафика от товара-паразита — пока нет вашего нового тарифа' },
]

export default function BusinessValue() {
  return (
    <section className="section section--alt" id="audience">
      <div className="container">
        <span className="label" data-aos="fade-right" data-aos-duration="500">Замороженный капитал</span>

        <h2 className="h2" style={{ marginBottom: 0 }}
          data-aos="fade-up" data-aos-duration="700">
          Прямо сейчас селлеры вашей платформы<br />
          теряют деньги на неликвидах и дублях.
        </h2>

        {/* 70 / 30 bar */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <div className="bv__bar-wrap">
            <div className="bv__seg bv__seg--active">
              <span className="bv__seg-pct">70%</span>
              <span className="bv__seg-label">Рабочий актив</span>
            </div>
            <div className="bv__seg bv__seg--frozen">
              <span className="bv__seg-pct">30%</span>
              <span className="bv__seg-label">Замороженный капитал</span>
            </div>
          </div>

          {/* Arrow annotation */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '.625rem' }}>
            <svg viewBox="0 0 280 28" fill="none"
              style={{ width: 'clamp(160px,28vw,280px)', height: 28 }}
              aria-hidden="true">
              <path d="M0 14 L220 14" stroke="#3D6B58" strokeWidth="1" strokeDasharray="4 3"/>
              <path d="M212 8L222 14L212 20" stroke="#3D6B58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="4" y="11" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#3D6B58">высвобождение →</text>
            </svg>
          </div>
        </div>

        {/* Stat points */}
        <div className="bv__points">
          {POINTS.map((p, i) => (
            <div className="card" key={p.num}
              data-aos="fade-up" data-aos-duration="700" data-aos-delay={i * 80}>
              <span className={`bv__point-num${p.accent ? ' bv__point-num--accent' : ''}`}>{p.num}</span>
              <p className="body-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
