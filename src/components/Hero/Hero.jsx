import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DataCard from './DataCard'
import { fadeInUp, staggerContainer } from '../../animations/variants'
import FeaturedWork from '../FeaturedWork/FeaturedWork'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="hero-scan-line" />
      <CornerBrackets />

      <div className="hero-layout">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="hero-sys-tag">
            <span className="hero-sys-tag-line" />
            PORTFOLIO_v2.5 &nbsp;.&nbsp; ML / AI ENGINEER
          </motion.div>

          <motion.p variants={fadeInUp} className="hero-sub-name">
            // hello, world - I'm
          </motion.p>

          <motion.h1 variants={fadeInUp} className="hero-title">
            Sudhanshu<span className="hero-accent">Singh</span>
            <span className="hero-dim">.</span>
            <br />
            <span className="hero-title-sub">
              Building intelligent<br />data systems.
            </span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="hero-tags">
            <span>machine learning</span>
            <span className="hero-sep">/</span>
            <span>data visualization</span>
            <span className="hero-sep">/</span>
            <span>ai systems</span>
          </motion.div>

          <motion.p variants={fadeInUp} className="hero-desc">
            A portfolio of models, dashboards, and intelligent systems built with{' '}
            <em className="hero-em">clean data</em>,{' '}
            <em className="hero-em">strong intuition</em>, and production-minded code.
          </motion.p>

          <motion.div variants={fadeInUp} className="hero-cta-row">
            <Link to="/projects" className="btn-primary">view projects</Link>
            <Link to="/about" className="btn-ghost">about me -&gt;</Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="hero-scroll-hint">
            <span className="hero-scroll-arrow">v</span>
            scroll to explore
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* <AIPlayground /> */}

          <FeaturedWork />
        </motion.div>
      </div>

      <div className="hero-bottom-bar">
        {[
          { text: 'STATUS: OPEN TO OPPORTUNITIES', active: true },
          { text: 'LOC: INDIA' },
          { text: 'STACK: PYTHON . PYTORCH . REACT' },
          { text: 'MODE: TRAIN . EVALUATE . DEPLOY' },
        ].map(({ text, active }) => (
          <span key={text} className={`hero-bot-item${active ? ' active' : ''}`}>
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}

const AIPlayground = () => {
  return (
    <div className="hero-playground" aria-label="Animated 3D machine learning preview">
      <div className="hero-playground-tag">// ml lab visualizer</div>

      <div className="portfolio-stage" aria-hidden="true">
        <div className="portfolio-floor" />

        <div className="ml-core">
          <div className="ml-core-cube">
            <span className="cube-face cube-face-front" />
            <span className="cube-face cube-face-top" />
            <span className="cube-face cube-face-side" />
          </div>
          <div className="ml-core-ring ml-core-ring-a" />
          <div className="ml-core-ring ml-core-ring-b" />
          <span className="ml-node ml-node-a">NLP</span>
          <span className="ml-node ml-node-b">CV</span>
          <span className="ml-node ml-node-c">EDA</span>
        </div>

        <div className="ml-readout">
          <div className="ml-readout-title">model telemetry</div>
          <div className="ml-readout-row">
            <span>acc</span>
            <strong>94.7%</strong>
          </div>
          <div className="ml-readout-row">
            <span>loss</span>
            <strong>0.08</strong>
          </div>
          <div className="ml-readout-bars">
            <span style={{ height: '38%' }} />
            <span style={{ height: '62%' }} />
            <span style={{ height: '48%' }} />
            <span style={{ height: '84%' }} />
            <span style={{ height: '70%' }} />
            <span style={{ height: '92%' }} />
          </div>
        </div>

        <div className="ml-bot-chip">
          <span className="ml-bot-eye" />
          <span className="ml-bot-eye" />
          <strong>PyTorch</strong>
        </div>
      </div>
    </div>
  )
}

const CornerBrackets = () => (
  <>
    {['tl', 'tr', 'bl', 'br'].map(pos => (
      <div key={pos} className={`hero-corner hero-corner-${pos}`} />
    ))}
  </>
)

export default Hero
