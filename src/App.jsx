import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import WhyChooseMe from "./components/WhyChooseMe.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Formation from "./components/Formation.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Formation />
      <Experience />
      <WhyChooseMe />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
