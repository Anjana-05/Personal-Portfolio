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
      <div className="min-h-screen bg-page text-text overflow-x-hidden">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

