import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import CodingProfiles from './components/CodingProfiles.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen bg-page text-text">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Contact />
      </main>
    </div>
  )
}

export default App

