const TimelineItem = ({ year, title, org, desc, active }) => (
  <div className="tl-item">
    <div className={`tl-dot${active ? ' tl-dot--active' : ''}`} />
    <div className="tl-year">{year}</div>
    <div className="tl-title">{title}</div>
    <div className="tl-org">{org}</div>
    <p className="tl-desc">{desc}</p>
  </div>
)

export default TimelineItem