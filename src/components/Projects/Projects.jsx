import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projectsData } from '../../data/projectsData'
import { fadeInUp, staggerContainer } from '../../animations/variants'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('all')

  const { filters, projects } = projectsData

  const visible = projects.filter(
    p => activeFilter === 'all' || p.cat === activeFilter
  )

  return (
    <section ref={ref} className="projects-section">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        className="projects-inner"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="section-tag-row">
          <span className="section-tag-line" />
          04 &nbsp;/&nbsp; PROJECTS
        </motion.div>

        <motion.h2 variants={fadeInUp} className="about-heading">
          Things I've <span className="accent-text">built</span>.
        </motion.h2>

        {/* Filters */}
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

        {/* Grid */}
        <motion.div variants={fadeInUp} className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visible.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0  }}
                exit={{ opacity: 0, y: -8    }}
                transition={{ duration: 0.3  }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="about-cta-row" style={{ marginTop: '48px' }}>
          <a
            href="https://github.com/Sudhanshu611"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            view all on github
          </a>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Projects