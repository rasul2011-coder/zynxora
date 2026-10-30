import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App'

// Init AOS
AOS.init({
  once: true,
  offset: 56,
  duration: 700,
  easing: 'ease-out-cubic',
})

// Back-to-top button
const backTop = document.createElement('button')
backTop.className = 'back-top'
backTop.innerHTML = '↑'
backTop.setAttribute('aria-label', 'Вернуться наверх')
document.body.appendChild(backTop)
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400)
}, { passive: true })

// Smooth anchor scrolling (handles any <a href="#…"> not caught by React)
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest('a[href^="#"]') as HTMLAnchorElement | null
  if (!a) return
  const id = a.getAttribute('href')
  if (!id || id === '#') return
  const target = document.querySelector(id)
  if (!target) return
  e.preventDefault()
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH - 16, behavior: 'smooth' })
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
