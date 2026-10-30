export default function Solutions() {
  return (
    <section className="section solutions section--alt" id="alternatives">
      <div className="container">
        <span className="label" data-aos="fade-right" data-aos-duration="500">Иллюзия контроля</span>

        <h2 className="h2" data-aos="fade-up" data-aos-duration="700">
          Ручные правила сжигают маржу.<br />
          Тяжёлый ML сжигает серверный бюджет.
        </h2>

        {/* Split comparison */}
        <div className="solutions__grid" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          {/* Left */}
          <div className="solutions__col">
            <div className="solutions__tag">Таблицы и if/else скрипты</div>
            <div className="solutions__col-title">Война правил</div>
            <p className="solutions__col-text">
              Локальная скидка на один товар каннибализирует продажи соседнего
              высокомаржинального артикула. На тысячах позиций каскад правил
              становится неуправляемым.
            </p>
            <div className="solutions__visual" aria-hidden="true">
              <svg viewBox="0 0 260 68" fill="none">
                <polyline points="10,28 42,54 74,16 106,60 138,10 170,46 202,30 242,66"
                  stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Separator */}
          <div className="solutions__sep" aria-hidden="true" />

          {/* Right */}
          <div className="solutions__col">
            <div className="solutions__tag">Нейросети и RL-модели</div>
            <div className="solutions__col-title">Раздутый счёт</div>
            <p className="solutions__col-text">
              Требуют дорогостоящих GPU-кластеров, переобучаются часами и
              выдают непрозрачные решения, которые финансовый директор
              не может верифицировать.
            </p>
            <div className="solutions__visual" aria-hidden="true">
              <svg viewBox="0 0 260 68" fill="none">
                <rect x="10" y="8" width="240" height="52" rx="2" fill="#D1D1D6" opacity="0.35"/>
                <rect x="22" y="18" width="216" height="32" rx="1" fill="#8E8E93" opacity="0.28"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Metric row */}
        <div className="solutions__metric" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="200">
          <span className="solutions__metric-num solutions__metric-num--dim mono">0%</span>
          <p className="solutions__metric-label">прозрачности у нейросетей</p>
          <span className="solutions__metric-vs">против</span>
          <span className="solutions__metric-num solutions__metric-num--accent mono">100%</span>
          <p className="solutions__metric-label">детерминизма аналитики</p>
        </div>
      </div>
    </section>
  )
}
