import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../animations/variants'

const socials = [
  { symbol: 'GH', label: 'GitHub',    sub: '@Sudhanshu611',       href: 'https://github.com/Sudhanshu611' },
  { symbol: 'LI', label: 'LinkedIn',  sub: '@sudhanshu-singh',    href: 'https://linkedin.com/in/sudhanshu-singh' },
  { symbol: 'ML', label: 'Email',     sub: 'your@email.com',      href: 'mailto:your@email.com' },
]

const Contact = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    // ── Swap this URL for your real form endpoint (Formspree, Web3Forms, etc.) ──
    try {
      await new Promise(r => setTimeout(r, 1200)) // simulated delay
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section ref={ref} className="contact-section">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        className="contact-inner"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="section-tag-row">
          <span className="section-tag-line" />
          05 &nbsp;/&nbsp; CONTACT
        </motion.div>

        <motion.h2 variants={fadeInUp} className="about-heading">
          Let's <span className="accent-text">connect</span>.
        </motion.h2>

        <motion.p variants={fadeInUp} className="contact-intro">
          Open to internships, research collaborations, and interesting problems.
          <br />Drop a message — I usually reply within 24 hours.
        </motion.p>

        {/* Two column layout */}
        <div className="contact-grid">

          {/* LEFT — Form */}
          <motion.div variants={fadeInUp}>
            <div className="about-field-label" style={{ marginBottom: '20px' }}>// send a message</div>

            <div className="contact-form">
              {/* Name */}
              <div className="contact-field">
                <label className="contact-label" htmlFor="name">name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact-input"
                  placeholder="Sudhanshu Singh"
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === 'sending' || status === 'sent'}
                />
              </div>

              {/* Email */}
              <div className="contact-field">
                <label className="contact-label" htmlFor="email">email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'sending' || status === 'sent'}
                />
              </div>

              {/* Message */}
              <div className="contact-field">
                <label className="contact-label" htmlFor="message">message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="contact-input contact-textarea"
                  placeholder="Hey, I'd love to collaborate on..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === 'sending' || status === 'sent'}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === 'sending' || status === 'sent'}
                className={`contact-submit${status === 'sending' ? ' sending' : ''}${status === 'sent' ? ' sent' : ''}`}
              >
                {status === 'idle'    && 'send message'}
                {status === 'sending' && '// transmitting...'}
                {status === 'sent'    && '// message received'}
                {status === 'error'   && 'try again'}
              </button>

              {status === 'error' && (
                <p className="contact-error">Something went wrong. Try emailing directly.</p>
              )}
            </div>
          </motion.div>

          {/* RIGHT — Socials + availability */}
          <motion.div variants={fadeInUp} className="contact-right">

            <div className="about-field-label" style={{ marginBottom: '20px' }}>// find me at</div>

            <div className="contact-socials">
              {socials.map(({ symbol, label, sub, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-card"
                >
                  <span className="contact-social-symbol">{symbol}</span>
                  <div className="contact-social-info">
                    <div className="contact-social-label">{label}</div>
                    <div className="contact-social-sub">{sub}</div>
                  </div>
                  <span className="contact-social-arrow">↗</span>
                </a>
              ))}
            </div>

            <div className="about-divider" style={{ margin: '32px 0' }} />

            {/* Availability card */}
            <div className="contact-availability">
              <div className="about-field-label" style={{ marginBottom: '12px' }}>// current status</div>
              <div className="contact-avail-row">
                <span className="nav-pulse-dot" style={{
                  display: 'inline-block',
                  width: 7, height: 7,
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  flexShrink: 0,
                }} />
                <span className="contact-avail-text">open to opportunities</span>
              </div>
              <div className="contact-avail-tags">
                {['internships', 'research', 'freelance', 'collaborations'].map(t => (
                  <span key={t} className="about-tag">{t}</span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact