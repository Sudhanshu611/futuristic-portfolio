import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { skillsData } from '../../data/skillsData'
import { fadeInUp, staggerContainer } from '../../animations/variants'
import SkillGroup from './SkillGroup'

const Skills = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('all')

  const { filters, groups, tools } = skillsData

  const visibleGroups = groups.filter(
    g => activeFilter === 'all' || g.cat === activeFilter
  )

  return (
    <section ref={ref} className="skills-section">

      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        className="skills-inner"
      >
        {/* ── Header ── */}
        <motion.div variants={fadeInUp} className="section-tag-row">
          <span className="section-tag-line" />
          03 &nbsp;/&nbsp; SKILLS
        </motion.div>

        <motion.h2 variants={fadeInUp} className="about-heading">
          Technical <span className="accent-text">stack</span>.
        </motion.h2>

        {/* ── Filter buttons ── */}
        <motion.div variants={fadeInUp} className="skills-filter-row">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`skills-filter-btn${activeFilter === f.id ? ' active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* ── Skill groups grid ── */}
        <motion.div
          variants={fadeInUp}
          className={`skills-grid${visibleGroups.length === 1 ? ' skills-grid--single' : ''}`}
        >
          <AnimatePresence mode="popLayout">
            {visibleGroups.map(group => (
              <motion.div
                key={group.cat}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0  }}
                exit={{ opacity: 0, y: -8     }}
                transition={{ duration: 0.35  }}
              >
                <SkillGroup {...group} animate={inView} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div variants={fadeInUp} className="about-divider" style={{ margin: '40px 0 32px' }} />

        {/* ── Tools strip ── */}
        <motion.div variants={fadeInUp}>
          <div className="about-field-label" style={{ marginBottom: '16px' }}>
            // tools & environment
          </div>
          <div className="skills-tools-row">
            {tools.map(tool => (
              <span key={tool} className="skills-tool-chip">{tool}</span>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Skills