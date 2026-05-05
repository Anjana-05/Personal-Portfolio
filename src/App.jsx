import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import CodingProfiles from './components/CodingProfiles.jsx'
import Contact from './components/Contact.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-page text-text">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <CodingProfiles />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App

