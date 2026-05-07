import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import CodingProfiles from './components/CodingProfiles.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
      <div className="min-h-screen bg-page text-text">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6">
          <Hero />
          <About />
          <Skills />
          <CodingProfiles />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </div>
  )
}

export default App

