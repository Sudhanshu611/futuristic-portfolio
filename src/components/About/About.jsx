import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { aboutData } from '../../data/aboutData'
import { fadeInUp, staggerContainer } from '../../animations/variants'
import TimelineItem from './TimelineItem'
import StatBox      from './StatBox'

/* Highlights keywords inside a bio paragraph */
const HighlightedText = ({ text, highlights }) => {
  if (!highlights?.length) return <>{text}</>

  const pattern = new RegExp(`(${highlights.map(h =>
    h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  ).join('|')})`, 'gi')

  return (
    <>
      {text.split(pattern).map((part, i) =>
        highlights.some(h => h.toLowerCase() === part.toLowerCase())
          ? <em key={i} className="about-em">{part}</em>
          : part
      )}
    </>
  )
}

const About = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const {
    name, location, email, github, linkedin,
    degree, status, bio, highlights, interests,
    stats, timeline, resumeUrl,
  } = aboutData

  return (
    <section ref={ref} className="about-section">

      {/* ── Grid background ── */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        className="about-inner"
      >
        {/* ── Section header ── */}
        <motion.div variants={fadeInUp} className="section-tag-row">
          <span className="section-tag-line" />
          02 &nbsp;/&nbsp; ABOUT
        </motion.div>

        <motion.h2 variants={fadeInUp} className="about-heading">
          Who I <span className="accent-text">am</span>.
        </motion.h2>

        {/* ── Two-column grid ── */}
        <div className="about-grid">

          {/* LEFT — Bio + Details + Interests */}
          <motion.div variants={fadeInUp} className="about-left">

            {/* Bio paragraphs */}
            {bio.map((para, i) => (
              <div key={i} className="bio-block">
                {i === 0 && <div className="about-field-label">// bio</div>}
                {i === 1 && <div className="about-field-label">// currently</div>}
                <p className="about-bio-text">
                  <HighlightedText text={para} highlights={highlights} />
                </p>
              </div>
            ))}

            <div className="about-divider" />

            {/* Details grid */}
            <div className="about-detail-grid">
              {[
                { key: 'name',     val: name },
                { key: 'location', val: location },
                { key: 'status',   val: status, accent: true },
                { key: 'email',    val: email,  link: `mailto:${email}` },
                { key: 'degree',   val: degree },
                ...(github   ? [{ key: 'github',   val: `@${github}`,   link: `https://github.com/${github}`   }] : []),
                ...(linkedin ? [{ key: 'linkedin', val: `@${linkedin}`, link: `https://linkedin.com/in/${linkedin}` }] : []),
              ].map(({ key, val, link, accent }) => (
                <div key={key} className="about-detail-item">
                  <div className="about-field-label">{key}</div>
                  <div className={`about-detail-val${accent ? ' about-detail-accent' : ''}`}>
                    {link ? <a href={link} target="_blank" rel="noopener noreferrer" className="about-link">{val}</a> : val}
                  </div>
                </div>
              ))}
            </div>

            <div className="about-divider" />

            {/* Interest tags */}
            <div className="about-field-label" style={{ marginBottom: '12px' }}>// interests</div>
            <div className="about-tags-row">
              {interests.map(tag => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Timeline + Stats */}
          <motion.div variants={fadeInUp} className="about-right">

            <div className="about-field-label" style={{ marginBottom: '20px' }}>// journey</div>

            <div className="about-timeline">
              {timeline.map((item, i) => (
                <TimelineItem key={i} {...item} />
              ))}
            </div>

            <div className="about-divider" />

            {/* Stats */}
            <div className="about-stats-row">
              {stats.map((s, i) => (
                <StatBox key={i} {...s} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── CTAs ── */}
        <motion.div variants={fadeInUp} className="about-cta-row">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            download resume
          </a>
          <a href="/projects" className="btn-ghost">
            view projects →
          </a>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default About