import { ExternalLink, Github } from "lucide-react";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projets" className="max-w-7xl mx-auto px-6 py-20">
      <span className="section-eyebrow">Projets</span>
      <h2 className="section-title mt-4 mb-10">Mes projets récents</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="card overflow-hidden group transition-transform duration-300 hover:-translate-y-1 hover:border-accent/30"
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg text-ink">{p.title}</h3>
              <p className="text-sm text-ink-muted mt-2 leading-relaxed">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 justify-center btn-outline !py-2 text-sm"
                >
                  <ExternalLink size={16} /> Voir le projet
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl border border-white/10 text-ink-muted hover:text-accent hover:border-accent/50 transition"
                  aria-label="Code source"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
