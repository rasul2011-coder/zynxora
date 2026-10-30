import { useState, useEffect, useCallback } from 'react'
import ZynxLogo from '../assets/zynxora-logo.svg'

interface Props {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

function IconSun() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconMoon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const LINKS = [
  { href: '#problem',  label: 'Проблема' },
  { href: '#solution', label: 'Решение' },
  { href: '#model',    label: 'Модель' },
  { href: '#offer',    label: 'Оффер' },
]

export default function Nav({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [])

  const toggleMobile = useCallback(() => {
    setOpen(o => {
      document.body.style.overflow = o ? '' : 'hidden'
      return !o
    })
  }, [])

  // Smooth scroll with nav offset
  const handleAnchor = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMobile()
    const target = document.querySelector(href)
    if (!target) return
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }, [closeMobile])

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="navigation" aria-label="Основная навигация">
        <div className="nav__inner">
          {/* Logo */}
          <a href="#hero" className="nav__logo" onClick={e => handleAnchor(e, '#hero')} aria-label="ZynxOra Research — на главную">
            <img src={ZynxLogo} alt="" className="nav__logo-img" aria-hidden="true" />
            <span className="nav__logo-text">ZynxOra&nbsp;<span>Research</span></span>
          </a>

          {/* Desktop links */}
          <ul className="nav__links" role="list">
            {LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className="nav__link" onClick={e => handleAnchor(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="nav__right">
            {/* Theme toggle */}
            <button
              className="theme-btn"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
              title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
            >
              {theme === 'dark' ? <IconSun /> : <IconMoon />}
            </button>

            {/* CTA */}
            <a href="#cta" className="btn btn--primary" onClick={e => handleAnchor(e, '#cta')}
              style={{ padding: '.55rem 1.25rem', fontSize: '.875rem' }}>
              Запустить пилот →
            </a>

            {/* Burger */}
            <button
              className={`nav__burger${open ? ' open' : ''}`}
              onClick={toggleMobile}
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`nav__mobile${open ? ' open' : ''}`} aria-hidden={!open}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} className="nav__mobile-link" onClick={e => handleAnchor(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href="#cta" className="nav__mobile-link nav__mobile-cta" onClick={e => handleAnchor(e, '#cta')}>
          Запустить пилот →
        </a>
      </div>
    </>
  )
}
