import { useState } from "react";
import skills from "../data/skills.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";


export default function Skills() {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  // On duplique la liste pour créer une boucle infinie sans coupure.
  const loop = [...skills, ...skills];

  return (
    <section id="competences" className="max-w-7xl mx-auto px-6 py-20">
      <span className="section-eyebrow">{t("skills.eyebrow")}</span>
      <h2 className="section-title mt-4 mb-10">{t("skills.title")}</h2>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* dégradés sur les bords pour un fondu propre */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent z-10" />

        <div
          className="flex gap-5 w-max animate-marquee"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {loop.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-${i}`}
                className="group flex flex-col items-center justify-center gap-3 w-32 h-32 shrink-0 rounded-2xl bg-bg-card border border-white/5 transition-transform duration-300 hover:scale-125 hover:z-20 hover:border-accent/40 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.5)]"
              >
                <Icon
                  size={34}
                  style={{ color: skill.color }}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span className="text-xs text-ink-muted group-hover:text-ink">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
