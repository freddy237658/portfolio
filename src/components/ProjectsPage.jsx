import { ArrowLeft } from "lucide-react";
import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <a href="#accueil" className="btn-outline !px-4 !py-2 text-sm">
        <ArrowLeft size={16} /> {t("projectsPage.back")}
      </a>

      <span className="section-eyebrow mt-10">{t("projectsPage.eyebrow")}</span>
      <h1 className="section-title mt-4">{t("projectsPage.title")}</h1>
      <p className="text-ink-muted mt-3 mb-10">
        {projects.length}{" "}
        {projects.length > 1 ? t("projectsPage.projects") : t("projectsPage.project")}{" "}
        {t("projectsPage.total")}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={`${p.title}-${i}`} project={p} />
        ))}
      </div>
    </main>
  );
}
