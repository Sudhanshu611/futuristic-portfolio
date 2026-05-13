import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsData } from '../../data/projectsData'
/* ─── Replace with your actual projects ─── */
const PROJECTS = projectsData.projects.slice(0, 3).map((project, index) => {
  const colors = [
    'var(--color-accent)',
    '#4a90ff',
    '#ffd666'
  ]

  const curves = [
    [0.42, 0.55, 0.61, 0.73, 0.82, 0.88, 0.94, 0.98],
    [0.35, 0.46, 0.57, 0.68, 0.76, 0.85, 0.92, 0.97],
    [0.28, 0.39, 0.49, 0.62, 0.74, 0.83, 0.91, 0.96]
  ]

  return {
    ...project,
    tag: `0${index + 1} / ${project.cat.toUpperCase()}`,
    metric: project.metrics,
    link: project.live || project.github || '/projects',
    curve: curves[index % curves.length],
    color: colors[index % colors.length],
  }
})

/* ─── Mini sparkline chart ─── */
const Sparkline = ({ data, color }) => {
  const W = 120, H = 44, PAD = 4
  const xs = data.map((_, i) => PAD + (i / (data.length - 1)) * (W - PAD * 2))
  const ys = data.map(v => H - PAD - v * (H - PAD * 2))
  const pts = xs.map((x, i) => `${x},${ys[i]}`).join(' ')
  const areaClose = `${xs[xs.length - 1]},${H - PAD} ${xs[0]},${H - PAD}`

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      <defs>
        <linearGradient id={`sg-${color.replace(/[^a-z0-9]/gi, '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`${pts} ${areaClose}`}
        fill={`url(#sg-${color.replace(/[^a-z0-9]/gi, '')})`}
      />
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3" fill={color} />
    </svg>
  )
}

/* ─── Progress bar for auto-advance timing ─── */
const ProgressBar = ({ color, duration, active }) => (
  <div className="fw-progress-track">
    <motion.div
      className="fw-progress-fill"
      style={{ background: color }}
      key={active}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: duration / 1000, ease: 'linear' }}
    />
  </div>
)

/* ─── Main component ─── */
const INTERVAL = 4000

export const FeaturedWork = () => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const project = PROJECTS[active]

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive(i => (i + 1) % PROJECTS.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [paused, active])

  const goTo = (i) => {
    setActive(i)
    setPaused(true)
    // Resume auto-advance after user interaction settles
    setTimeout(() => setPaused(false), INTERVAL)
  }

  return (
    <div
      className="fw-root"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header row */}
      <div className="fw-header">
        <span className="fw-header-label">// selected work</span>
        <div className="fw-tabs">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              className={`fw-tab${i === active ? ' fw-tab--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`View project ${i + 1}`}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          className="fw-card"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top: tag + chart */}
          <div className="fw-card-top">
            <span className="fw-tag" style={{ color: project.color }}>{project.tag}</span>
            <Sparkline data={project.curve} color={project.color} />
          </div>

          {/* Title */}
          {/* <h3 className="fw-title">{project.title}</h3> */}
<div className="fw-title-row">
  <h3 className="fw-title">{project.title}</h3>
  <span className={`fw-status fw-status--${project.status.replace(' ', '-')}`}>
    {project.status}
  </span>
</div>
          {/* Description */}
          <p className="fw-desc">{project.desc}</p>

          {/* Metric + stack */}
          <div className="fw-card-bottom">
            <div className="fw-metric">
              <span className="fw-metric-label">{project.metric.label}</span>
              <span className="fw-metric-value" style={{ color: project.color }}>
                {project.metric.value}
              </span>
            </div>
            <div className="fw-stack">
              {project.stack.map(s => (
                <span key={s} className="fw-chip">{s}</span>
              ))}
            </div>
          </div>

          {/* Footer link */}
          {/* <a href={project.link} className="fw-link">
            view project
            <span className="fw-link-arrow">→</span>
          </a> */}
          <a
  href={project.link}
  className="fw-link"
  target="_blank"
  rel="noopener noreferrer"
>
  {project.live ? 'view live' : 'view code'}
  <span className="fw-link-arrow">→</span>
</a>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="fw-dots">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            className={`fw-dot${i === active ? ' fw-dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>

      {/* Auto-advance progress bar */}
      {!paused && (
        <ProgressBar
          color={project.color}
          duration={INTERVAL}
          active={active}
        />
      )}
    </div>
  )
}

export default FeaturedWork