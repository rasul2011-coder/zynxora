import { useState, useRef } from 'react'

const TIMELINE = [
  { day: 'Четверг',       desc: 'Передача SDK бэкенд-лиду',                     active: false },
  { day: 'Пятница',       desc: 'Прогон CSV/XLS-выгрузки в песочнице',          active: false },
  { day: 'Вторник 15:00', desc: 'Разбор дельты прибыли, старт пилотной группы', active: true  },
]

export default function Cta() {
  const [sent, setSent]   = useState(false)
  const [err,  setErr]    = useState(false)
  const [busy, setBusy]   = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (busy) return
    const form = formRef.current!
    const name    = (form.elements.namedItem('name')    as HTMLInputElement).value.trim()
    const email   = (form.elements.namedItem('email')   as HTMLInputElement).value.trim()
    const company = (form.elements.namedItem('company') as HTMLInputElement).value.trim()

    if (!name)    { shake(form.elements.namedItem('name')    as HTMLInputElement); return }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      shake(form.elements.namedItem('email') as HTMLInputElement); return
    }

    setBusy(true)
    try {
      const res = await fetch('https://formspree.io/f/mzedqoyp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, company }),
      })
      if (res.ok) { setSent(true) }
      else        { setErr(true); setBusy(false) }
    } catch {
      setErr(true); setBusy(false)
    }
  }

  function shake(el: HTMLInputElement) {
    el.style.borderColor = '#D94F3D'
    el.style.animation = 'none'
    void el.offsetHeight
    el.style.animation = 'shake .35s ease'
    el.addEventListener('animationend', () => {
      el.style.animation = ''
      el.style.borderColor = ''
    }, { once: true })
  }

  return (
    <section className="section cta" id="cta">
      <div className="container">
        <span className="label" data-aos="fade-right" data-aos-duration="500">Следующий шаг</span>

        <h2 className="h2 cta__title" data-aos="fade-up" data-aos-duration="700">
          Тестовый прогон на историческом срезе<br />
          одного магазина до конца недели.
        </h2>

        <p className="body-lg" style={{ marginBottom: 0, maxWidth: 660 }}
          data-aos="fade-up" data-aos-duration="600" data-aos-delay="80">
          Передайте SDK вашему бэкенд-лиду и прогоните обезличенную CSV/XLS-выгрузку
          через песочницу{' '}
          <span className="mono accent" style={{ fontSize: '.95em' }}>http://162.35.31.11:8000</span>.
        </p>

        {/* Timeline */}
        <div className="timeline" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <div className="timeline__track" aria-hidden="true" />
          {TIMELINE.map(s => (
            <div className="timeline__step" key={s.day}>
              <div className={`timeline__dot${s.active ? ' timeline__dot--active' : ''}`} />
              <div className="timeline__content">
                <span className={`timeline__day${s.active ? ' accent' : ''}`}>{s.day}</span>
                <span className="timeline__desc">{s.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* API block */}
        <div className="cta__api" data-aos="fade-up" data-aos-duration="600" data-aos-delay="150">
          <span className="cta__api-text">POST /v1/recommend</span>
          <span className="cta__api-sep" aria-hidden="true">·</span>
          <span className="cta__api-text">X-Api-Key: ardon-client-a7be195bd445518e</span>
          <span className="cta__api-sep" aria-hidden="true">·</span>
          <span className="cta__api-text">TTL: 3600s</span>
        </div>

        {/* Form */}
        <div className="cta__form" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
          <p className="cta__form-sub">
            Оставьте контакт — пришлём SDK и выдадим персональный API-ключ в течение часа.
          </p>

          {!sent && !err && (
            <form ref={formRef} className="cta__fields" onSubmit={handleSubmit} noValidate>
              <input name="name"    className="cta__input" placeholder="Имя и должность"      autoComplete="name"         required />
              <input name="email"   className="cta__input" placeholder="Рабочий email"        autoComplete="email"  type="email" required />
              <input name="company" className="cta__input" placeholder="Название платформы"   autoComplete="organization" />
              <button type="submit" className="btn btn--primary cta__submit" disabled={busy}>
                {busy ? 'Отправляем…' : 'Получить SDK и API-ключ →'}
              </button>
              <p className="cta__privacy">Данные используются только для выдачи доступа. Никакого спама.</p>
            </form>
          )}

          {sent && (
            <div className="cta__success show">
              <div className="cta__success-icon">✓</div>
              <h3>Заявка принята</h3>
              <p>Пришлём SDK и персональный API-ключ в течение часа.</p>
            </div>
          )}

          {err && !sent && (
            <div className="cta__success show">
              <div className="cta__success-icon">✗</div>
              <h3>Что-то пошло не так</h3>
              <p>Напишите напрямую: <strong>janrasula.2011@gmail.com</strong></p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
