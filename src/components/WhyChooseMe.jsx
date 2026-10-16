import { Gem, Rocket, MessageCircle, Heart } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const reasons = [
  {
    icon: Gem,
    titleKey: "why.items.quality.title",
    descKey: "why.items.quality.description",
  },
  {
    icon: Rocket,
    titleKey: "why.items.performance.title",
    descKey: "why.items.performance.description",
  },
  {
    icon: MessageCircle,
    titleKey: "why.items.communication.title",
    descKey: "why.items.communication.description",
  },
  {
    icon: Heart,
    titleKey: "why.items.passion.title",
    descKey: "why.items.passion.description",
  },
];

export default function WhyChooseMe() {
  const { t } = useLanguage();

  return (
    <section id="pourquoi" className="max-w-7xl mx-auto px-6 py-20">
      <span className="section-eyebrow">{t("why.eyebrow")}</span>
      <h2 className="section-title mt-4 mb-10">{t("why.title")}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div
              key={reason.titleKey}
              className="card p-5 hover:border-accent/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                <Icon size={20} className="text-accent" />
              </div>
              <p className="font-semibold text-ink mb-1">{t(reason.titleKey)}</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                {t(reason.descKey)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
