import { Gem, Rocket, MessageCircle, Heart } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Qualité",
    description: "Code propre, maintenable et respect des standards.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Applications rapides, optimisées et sécurisées.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description: "Écoute, réactivité et suivi tout au long du projet.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Passionné par la tech et toujours en apprentissage.",
  },
];

export default function WhyChooseMe() {
  return (
    <section id="pourquoi" className="max-w-7xl mx-auto px-6 py-20">
      <span className="section-eyebrow">Pourquoi me choisir</span>
      <h2 className="section-title mt-4 mb-10">Ce que j'apporte</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div
              key={reason.title}
              className="card p-5 hover:border-accent/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                <Icon size={20} className="text-accent" />
              </div>
              <p className="font-semibold text-ink mb-1">{reason.title}</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}