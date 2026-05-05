import { useEffect, useRef, useState } from 'react'

// Maps level string → label shown on the right
const LEVEL_LABELS = {
  core:       'core',
  proficient: 'proficient',
  learning:   'learning',
  exploring:  'exploring',
}

const SkillBar = ({ name, pct, level, animate, delay = 0 }) => {
  const [width, setWidth] = useState(0)
  const fired = useRef(false)

  useEffect(() => {
    if (animate && !fired.current) {
      fired.current = true
      const t = setTimeout(() => setWidth(pct), delay * 1000 + 120)
      return () => clearTimeout(t)
    }
    // Reset when re-filtering
    if (!animate) {
      fired.current = false
      setWidth(0)
    }
  }, [animate, pct, delay])

  const isCore = level === 'core'

  return (
    <div className="skill-bar-item">
      <div className="skill-bar-row">
        <span className="skill-bar-name">{name}</span>
        <div className="skill-bar-meta">
          <span className="skill-bar-pct">{pct}%</span>
          <span className="skill-bar-level">{LEVEL_LABELS[level] ?? level}</span>
        </div>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill${isCore ? ' skill-bar-fill--core' : ''}`}
          style={{ width: `${width}%`, transition: `width 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s` }}
        />
      </div>
    </div>
  )
}

export default SkillBar