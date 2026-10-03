import { User, Laptop } from "lucide-react";
import experience from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experiences" className="max-w-7xl mx-auto px-6 py-20">
      <span className="section-eyebrow">Expériences</span>
      <h2 className="section-title mt-4 mb-10">Mon parcours professionnel</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Illustration animée */}
        <div className="relative hidden md:flex items-center justify-center h-[380px]">
          <div className="absolute w-[220px] h-[220px] rounded-full bg-accent/20 blur-[80px] animate-float-slow" />
          <div className="absolute w-[160px] h-[160px] rounded-full bg-indigo-500/20 blur-[70px] animate-float-slow-reverse" />

          <div className="relative w-40 h-40 rounded-3xl bg-bg-card border border-accent/30 flex items-center justify-center shadow-[0_0_60px_-10px_rgba(34,211,238,0.4)] animate-float">
            <Laptop size={64} className="text-accent" />
          </div>
        </div>

        {/* Timeline des expériences */}
        <div className="space-y-5">
          {experience.map((exp) => (
            <div
              key={exp.title}
              className="card p-5 hover:border-accent/30 transition-colors"
            >
              <p className="text-emerald-400 text-sm font-medium text-center mb-4">
                ({exp.period})
              </p>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                  <User size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-ink tracking-wide">
                    {exp.title}
                  </p>
                  <p className="text-sm text-ink-muted mt-0.5">
                    {exp.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}