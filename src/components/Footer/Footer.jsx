import { motion } from 'framer-motion'
// import { GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react'
// import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import {ArrowUp } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../animations/variants'

const socials = [
  { symbol: 'GH', label: 'GitHub',   href: 'https://github.com/Sudhanshu611' },
  { symbol: 'LI', label: 'LinkedIn', href: 'https://linkedin.com/in/sudhanshu-singh' },
  { symbol: 'ML', label: 'Email',    href: 'mailto:your@email.com' },
]

const navLinks = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'skills', href: '/skills' },
  { label: 'projects', href: '/projects' },
  { label: 'contact', href: '/contact' },
]

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer-root">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-40px' }}
        className="footer-inner"
      >
        {/* ── Top row ── */}
        <motion.div variants={fadeInUp} className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            
            <p className="footer-tagline">
              Building intelligent systems
              <br />
              at the intersection of data & AI.
            </p>
          </div>

          {/* Nav links */}
          <div className="footer-nav">
            <div className="about-field-label" style={{ marginBottom: '14px' }}>
              // pages
            </div>
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="footer-nav-link">
                {label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="footer-socials-col">
            <div className="about-field-label" style={{ marginBottom: '14px' }}>
              // connect
            </div>

            {socials.map((social) => (
  <a
    key={social.label}
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    className="footer-social-link"
  >
    <span className="footer-social-icon">{social.symbol}</span>
    {social.label}
  </a>
))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={fadeInUp} className="about-divider" />

        {/* Bottom row */}
        <motion.div variants={fadeInUp} className="footer-bottom">
          <span className="footer-copy">
            <span className="footer-copy-accent">©</span>{' '}
            {new Date().getFullYear()} Sudhanshu Singh
            <span className="footer-copy-dim"> · built with React & Vite</span>
          </span>

          <span className="footer-status">
            <span
              className="nav-pulse-dot"
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--color-accent)',
                marginRight: 8,
              }}
            />
            open to opportunities
          </span>

          <button
            onClick={scrollToTop}
            className="footer-top-btn"
            aria-label="scroll to top"
          >
            <ArrowUp size={12} />
            back to top
          </button>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer