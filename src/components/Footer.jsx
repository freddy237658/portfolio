import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-muted">
        <p>
          FREDDY<span className="text-accent">  NYA.</span>
        </p>
        <p>© {new Date().getFullYear()} freddy nya. {t("footer.rights")}</p>
        <p>{t("footer.made")}</p>
      </div>
    </footer>
  );
}
