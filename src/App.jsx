import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
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
