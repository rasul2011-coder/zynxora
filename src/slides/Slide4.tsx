const CARDS = [
  { num: '01', title: 'C / C++17 Native ABI', text: 'Отказ от тяжёлых фреймворков. Математическое ядро реализовано на низком уровне — минимальный overhead, максимальная скорость.' },
  { num: '02', title: '24-мерное поле', text: 'Алгоритм проецирует поток продаж в многомерное реляционное поле, отсекает товары-каннибалы и находит точку максимальной прибыли.' },
  { num: '03', title: 'Zero-Knowledge', text: 'Названия товаров остаются на вашей стороне. Ядро работает с анонимизированными идентификаторами без передачи бизнес-данных.' },
  { num: '04', title: 'Стандартный CPU', text: 'Задача, которая вешала сервер на 20 минут, выполняется за 0.4 мс без GPU-кластеров и дополнительной инфраструктуры.' },
]

const TABLE_ROWS = [
  { metric: 'Время расчёта матрицы', before: '~20 мин (SQL / Python)', after: '0.4 мс (libardon.so)', delta: '×3 000 000', highlight: true },
  { metric: 'Активных позиций в матрице', before: '100% (включая дубли)', after: '70–85% (очищено)', delta: '−30% неликвидов', highlight: false },
  { metric: 'Средняя маржинальность', before: '38.8%', after: '43.1%', delta: '+4.3 п.п.', highlight: false },
  { metric: 'Оборотный капитал', before: 'Заморожен в дублях', after: 'Высвобождён', delta: 'до 59% разморозки', highlight: false },
]

export default function Slide4() {
  return (
    <div className="slide s4 anim-fade">
      <div className="slide-inner">
        <div className="label anim-fade anim-fade--d1">Низкоуровневое ядро</div>

        {/* Big number hero */}
        <div className="s4__hero anim-fade anim-fade--d2">
          <span className="s4__big">0.4</span>
          <div>
            <span className="s4__unit">мс</span>
            <p style={{ fontFamily: 'var(--f-head)', fontSize: 'clamp(.875rem,1.5vw,1.125rem)', fontWeight: 600, color: 'var(--ink-2)', marginTop: '.25rem', letterSpacing: '-.02em' }}>
              расчёт ценового равновесия Курно
            </p>
          </div>
        </div>

        {/* Before / After bars */}
        <div className="s4__bar-section anim-fade anim-fade--d3">
          <div className="s4__bar-row">
            <span className="s4__bar-label mono">SQL / Python</span>
            <div className="s4__bar-track">
              <div className="s4__bar-fill s4__bar-fill--before">
                <span className="s4__bar-val">1 200 000 мс&nbsp;<span style={{ opacity: .65, fontSize: '.75em' }}>(20 мин)</span></span>
              </div>
            </div>
          </div>
          <div className="s4__bar-row">
            <span className="s4__bar-label s4__bar-label--accent mono">libardon.so</span>
            <div className="s4__bar-track">
              <div className="s4__bar-fill s4__bar-fill--after">
                <span className="s4__bar-val">0.4 мс</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="s4__cards anim-fade anim-fade--d4">
          {CARDS.map((c) => (
            <div className="card" key={c.num}>
              <span className="s4__card-num">{c.num}</span>
              <h3 className="h3" style={{ fontSize: 'clamp(.875rem,1.4vw,1rem)', marginBottom: '.4rem' }}>{c.title}</h3>
              <p className="body-sm">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Data table */}
        <div className="s4__table-wrap anim-fade anim-fade--d5">
          <table className="s4__table">
            <thead>
              <tr>
                <th>Метрика</th>
                <th>До (1С / ERP)</th>
                <th>После MF Ardon</th>
                <th>Дельта</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((r) => (
                <tr key={r.metric}>
                  <td>{r.metric}</td>
                  <td className="mono">{r.before}</td>
                  <td className="mono accent" style={{ fontWeight: r.highlight ? 700 : 400 }}>{r.after}</td>
                  <td className="mono accent">{r.delta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
