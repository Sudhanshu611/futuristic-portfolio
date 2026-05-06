import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const ContactPage = () => {
  const nav = useNavigate()
  useEffect(() => { nav('/#contact', { replace: true }) }, [])
  return null
}
export default ContactPage