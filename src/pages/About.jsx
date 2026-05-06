import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const AboutPage = () => {
  const nav = useNavigate()
  useEffect(() => { nav('/#about', { replace: true }) }, [])
  return null
}
export default AboutPage