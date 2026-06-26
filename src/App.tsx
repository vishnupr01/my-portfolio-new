import Navbar from "./components/Navabar";
import MarqueeBelt from "./components/MarqueeBelt";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Architecture from "./sections/Architecture";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-inter overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <MarqueeBelt />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
