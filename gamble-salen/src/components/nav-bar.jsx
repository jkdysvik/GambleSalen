import './nav-bar.css'
import { useState, useEffect } from 'react'

export default function NavBar() {
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`nav-bar ${isHidden ? 'hidden' : ''}`}>
      <img src="/assets/Logo.png" alt="Gamble Salen Logo" />
    </nav>
  )
}
