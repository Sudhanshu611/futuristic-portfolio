import { useEffect, useRef } from 'react'

const DataCard = ({ label, value, unit, sub, showSparkline, showCursor }) => {
  const sparkRef = useRef(null)

  useEffect(() => {
    if (!showSparkline || !sparkRef.current) return
    const render = () => {
      sparkRef.current.innerHTML = ''
      Array.from({ length: 10 }).forEach(() => {
        const h = 0.3 + Math.random() * 0.7
        const bar = document.createElement('div')
        bar.className = `spark-bar${h > 0.75 ? ' spark-bar--hi' : ''}`
        bar.style.height = `${h * 24}px`
        sparkRef.current.appendChild(bar)
      })
    }
    render()
    const id = setInterval(render, 2200)
    return () => clearInterval(id)
  }, [showSparkline])

  return (
    <div className="data-card">
      <div className="data-card-label">{label}</div>
      <div className="data-card-value">
        {value}
        <span className="data-card-unit">{unit}</span>
      </div>
      <div className="data-card-sub">
        {sub}
        {showCursor && <span className="hero-cursor" />}
      </div>
      {showSparkline && <div ref={sparkRef} className="sparkline" />}
    </div>
  )
}

export default DataCard