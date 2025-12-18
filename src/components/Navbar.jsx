import { useState, useEffect } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <div className="inline-flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-semibold">
              A
            </div>
            <span className="text-sm font-semibold tracking-wide text-[#0B1220]">
              Anjana • Portfolio
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={`relative px-1 py-2 transition-all duration-200 ease-out ${
                    isActive
                      ? 'text-[#2563EB]'
                      : 'text-[#4B5563] hover:text-[#0B1220]'
                  }`}
                >
                  <span className="text-sm font-medium">{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]" />
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

