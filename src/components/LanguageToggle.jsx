import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  const btnClass = (code) =>
    `px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
      lang === code ? "bg-accent/15 text-accent" : "text-ink-muted hover:text-ink"
    }`;

  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-white/10 p-1"
      role="group"
      aria-label={t("nav.language")}
    >
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className={btnClass("fr")}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={btnClass("en")}
      >
        EN
      </button>
    </div>
  );
}
