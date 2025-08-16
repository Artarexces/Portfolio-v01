import Navbar from "@/Components/Navbar"
import Header from "@/Components/Header"
// import Avatar from "@/Components/Avatar"
import Skills from "@/Components/Skills"
import Projects from "@/Components/Projects"
import Contact from "@/Components/Contact"
import Footer from "@/Components/Footer"


function Home() {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Header />
      {/* <Avatar /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
