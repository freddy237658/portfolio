import { GraduationCap } from "lucide-react";
import education from "../data/education.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";


export default function Formation() {
  const { t } = useLanguage();

  return (
    <section id="formation" className="max-w-7xl mx-auto px-6 py-20">
      <span className="section-eyebrow">{t("formation.eyebrow")}</span>
      <h2 className="section-title mt-4 mb-10">{t("formation.title")}</h2>


      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Liste des formations */}
        <div className="space-y-4">
          {education.map((e) => (
            <div
              key={e.id}
              className="card flex items-center gap-4 p-5 hover:border-accent/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-ink">{t(`formation.items.${e.id}.degree`)}</p>
                <p className="text-sm text-ink-muted">{t(`formation.items.${e.id}.school`)}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-ink-muted">{e.period}</p>
                <p
                  className={`text-sm font-medium ${
                    e.ongoing ? "text-accent" : "text-emerald-400"
                  }`}
                >
                  {t(`formation.items.${e.id}.status`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Illustration animée */}
        <div className="relative hidden md:flex items-center justify-center h-[380px]">
          <div className="absolute w-[220px] h-[220px] rounded-full bg-accent/20 blur-[80px] animate-float-slow" />
          <div className="absolute w-[160px] h-[160px] rounded-full bg-indigo-500/20 blur-[70px] animate-float-slow-reverse" />

          <div className="relative w-40 h-40 rounded-3xl bg-bg-card border border-accent/30 flex items-center justify-center shadow-[0_0_60px_-10px_rgba(34,211,238,0.4)] animate-float">
            <GraduationCap size={64} className="text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
