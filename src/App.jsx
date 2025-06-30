import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";


function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        {/* <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section> */}
      </main>
    </>
  );
}

export default App;
