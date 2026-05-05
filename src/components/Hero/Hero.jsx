import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import DataCard from './DataCard'
import { fadeInUp, staggerContainer } from '../../animations/variants'

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ padding: '0 clamp(24px, 5vw, 80px)' }}
    >
      {/* ── Grid background ── */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* ── Scanning line ── */}
      <div className="hero-scan-line" />

      {/* ── Corner brackets ── */}
      <CornerBrackets />

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 max-w-xl"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* System tag */}
        <motion.div variants={fadeInUp} className="hero-sys-tag">
          <span className="hero-sys-tag-line" />
          PORTFOLIO_v2.5 &nbsp;·&nbsp; ML ENGINEER
        </motion.div>

        {/* Name */}
        <motion.p variants={fadeInUp} className="hero-sub-name">
          // hello, world — I'm
        </motion.p>

        {/* Title */}
        <motion.h1 variants={fadeInUp} className="hero-title">
          Sudhanshu<span className="hero-accent">Singh</span>
          <span className="hero-dim">.</span>
          <br />
          <span className="hero-title-sub">
            Building intelligent<br />systems from scratch.
          </span>
        </motion.h1>

        {/* Tags */}
        <motion.div variants={fadeInUp} className="hero-tags">
          <span>machine learning</span>
          <span className="hero-sep">/</span>
          <span>quantitative models</span>
          <span className="hero-sep">/</span>
          <span>data systems</span>
        </motion.div>

        {/* Description */}
        <motion.p variants={fadeInUp} className="hero-desc">
          Aspiring ML engineer obsessed with{' '}
          <em className="hero-em">learning algorithms</em> and{' '}
          <em className="hero-em">quantitative thinking</em>.
          I build things at the intersection of data, finance, and AI.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="hero-cta-row">
          <Link to="/projects" className="btn-primary">
            view projects
          </Link>
          <Link to="/about" className="btn-ghost">
            about me →
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={fadeInUp} className="hero-scroll-hint">
          <ArrowDown size={13} style={{ color: 'rgba(0,255,180,0.35)' }} />
          scroll to explore
        </motion.div>
      </motion.div>

      {/* ── Side data cards ── */}
      <motion.div
        className="hero-side-data"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.0 }}
      >
        <DataCard label="model accuracy" value="94.7" unit="%" sub="last trained model" showSparkline />
        <DataCard label="projects built"  value="12"    unit="+" sub="open source" />
        <DataCard label="learning streak" value="47"    unit="d" sub="daily commits" showCursor />
      </motion.div>

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

/* ── Corner brackets decoration ── */
const CornerBrackets = () => (
  <>
    {['tl','tr','bl','br'].map(pos => (
      <div key={pos} className={`hero-corner hero-corner-${pos}`} />
    ))}
  </>
)

export default Hero