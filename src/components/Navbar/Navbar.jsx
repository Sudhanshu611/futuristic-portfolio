import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import navLinks from '../../data/navLinks'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]= useState(false)

  // Add shadow/blur boost on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: 'var(--nav-height)',
          background: scrolled ? 'rgba(8,12,16,0.97)' : 'var(--color-surface)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          transition: 'background 0.3s ease',
        }}
      >
        {/* ── Logo ── */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'rgba(0,255,180,0.45)', fontSize: '13px' }}>[</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: 'var(--color-text)', letterSpacing: '0.04em' }}>
            Sudhanshu Singh
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'rgba(0,255,180,0.45)', fontSize: '13px' }}>]</span>
          {/* Pulsing status dot */}
          <span className="nav-pulse-dot" style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--color-accent)', marginLeft: '4px',
          }} />
        </NavLink>

        {/* ── Desktop Links ── */}
        <ul style={{ display: 'flex', gap: '2px', listStyle: 'none', margin: 0 }}
            className="hidden md:flex">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  display: 'block',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  background: isActive ? 'rgba(0,255,180,0.07)' : 'transparent',
                  border: isActive ? '1px solid rgba(0,255,180,0.18)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Status Indicator (desktop) ── */}
        <div className="hidden md:flex" style={{
          alignItems: 'center', gap: '8px',
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          color: 'rgba(0,255,180,0.5)', letterSpacing: '0.08em',
        }}>
          <span className="nav-pulse-dot" style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-accent)' }} />
          available
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(prev => !prev)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: 'var(--color-accent)' }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0, right: 0,
              zIndex: 99,
              background: 'rgba(8,12,16,0.98)',
              borderBottom: '1px solid var(--color-border)',
              backdropFilter: 'blur(20px)',
              padding: '12px 2rem 20px',
            }}
          >
            {navLinks.map(({ label, path, index }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  transition: 'color 0.2s',
                })}
              >
                <span style={{ color: 'rgba(0,255,180,0.3)', marginRight: '12px' }}>{index}</span>
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar