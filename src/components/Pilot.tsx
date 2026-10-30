const CARDS = [
  {
    num: '01',
    title: 'Готовый SDK-коннектор',
    text: 'Подключение за 15 минут без переписывания вашей БД. Названия товаров остаются на вашей стороне (Zero-Knowledge).',
    extra: (
      <div className="code-block">
        <pre>
          <span className="ck">import</span>{' '}ArdonClient{' '}
          <span className="ck">from</span>{' '}
          <span className="cs">'ardon-sdk'</span>
          {'\n\n'}
          <span className="ck">const</span>{' '}client = <span className="cf">ArdonClient</span>
          {'({\n'}
          {'  '}apiKey:{' '}
          <span className="cs">'ardon-client-a7be195bd445518e'</span>
          {'\n})'}{' '}
          <span className="cc">// Zero-Knowledge init</span>
        </pre>
      </div>
    ),
  },
  {
    num: '02',
    title: 'Персональный API-ключ',
    text: (
      <>
        Выделенный лимит{' '}
        <span className="mono accent" style={{ fontSize: '.95em' }}>5&nbsp;000&nbsp;SKU&nbsp;/&nbsp;сутки</span>{' '}
        на каждого тестового клиента. Изолированный инференс, нет конкурирующих запросов.
      </>
    ),
    extra: (
      <div className="pilot__endpoint">
        <span className="pilot__endpoint-text">POST /v1/recommend</span>
        <span className="pilot__endpoint-text">X-Api-Key: ardon-client-***</span>
        <span className="pilot__endpoint-text">TTL: 3600s</span>
      </div>
    ),
  },
  {
    num: '03',
    title: '90 дней за наш счёт',
    text: 'Мы полностью берём на себя расходы на серверный инференс на время пилота. Техническому директору не нужно защищать бюджет.',
    extra: (
      <div className="pilot__sandbox">
        <span className="pilot__sandbox-text">sandbox: 162.35.31.11:8000</span>
      </div>
    ),
  },
]

export default function Pilot() {
  return (
    <section className="section section--alt" id="offer">
      <div className="container">
        <span className="label" data-aos="fade-right" data-aos-duration="500">Zero-Risk Pilot</span>

        <h2 className="h2" data-aos="fade-up" data-aos-duration="700">
          <span className="mono accent">20 строк кода</span>.{' '}
          <span className="mono">3 месяца</span> бесплатного серверного ресурса.
        </h2>

        {/* Big zero */}
        <div className="pilot__zero" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="100">
          <div className="pilot__zero-val">0 ₽</div>
          <div className="pilot__zero-label">капитальных затрат на запуск пилота</div>
        </div>

        {/* Cards */}
        <div className="pilot__cards">
          {CARDS.map((c, i) => (
            <div className="card" key={c.num}
              data-aos="fade-up" data-aos-duration="700" data-aos-delay={i * 80}>
              <span className="pilot__card-num">{c.num}</span>
              <h3 className="h3" style={{ marginBottom: '.5rem', fontSize: 'clamp(.875rem,1.35vw,1.0625rem)' }}>
                {c.title}
              </h3>
              <p className="body-sm" style={{ marginBottom: '1rem' }}>{c.text}</p>
              {c.extra}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
