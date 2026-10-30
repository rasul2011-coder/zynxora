import ZynxLogo from '../assets/zynxora-logo.svg'

const LINKS = [
  { href: '#problem',  label: 'Проблема' },
  { href: '#solution', label: 'Решение'  },
  { href: '#model',    label: 'Модель'   },
  { href: '#cta',      label: 'Пилот'    },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo-row">
            <img src={ZynxLogo} alt="ZynxOra Research" className="footer__logo-img" />
            <span className="footer__logo-name">
              ZynxOra&nbsp;<span>Research</span>
            </span>
          </div>
          <span className="footer__tagline mono">
            libardon.so&nbsp;·&nbsp;C/C++17&nbsp;·&nbsp;Zero-Knowledge
          </span>
        </div>

        {/* Links */}
        <nav aria-label="Ссылки в подвале">
          <ul className="footer__links" role="list">
            {LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className="footer__link">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right */}
        <div className="footer__right">
          <span className="footer__sandbox mono">sandbox: 162.35.31.11:8000</span>
          <span className="footer__year">© 2024 MF Ardon · ZYNXORA Research</span>
        </div>
      </div>
    </footer>
  )
}
