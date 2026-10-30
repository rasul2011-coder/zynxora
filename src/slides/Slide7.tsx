const CARDS = [
  {
    num: '01',
    title: 'Готовый SDK-коннектор',
    text: 'Подключение за 15 минут без переписывания вашей БД. Названия товаров остаются на вашей стороне (Zero-Knowledge).',
    extra: (
      <div className="code-block">
        <pre>
          <span className="code-kw">import</span>{' '}ArdonClient{' '}<span className="code-kw">from</span>{' '}<span className="code-str">'ardon-sdk'</span>{'\n\n'}
          <span className="code-kw">const</span>{' '}client = <span className="code-fn">ArdonClient</span>{'({\n'}
          {'  '}apiKey: <span className="code-str">'ardon-client-a7be195bd445518e'</span>{'\n}'}
          <span className="code-cm">{' '}// Zero-Knowledge init</span>
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
        <span className="mono accent" style={{ fontSize: '.95em' }}>5&nbsp;000&nbsp;SKU&nbsp;/&nbsp;сутки</span>
        {' '}на каждого тестового клиента. Изолированный инференс, нет конкурирующих запросов.
      </>
    ),
    extra: (
      <div className="s7__endpoint">
        <span className="s7__endpoint-text">POST /v1/recommend</span>
        <span className="s7__endpoint-text">X-Api-Key: ardon-client-***</span>
        <span className="s7__endpoint-text">TTL: 3600s</span>
      </div>
    ),
  },
  {
    num: '03',
    title: '90 дней за наш счёт',
    text: 'Мы полностью берём на себя расходы на серверный инференс на время пилота. Техническому директору не нужно защищать бюджет.',
    extra: (
      <div className="s7__sandbox">
        <span className="s7__sandbox-text">sandbox: 162.35.31.11:8000</span>
      </div>
    ),
  },
]

export default function Slide7() {
  return (
    <div className="slide s7 anim-fade">
      <div className="slide-inner">
        <div className="label anim-fade anim-fade--d1">Zero-Risk Pilot</div>

        <h2 className="h2 anim-fade anim-fade--d2">
          <span className="mono accent">20 строк кода</span>. <span className="mono">3 месяца</span>{' '}
          бесплатного серверного ресурса.
        </h2>

        {/* Big zero */}
        <div className="s7__zero anim-fade anim-fade--d3">
          <div className="s7__zero-val">0 ₽</div>
          <div className="s7__zero-label">капитальных затрат на запуск пилота</div>
        </div>

        {/* Offer cards */}
        <div className="s7__cards anim-fade anim-fade--d4">
          {CARDS.map((c) => (
            <div className="card" key={c.num}>
              <span className="s7__card-num">{c.num}</span>
              <h3 className="h3" style={{ marginBottom: '.5rem', fontSize: 'clamp(.875rem,1.4vw,1.0625rem)' }}>{c.title}</h3>
              <p className="body-sm" style={{ marginBottom: '1rem' }}>{c.text}</p>
              {c.extra}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
