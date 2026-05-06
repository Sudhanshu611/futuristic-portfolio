import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const SkillsPage = () => {
  const nav = useNavigate()
  useEffect(() => { nav('/#skills', { replace: true }) }, [])
  return null
}
export default SkillsPage