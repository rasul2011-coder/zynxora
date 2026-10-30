import { useState, useEffect } from 'react'
import Nav       from './components/Nav'
import Hero      from './components/Hero'
import Problem   from './components/Problem'
import Solutions from './components/Solutions'
import Technology from './components/Technology'
import BusinessValue from './components/BusinessValue'
import BusinessModel from './components/BusinessModel'
import Pilot     from './components/Pilot'
import Cta       from './components/Cta'
import Footer    from './components/Footer'

type Theme = 'light' | 'dark'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('zx-theme') as Theme | null
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('zx-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <Technology />
        <BusinessValue />
        <BusinessModel />
        <Pilot />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
