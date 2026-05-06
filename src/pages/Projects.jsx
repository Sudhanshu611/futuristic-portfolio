import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const ProjectPage = () => {
  const nav = useNavigate()
  useEffect(() => { nav('/#projects', { replace: true }) }, [])
  return null
}
export default ProjectPage