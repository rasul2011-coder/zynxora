const STATS = [
  { val: 'O(N²)',     desc: 'квадратичная сложность пересчёта перекрёстных связей на каталогах 150K+ SKU' },
  { val: '22.5 млрд', desc: 'парных связей на матрице 150 000 SKU — реляционная СУБД физически не рассчитана на это' },
  { val: '1×/нед',    desc: 'вынужденная частота обновления цен: бизнес торгует по устаревшим данным' },
]

const CARDS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Блокировки СУБД',
    text: 'Пересчёт эластичности и остатков в реальном времени блокирует таблицы и останавливает продуктовый контур.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Каннибализация SKU',
    text: 'Локальная скидка убивает продажи соседнего высокомаржинального артикула. Ручные правила на тысячах позиций неуправляемы.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Устаревшие цены',
    text: 'Бизнес вынужден обновлять цены раз в неделю и торговать по устаревшим данным, теряя маржу каждый день.',
  },
]

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <span className="label" data-aos="fade-right" data-aos-duration="500">Архитектурная проблема</span>

        <h2 className="h2" style={{ marginBottom: '2.5rem' }}
          data-aos="fade-up" data-aos-duration="700">
          Транзакционные базы созданы для учёта,<br />
          а не для матричной алгебры.
        </h2>

        {/* Stat grid */}
        <div className="problem__grid" data-aos="fade-up" data-aos-duration="700" data-aos-delay="80">
          {STATS.map(s => (
            <div className="problem__stat" key={s.val}>
              <span className="problem__stat-val mono">{s.val}</span>
              <p className="problem__stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="problem__cards">
          {CARDS.map((c, i) => (
            <div className="card" key={c.title}
              data-aos="fade-up" data-aos-duration="700" data-aos-delay={i * 80}>
              <div className="card__icon">{c.icon}</div>
              <h3 className="h3" style={{ marginBottom: '.45rem' }}>{c.title}</h3>
              <p className="body-sm">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="problem__note" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
          <span className="problem__note-text">ERP: хранение транзакций ≠ матричная оптимизация</span>
        </div>
      </div>
    </section>
  )
}
