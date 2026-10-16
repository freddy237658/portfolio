import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import WhyChooseMe from "./components/WhyChooseMe.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import Formation from "./components/Formation.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// Ancre spéciale qui affiche la page "Tous les projets" au lieu de l'accueil.
// Les autres ancres (#accueil, #contact, ...) affichent l'accueil.
const PROJECTS_HASH = "#/projets";

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const isProjectsPage = route === PROJECTS_HASH;

  useEffect(() => {
    if (isProjectsPage) {
      // Arrivée sur la page projets : on remonte en haut.
      window.scrollTo({ top: 0 });
    } else if (route && route.startsWith("#") && !route.startsWith("#/")) {
      // Retour vers une section de l'accueil (ex. "#contact") depuis la
      // page projets : on fait défiler jusqu'à la section une fois affichée.
      const el = document.querySelector(route);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [route, isProjectsPage]);

  if (isProjectsPage) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <ProjectsPage />
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

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
