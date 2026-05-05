import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import navLinks from '../../data/navLinks'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`nav-root${scrolled ? ' nav-scrolled' : ''}`}>

        {/* ── Logo ── */}
        <NavLink to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="nav-bracket">[</span>
          <span className="nav-logo-name">Sudhanshu Singh</span>
          <span className="nav-bracket">]</span>
          <span className="nav-pulse-dot nav-logo-dot" />
        </NavLink>

        {/* ── Desktop links ── */}
        <ul className="nav-links-desktop">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' nav-link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Status (desktop) ── */}
        <div className="nav-status">
          <span className="nav-pulse-dot nav-status-dot" />
          available
        </div>

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
      </nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="mobile-menu"
              className="nav-mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              {/* Mobile status */}
              <div className="nav-mobile-status">
                <span className="nav-pulse-dot" style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }} />
                open to opportunities
              </div>

              {/* Links */}
              <div className="nav-mobile-links">
                {navLinks.map(({ label, path }, i) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `nav-mobile-link${isActive ? ' nav-mobile-link--active' : ''}`
                    }
                  >
                    <span className="nav-mobile-index">0{i + 1}</span>
                    <span className="nav-mobile-label">{label}</span>
                    <span className="nav-mobile-arrow">→</span>
                  </NavLink>
                ))}
              </div>

              {/* Mobile footer */}
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