import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DataCard from './DataCard'
import { fadeInUp, staggerContainer } from '../../animations/variants'

const Hero = () => {
  return (
    <section className="hero-section">

      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="hero-scan-line" />
      <CornerBrackets />

      <div className="hero-layout">

        {/* ── LEFT — Main content ── */}
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="hero-sys-tag">
            <span className="hero-sys-tag-line" />
            PORTFOLIO_v2.5 &nbsp;·&nbsp; ML ENGINEER
          </motion.div>

          <motion.p variants={fadeInUp} className="hero-sub-name">
            // hello, world — I'm
          </motion.p>

          <motion.h1 variants={fadeInUp} className="hero-title">
            Sudhanshu<span className="hero-accent">Singh</span>
            <span className="hero-dim">.</span>
            <br />
            <span className="hero-title-sub">
              Building intelligent<br />systems from scratch.
            </span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="hero-tags">
            <span>machine learning</span>
            <span className="hero-sep">/</span>
            <span>quantitative models</span>
            <span className="hero-sep">/</span>
            <span>data systems</span>
          </motion.div>

          <motion.p variants={fadeInUp} className="hero-desc">
            Aspiring ML engineer obsessed with{' '}
            <em className="hero-em">learning algorithms</em> and{' '}
            <em className="hero-em">quantitative thinking</em>.
            I build things at the intersection of data, finance, and AI.
          </motion.p>

          <motion.div variants={fadeInUp} className="hero-cta-row">
            <Link to="/projects" className="btn-primary">view projects</Link>
            <Link to="/about"    className="btn-ghost">about me →</Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="hero-scroll-hint">
            <span className="hero-scroll-arrow">↓</span>
            scroll to explore
          </motion.div>
        </motion.div>

        {/* ── RIGHT — Visual + Data cards ── */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0  }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Animated neural net canvas */}
          <NeuralViz />

          {/* Data cards below the viz */}
          <div className="hero-cards">
            <DataCard label="model accuracy" value="94.7" unit="%" sub="last trained model" showSparkline />
            <DataCard label="projects built" value="12"   unit="+" sub="open source" />
            <DataCard label="learning streak" value="47"  unit="d" sub="daily commits" showCursor />
          </div>
        </motion.div>
      </div>

      {/* ── Bottom status bar ── */}
      <div className="hero-bottom-bar">
        {[
          { text: 'STATUS: OPEN TO OPPORTUNITIES', active: true },
          { text: 'LOC: INDIA' },
          { text: 'STACK: PYTHON · PYTORCH · REACT' },
          { text: '∇ GRAD_DESCENT = 0.001' },
        ].map(({ text, active }) => (
          <span key={text} className={`hero-bot-item${active ? ' active' : ''}`}>
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}

/* ── Animated neural network SVG ── */
const NeuralViz = () => {
  const layers = [
    [0.2, 0.5, 0.8],
    [0.15, 0.42, 0.68, 0.88],
    [0.15, 0.42, 0.68, 0.88],
    [0.3, 0.7],
  ]
  const W = 300, H = 160
  const layerX = layers.map((_, i) => 24 + (i / (layers.length - 1)) * (W - 48))

  const nodes = layers.flatMap((layer, li) =>
    layer.map((yRatio, ni) => ({
      x: layerX[li],
      y: 14 + yRatio * (H - 36),
      li, ni,
      active: Math.random() > 0.5,
    }))
  )

  const edges = []
  for (let li = 0; li < layers.length - 1; li++) {
    const from = nodes.filter(n => n.li === li)
    const to   = nodes.filter(n => n.li === li + 1)
    from.forEach(f => to.forEach(t =>
      edges.push({ f, t, w: Math.random() })
    ))
  }

  return (
    <div className="hero-neural-wrap">
      <div className="hero-neural-tag">// neural net · live inference</div>
      <svg viewBox={`0 0 ${W} ${H}`} className="hero-neural-svg" aria-hidden="true">

        {edges.map((e, i) => (
          <line
            key={i}
            x1={e.f.x} y1={e.f.y}
            x2={e.t.x} y2={e.t.y}
            stroke={`rgba(0,255,180,${0.03 + e.w * 0.1})`}
            strokeWidth={e.w > 0.7 ? 0.7 : 0.35}
          />
        ))}

        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x} cy={n.y} r={n.active ? 4.5 : 3.5}
              fill={n.active ? 'rgba(0,255,180,0.12)' : 'rgba(0,255,180,0.03)'}
              stroke={n.active ? 'rgba(0,255,180,0.65)' : 'rgba(0,255,180,0.18)'}
              strokeWidth={0.7}
              className={n.active ? 'hero-node-active' : ''}
            />
            {n.active && (
              <circle
                cx={n.x} cy={n.y} r={7}
                fill="none"
                stroke="rgba(0,255,180,0.1)"
                strokeWidth={0.5}
                className="hero-node-pulse"
              />
            )}
          </g>
        ))}

        {['input', 'hidden', 'hidden', 'output'].map((lbl, i) => (
          <text
            key={i}
            x={layerX[i]} y={H - 2}
            textAnchor="middle"
            fontSize="6.5"
            fill="rgba(0,255,180,0.22)"
            fontFamily="'JetBrains Mono', monospace"
          >
            {lbl}
          </text>
        ))}
      </svg>

      <div className="hero-neural-bar">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="hero-neural-bar-seg"
            style={{ animationDelay: `${i * 0.07}s` }}
          />
        ))}
      </div>
    </div>
  )
}

const CornerBrackets = () => (
  <>
    {['tl','tr','bl','br'].map(pos => (
      <div key={pos} className={`hero-corner hero-corner-${pos}`} />
    ))}
  </>
)

export default Hero