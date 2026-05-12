import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import navLinks from '../../data/navLinks'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const location = useLocation()
  const isLight = theme === 'light'

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('theme-light', isLight)
    root.style.colorScheme = isLight ? 'light' : 'dark'
    localStorage.setItem('theme', theme)
  }, [isLight, theme])

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) setTimeout(() => scrollTo(hash), 100)
  }, [location])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setActiveId(e.target.id)
      }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    scrollTo(id)
  }

  return (
    <>
      <nav className={`nav-root${scrolled ? ' nav-scrolled' : ''}`}>

        {/* ── Logo ── */}
        <button className="nav-logo" onClick={() => handleNavClick('home')}>
          <span className="nav-bracket">[</span>
          <span className="nav-logo-name">Sudhanshu Singh</span>
          <span className="nav-bracket">]</span>
          <span className="nav-pulse-dot nav-logo-dot" />
        </button>

        {/* ── Desktop links ── */}
        <ul className="nav-links-desktop">
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`nav-link${activeId === id ? ' nav-link--active' : ''}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* ── Status (desktop) ── */}
          <div className="nav-status">
            <span className="nav-pulse-dot nav-status-dot" />
            available
          </div>

          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
            aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
            aria-pressed={isLight}
            title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
          >
            <span className="theme-toggle-icon theme-toggle-icon--moon">
              <Moon size={13} strokeWidth={2} />
            </span>
            <span className="theme-toggle-icon theme-toggle-icon--sun">
              <Sun size={13} strokeWidth={2} />
            </span>
            <span className="theme-toggle-thumb" />
          </button>

          {/* ── Hamburger (mobile) ── */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`nav-ham-line${menuOpen ? ' nav-ham-line--open' : ''}`} />
            <span className={`nav-ham-line nav-ham-line--mid${menuOpen ? ' nav-ham-line--open-mid' : ''}`} />
            <span className={`nav-ham-line${menuOpen ? ' nav-ham-line--open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="mobile-menu"
              className="nav-mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <div className="nav-mobile-status">
                <span className="nav-pulse-dot" style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: 'var(--color-accent)', display: 'inline-block'
                }} />
                open to opportunities
              </div>

              <div className="nav-mobile-links">
                {navLinks.map(({ label, id }, i) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`nav-mobile-link${activeId === id ? ' nav-mobile-link--active' : ''}`}
                  >
                    <span className="nav-mobile-index">0{i + 1}</span>
                    <span className="nav-mobile-label">{label}</span>
                    <span className="nav-mobile-arrow">→</span>
                  </button>
                ))}
              </div>

              <div className="nav-mobile-footer">
                <span>PORTFOLIO_v2.5</span>
                <span>·</span>
                <span>ML ENGINEER</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
