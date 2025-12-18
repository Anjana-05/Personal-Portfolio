import { useState, useEffect } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact']
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
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleLogoClick = (e) => {
    e.preventDefault()
    handleClick(e, 'home')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-purple-500/40 shadow-lg shadow-purple-900/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          <div className="inline-flex items-center gap-2.5">
            <a
              href="#home"
              onClick={handleLogoClick}
              className="cursor-pointer"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-white flex items-center justify-center text-lg font-bold hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200">
                A
              </div>
            </a>
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
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white hover:scale-105'
                  }`}
                >
                  <span className="text-lg font-medium">{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500" />
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

