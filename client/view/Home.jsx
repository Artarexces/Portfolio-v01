import Navbar from "../src/Components/Navbar"
import Header from "../src/Components/Header"
import Skills from "../src/Components/Skills"
import Projects from "../src/Components/Projects"
import Contact from "../src/Components/Contact"
import Footer from "../src/Components/Footer"


function Home() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
