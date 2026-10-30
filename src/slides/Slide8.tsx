const TIMELINE = [
  {
    day: 'Четверг',
    desc: 'Передача SDK бэкенд-лиду',
    active: false,
  },
  {
    day: 'Пятница',
    desc: 'Прогон CSV/XLS-выгрузки в песочнице',
    active: false,
  },
  {
    day: 'Вторник 15:00',
    desc: 'Разбор дельты прибыли, старт пилотной группы',
    active: true,
  },
]

export default function Slide8() {
  return (
    <div className="slide s8 anim-fade">
      <div className="slide-inner">
        <div className="label anim-fade anim-fade--d1">Следующий шаг</div>

        <h2 className="h2 anim-fade anim-fade--d2" style={{ maxWidth: 720 }}>
          Тестовый прогон на историческом срезе<br />
          одного магазина до конца недели.
        </h2>

        <p className="body-lg anim-fade anim-fade--d3" style={{ marginBottom: 0 }}>
          Передайте SDK вашему бэкенд-лиду и прогоните обезличенную CSV/XLS-выгрузку
          одного селлера через песочницу{' '}
          <span className="mono accent" style={{ fontSize: '.95em' }}>http://162.35.31.11:8000</span>.
        </p>

        {/* Timeline */}
        <div className="s8__timeline anim-fade anim-fade--d4">
          <div className="s8__track" aria-hidden="true" />
          {TIMELINE.map((step) => (
            <div className="s8__step" key={step.day}>
              <div className={`s8__dot${step.active ? ' s8__dot--active' : ''}`} />
              <div className="s8__step-content">
                <span className={`s8__day${step.active ? ' accent' : ''}`}>{step.day}</span>
                <span className="s8__desc">{step.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* API block */}
        <div className="s8__api anim-fade anim-fade--d5">
          <span className="endpoint-text">POST /v1/recommend</span>
          <span className="endpoint-sep" aria-hidden="true">·</span>
          <span className="endpoint-text">X-Api-Key: ardon-client-a7be195bd445518e</span>
          <span className="endpoint-sep" aria-hidden="true">·</span>
          <span className="endpoint-text">TTL: 3600s</span>
        </div>

        {/* Closing note */}
        <p className="s8__cta-note anim-fade anim-fade--d6">
          <span className="body-sm" style={{ color: 'var(--ink-2)', display: 'block', textAlign: 'center' }}>
            За 48 часов показываем точный расчёт в рублях на реальной матрице вашего клиента.
            <br />
            Принимаем решение на основе цифр.
          </span>
        </p>
      </div>
    </div>
  )
}
