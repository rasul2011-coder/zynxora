import { useEffect, useRef } from 'react'

const CARDS = [
  { num: '01', title: 'C / C++17 Native ABI',   text: 'Отказ от тяжёлых фреймворков. Минимальный overhead, максимальная скорость — без JVM, Python runtime или WASM.' },
  { num: '02', title: '24-мерное поле',          text: 'Алгоритм проецирует поток продаж в многомерное реляционное поле, отсекает товары-каннибалы и находит точку максимальной прибыли.' },
  { num: '03', title: 'Zero-Knowledge',          text: 'Названия товаров остаются на вашей стороне. Ядро работает с анонимизированными идентификаторами без передачи бизнес-данных.' },
  { num: '04', title: 'Стандартный CPU',         text: 'Задача, которая вешала сервер БД на 20 минут, выполняется за 0.4 мс без GPU-кластеров и дополнительной инфраструктуры.' },
]

const TABLE = [
  { m: 'Время расчёта матрицы',    b: '~20 мин (SQL / Python)',  a: '0.4 мс (libardon.so)', d: '×3 000 000',      hl: true  },
  { m: 'Активных позиций',         b: '100% (включая дубли)',     a: '70–85% (очищено)',     d: '−30% неликвидов', hl: false },
  { m: 'Средняя маржинальность',   b: '38.8%',                   a: '43.1%',                d: '+4.3 п.п.',        hl: false },
  { m: 'Оборотный капитал',        b: 'Заморожен в дублях',      a: 'Высвобождён',          d: 'до 59% разморозки',hl: false },
]

export default function Technology() {
  const beforeRef = useRef<HTMLDivElement>(null)
  const afterRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bars = [beforeRef.current, afterRef.current].filter(Boolean) as HTMLDivElement[]
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animated')
          io.unobserve(e.target)
        }
      })
    }, { threshold: .4 })
    bars.forEach(b => io.observe(b))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" id="solution">
      <div className="container">
        <span className="label" data-aos="fade-right" data-aos-duration="500">Низкоуровневое ядро</span>

        {/* Big number */}
        <div className="tech__hero" data-aos="fade-up" data-aos-duration="800">
          <span className="tech__big">0.4</span>
          <div>
            <span className="tech__unit">мс</span>
            <p className="tech__title-sub">расчёт ценового равновесия Курно</p>
          </div>
        </div>

        {/* Before / After bar */}
        <div className="ba" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
          <div className="ba__row">
            <span className="ba__label mono">SQL / Python</span>
            <div className="ba__track">
              <div ref={beforeRef} className="ba__fill ba__fill--before">
                <span className="ba__val">
                  1 200 000 мс&nbsp;
                  <span style={{ opacity: .65, fontSize: '.78em' }}>(20 мин)</span>
                </span>
              </div>
            </div>
          </div>
          <div className="ba__row">
            <span className="ba__label ba__label--accent mono">libardon.so</span>
            <div className="ba__track">
              <div ref={afterRef} className="ba__fill ba__fill--after">
                <span className="ba__val">0.4 мс</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="tech__cards">
          {CARDS.map((c, i) => (
            <div className="card" key={c.num}
              data-aos="fade-up" data-aos-duration="700" data-aos-delay={i * 70}>
              <span className="tech__card-num">{c.num}</span>
              <h3 className="h3" style={{ fontSize: 'clamp(.875rem,1.35vw,1rem)', marginBottom: '.4rem' }}>{c.title}</h3>
              <p className="body-sm">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Data table */}
        <div className="data-table-wrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
          <table className="data-table">
            <thead>
              <tr>
                <th>Метрика</th>
                <th>До (1С / ERP)</th>
                <th>После MF Ardon</th>
                <th>Дельта</th>
              </tr>
            </thead>
            <tbody>
              {TABLE.map(r => (
                <tr key={r.m}>
                  <td>{r.m}</td>
                  <td className="mono">{r.b}</td>
                  <td className={`mono accent${r.hl ? '' : ''}`} style={{ fontWeight: r.hl ? 700 : 400 }}>{r.a}</td>
                  <td className="mono accent">{r.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
