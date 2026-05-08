import NavBar from "./Components/Periferals/NavBar"
import Landing from "./Components/Cards/Landing"
import Model from "./Components/Model/Model"
import About from "./Components/Cards/About"
import Projects from "./Components/Cards/Projects"
import Career from "./Components/Cards/Career"
import Skills from "./Components/Cards/Skills"
import Contact from "./Components/Cards/Contact"
import Footer from "./Components/Periferals/Footer"


function Misc() {

  return (
    <div className="Misc">
      <NavBar />
      <Landing />
      <Model />
      <About />
      <Projects />
      <Career />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}

export default Misc;