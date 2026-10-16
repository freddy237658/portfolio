import { ArrowRight } from "lucide-react";
import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

// Nombre de projets visibles sur la page d'accueil.
// Le reste est visible sur la page dédiée ("#/projets").
const HOME_PROJECT_LIMIT = 6;

export default function Projects() {
  const { t } = useLanguage();
  const visibleProjects = projects.slice(0, HOME_PROJECT_LIMIT);

  return (
    <section id="projets" className="max-w-7xl mx-auto px-6 py-20">
      <span className="section-eyebrow">{t("projects.eyebrow")}</span>
      <h2 className="section-title mt-4 mb-10">{t("projects.title")}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {visibleProjects.map((p, i) => (
          <ProjectCard key={`${p.title}-${i}`} project={p} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a href="#/projets" className="btn-primary">
          {t("projects.seeMore")} <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
