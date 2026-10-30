const POINTS = [
  {
    num: '30%',
    accent: true,
    text: 'оборотного капитала среднего мерчанта заморожено в позициях, чья валовая прибыль ниже стоимости хранения на складе (~2% в месяц)',
  },
  {
    num: '59%',
    accent: false,
    text: 'неликвида можно разморозить через Курно-скидки — вернуть живые деньги в оборот без скидочных войн',
  },
  {
    num: '0',
    accent: false,
    text: 'математических инструментов у селлеров для отличия товара-локомотива трафика от товара-паразита — пока нет вашего нового тарифа',
  },
]

export default function Slide5() {
  return (
    <div className="slide s5 anim-fade">
      <div className="slide-inner">
        <div className="label anim-fade anim-fade--d1">Замороженный капитал</div>

        <h2 className="h2 anim-fade anim-fade--d2">
          Прямо сейчас селлеры вашей платформы<br />
          теряют деньги на неликвидах и дублях.
        </h2>

        {/* 70 / 30 bar */}
        <div className="anim-fade anim-fade--d3">
          <div className="s5__bar-wrap">
            <div className="s5__seg s5__seg--active">
              <span className="s5__seg-pct">70%</span>
              <span className="s5__seg-label">Рабочий актив</span>
            </div>
            <div className="s5__seg s5__seg--frozen">
              <span className="s5__seg-pct">30%</span>
              <span className="s5__seg-label">Замороженный капитал</span>
            </div>
          </div>

          {/* Arrow annotation */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '.625rem' }}>
            <svg viewBox="0 0 280 28" fill="none" style={{ width: 'clamp(160px,28vw,280px)', height: 28 }} aria-hidden="true">
              <path d="M0 14 L220 14" stroke="#3D6B58" strokeWidth="1" strokeDasharray="4 3"/>
              <path d="M212 8 L222 14 L212 20" stroke="#3D6B58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="4" y="10" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#3D6B58">высвобождение →</text>
            </svg>
          </div>
        </div>

        {/* Stat points */}
        <div className="s5__points anim-fade anim-fade--d4">
          {POINTS.map((p) => (
            <div className="card" key={p.num} style={{ background: 'var(--surface)' }}>
              <span className={`s5__point-num${p.accent ? ' s5__point-num--accent' : ''}`}>{p.num}</span>
              <p className="body-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
