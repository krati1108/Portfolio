import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RecruiterSnapshot from './components/RecruiterSnapshot'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <RecruiterSnapshot />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <Internships />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
