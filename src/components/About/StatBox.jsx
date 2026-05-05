const StatBox = ({ value, unit, label }) => (
  <div className="about-stat-box">
    <span className="about-stat-num">
      {value}<span className="about-stat-unit">{unit}</span>
    </span>
    <span className="about-stat-label">{label}</span>
  </div>
)

export default StatBox