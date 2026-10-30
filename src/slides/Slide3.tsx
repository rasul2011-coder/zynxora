export default function Slide3() {
  return (
    <div className="slide s3 anim-fade">
      <div className="slide-inner">
        <div className="label label--light anim-fade anim-fade--d1">Иллюзия контроля</div>

        <h2 className="h2 h2--light anim-fade anim-fade--d2">
          Ручные правила сжигают маржу.<br />
          Тяжёлый ML сжигает серверный бюджет.
        </h2>

        {/* Split comparison */}
        <div className="s3__grid anim-fade anim-fade--d3">
          {/* Left column */}
          <div className="s3__col">
            <div className="s3__tag">Таблицы и if/else скрипты</div>
            <div className="s3__col-title">Война правил</div>
            <p className="s3__col-text">
              Локальная скидка на один товар каннибализирует продажи
              соседнего высокомаржинального артикула. На тысячах позиций
              каскад правил становится неуправляемым.
            </p>
            <div className="s3__visual">
              <svg viewBox="0 0 260 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline
                  points="10,30 42,56 74,18 106,62 138,12 170,48 202,32 242,68"
                  stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Vertical separator */}
          <div className="s3__sep" />

          {/* Right column */}
          <div className="s3__col">
            <div className="s3__tag">Нейросети и RL-модели</div>
            <div className="s3__col-title">Раздутый счёт</div>
            <p className="s3__col-text">
              Требуют дорогостоящих GPU-кластеров, переобучаются часами
              и выдают непрозрачные решения, которые финансовый директор
              не может верифицировать.
            </p>
            <div className="s3__visual">
              <svg viewBox="0 0 260 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="8" width="240" height="56" rx="2" fill="#D1D1D6" opacity="0.35"/>
                <rect x="22" y="18" width="216" height="36" rx="1" fill="#8E8E93" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Metric row */}
        <div className="s3__metric anim-fade anim-fade--d4">
          <span className="s3__metric-val s3__metric-val--dim">0%</span>
          <p className="s3__metric-label">прозрачности у нейросетей</p>
          <span className="s3__metric-vs">против</span>
          <span className="s3__metric-val s3__metric-val--accent">100%</span>
          <p className="s3__metric-label">детерминизма аналитики</p>
        </div>
      </div>
    </div>
  )
}
