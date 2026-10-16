import { useLanguage } from "../i18n/LanguageContext.jsx";
import CvButton from "./CvButton.jsx";

const stats = [
  { value: "3+", labelKey: "about.stats.experience" },
  { value: "15+", labelKey: "about.stats.projects" },
  { value: "10+", labelKey: "about.stats.tech" },
  { value: "100%", labelKey: "about.stats.clients" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="apropos" className="max-w-7xl mx-auto px-6 py-20">
      <span className="section-eyebrow">{t("about.eyebrow")}</span>
      <h2 className="section-title mt-4 mb-10">{t("about.title")}</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-ink-muted leading-relaxed">
            {t("about.p1")}
          </p>
          <p className="text-ink-muted leading-relaxed mt-4">
            {t("about.p2")}
          </p>

          <CvButton className="btn-primary mt-6" />

          <div className="grid grid-cols-2 gap-4 mt-10">
            {stats.map((s) => (
              <div key={s.labelKey} className="card p-5">
                <p className="text-2xl font-bold text-accent">{s.value}</p>
                <p className="text-sm text-ink-muted mt-1">{t(s.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm group">
          <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/images/about/WhatsApp Image 2026-06-10 at 05.01.43.jpeg"
              alt={t("about.photoAlt")}
              className="w-full object-cover grayscale transition duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
            />
            {/* Calque de teinte uniforme */}
            <div className="absolute inset-0 bg-accent mix-blend-color opacity-70 transition-opacity duration-500 ease-out group-hover:opacity-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}



// const stats = [
//   { value: "3+", label: "Années d'expérience" },
//   { value: "15+", label: "Projets réalisés" },
//   { value: "10+", label: "Technologies maîtrisées" },
//   { value: "100%", label: "Clients satisfaits" },
// ];

// export default function About() {
//   return (
//     <section id="apropos" className="max-w-7xl mx-auto px-6 py-20">
//       <span className="section-eyebrow">À propos</span>
//       <h2 className="section-title mt-4 mb-10">À propos de moi</h2>

//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <p className="text-ink-muted leading-relaxed">
//             Passionné par le développement web, j'aime transformer des idées en
//             solutions digitales utiles, modernes et performantes.
//           </p>
//           <p className="text-ink-muted leading-relaxed mt-4">
//             Toujours curieux et en quête de nouvelles technologies, je m'implique
//             dans chaque projet comme si c'était le mien.
//           </p>

//           <div className="grid grid-cols-2 gap-4 mt-10">
//             {stats.map((s) => (
//               <div key={s.label} className="card p-5">
//                 <p className="text-2xl font-bold text-accent">{s.value}</p>
//                 <p className="text-sm text-ink-muted mt-1">{s.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative mx-auto w-full max-w-sm group">
//           <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
//           <div className="relative overflow-hidden rounded-2xl border border-white/10">
//             <img
//               src="/public/images/about/WhatsApp Image 2026-06-10 at 05.01.43.jpeg"
//               alt="Portrait"
//               className="w-full object-cover transition-all duration-500 ease-out grayscale-[60%] sepia-[30%] hue-rotate-[150deg] saturate-[3] brightness-90 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
