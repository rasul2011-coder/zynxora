const STATS = [
  { val: 'O(N²)', desc: 'квадратичная сложность пересчёта перекрёстных связей на каталогах 150K+ SKU' },
  { val: '22.5 млрд', desc: 'парных связей на матрице 150 000 SKU — реляционная СУБД физически не рассчитана на это' },
  { val: '1×/нед', desc: 'вынужденная частота обновления цен: бизнес торгует по устаревшим данным' },
]

const CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Каннибализация SKU',
    text: 'Локальная скидка на один товар убивает продажи соседнего высокомаржинального артикула — ручные правила неуправляемы.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Устаревшие цены',
    text: 'Бизнес вынужден обновлять цены раз в неделю и торговать по устаревшим данным, теряя маржу каждый день.',
  },
]

export default function Slide2() {
  return (
    <div className="slide s2 anim-fade">
      <div className="slide-inner">
        <div className="label anim-fade anim-fade--d1">Архитектурная проблема</div>

        <h2 className="h2 anim-fade anim-fade--d2">
          Транзакционные базы созданы для учёта,<br />
          а не для матричной алгебры.
        </h2>

        {/* Stat grid */}
        <div className="s2__stats anim-fade anim-fade--d3">
          {STATS.map((s) => (
            <div className="s2__stat" key={s.val}>
              <span className="stat-val stat-val--accent mono">{s.val}</span>
              <p className="stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="s2__cards anim-fade anim-fade--d4">
          {CARDS.map((c) => (
            <div className="card" key={c.title}>
              <div style={{
                width: 38, height: 38,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--surface)', borderRadius: 'var(--r)',
                color: 'var(--ink-2)', marginBottom: '.875rem',
              }}>
                {c.icon}
              </div>
              <h3 className="h3" style={{ marginBottom: '.4rem' }}>{c.title}</h3>
              <p className="body-sm">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="s2__note anim-fade anim-fade--d5">
          <span className="s2__note-text">ERP: хранение транзакций ≠ матричная оптимизация</span>
        </div>
      </div>
    </div>
  )
}
