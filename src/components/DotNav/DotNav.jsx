import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import navLinks from '../../data/navLinks'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const DotNav = () => {
  const [activeId, setActiveId]   = useState('home')
  const [visible, setVisible]     = useState(false)
  const [hovered, setHovered]     = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Show after scrolling past hero
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  if (isMobile) return null 
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0  }}
          exit={{ opacity: 0, x: 16    }}
          transition={{ duration: 0.4  }}
          style={{
  position: 'fixed',
  right: '28px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 90,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
}}
        >
          {navLinks.map(({ id, label }, i) => {
            const isActive = activeId === id
            const isHov    = hovered === id
            return (
              <div key={id} style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>

                {/* Tooltip label on hover */}
                <AnimatePresence>
                  {isHov && (
                    <motion.span
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 6   }}
                      transition={{ duration: 0.15 }}
                      style={{
                        position: 'absolute', right: '20px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '9px', letterSpacing: '0.1em',
                        color: 'rgba(0,255,180,0.7)',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                      }}
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot */}
                <motion.button
                  onClick={() => scrollTo(id)}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  aria-label={`Go to ${label}`}
                  animate={{
                    width:  isActive ? 8 : 5,
                    height: isActive ? 8 : 5,
                    backgroundColor: isActive
                      ? 'rgba(0,255,180,0.9)'
                      : 'rgba(0,255,180,0.25)',
                    boxShadow: isActive
                      ? '0 0 8px rgba(0,255,180,0.4)'
                      : 'none',
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    flexShrink: 0,
                  }}
                />
              </div>
            )
          })}

          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: 0, bottom: 0,
            width: '1px',
            background: 'rgba(0,255,180,0.08)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: -1,
          }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DotNav