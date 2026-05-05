const statusColors = {
  'completed':  'rgba(0, 255, 180, 0.6)',
  'in progress': 'rgba(255, 200, 0, 0.6)',
}

const ProjectCard = ({ title, desc, stack, metrics, status, github, live }) => (
  <div className="project-card">

    {/* Header */}
    <div className="project-card-header">
      <div className="project-card-title">{title}</div>
      <span
        className="project-card-status"
        style={{ color: statusColors[status] ?? 'rgba(0,255,180,0.4)' }}
      >
        {status}
      </span>
    </div>

    {/* Description */}
    <p className="project-card-desc">{desc}</p>

    {/* Metric */}
    <div className="project-card-metric">
      <span className="project-card-metric-label">{metrics.label}</span>
      <span className="project-card-metric-value">{metrics.value}</span>
    </div>

    {/* Stack */}
    <div className="project-card-stack">
      {stack.map(s => (
        <span key={s} className="project-card-chip">{s}</span>
      ))}
    </div>

    {/* Links */}
    <div className="project-card-links">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="project-card-link">
          GH / source
        </a>
      )}
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer" className="project-card-link project-card-link--accent">
          ↗ live demo
        </a>
      )}
    </div>
  </div>
)

export default ProjectCard