import SkillBar from './SkillBar'

const SkillGroup = ({ title, skills, animate }) => (
  <div className="skill-group-card">
    <div className="skill-group-header">
      <span className="skill-group-title">{title}</span>
      <span className="skill-group-count">{skills.length} skills</span>
    </div>
    {skills.map((skill, i) => (
      <SkillBar key={skill.name} {...skill} animate={animate} delay={i * 0.07} />
    ))}
  </div>
)

export default SkillGroup