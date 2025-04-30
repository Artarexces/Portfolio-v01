import Navbar from "./Components/navbar"
import Header from "./Components/header"
import Skills from "./Components/skills"
import Projects from "./Components/projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import "./index.css"
import DarkModeToggle from "./Components/DarkModeToggle"


function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <DarkModeToggle />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
