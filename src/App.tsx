import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogoMarquee from "./components/LogoMarquee";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Architecture from "./sections/Architecture";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

// One centred column; wide enough for the diagram, narrow enough to breathe
function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-[960px] px-6">{children}</div>;
}

function App() {
  return (
    <div id="top" className="min-h-screen bg-bg text-fg">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Container>
          <Hero />
          <About />
        </Container>
        {/* Full-width so the logos glide edge to edge */}
        <LogoMarquee />
        <Container>
          <Experience />
          <Architecture />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </Container>
      </main>
    </div>
  );
}

export default App;
