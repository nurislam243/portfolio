
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";


function App() {
  return (
    <div className="@container">
      {/* header section */}
      <Navbar></Navbar>

      {/* main section */}
      <main className="pt-20">
        <section id="home">
          <Home></Home>
        </section>

        <section id="about">
          <About ></About>
        </section>

        <section id="skills">
          <Skills></Skills>
        </section>

        <section id="projects">
          <Projects></Projects>
        </section>

        <section id="contact">
          <Contact></Contact>
        </section>
      </main>

      {/* footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
