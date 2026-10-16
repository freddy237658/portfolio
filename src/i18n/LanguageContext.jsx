import { createContext, useContext, useEffect, useState } from "react";
import fr from "./fr.js";
import en from "./en.js";

const dictionaries = { fr, en };
const STORAGE_KEY = "portfolio-lang";

const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    // localStorage indisponible : on garde la langue par défaut.
  }
  return "fr";
}

// Fournit la langue courante à tout le site.
// Usage dans un composant : const { lang, setLang, t } = useLanguage();
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage indisponible : la langue reste active pour la session.
    }
    document.documentElement.lang = lang;
  }, [lang ]);

  // t("hero.title") va chercher la valeur dans le dictionnaire actif.
  // Si la clé n'existe pas, on retourne la clé elle-même (facile à repérer).
  const t = (key) =>
    key
      .split(".")
      .reduce((obj, part) => (obj ? obj[part] : undefined), dictionaries[lang]) ??
    key;

  const setLang = (next) => {
    if (next === "fr" || next === "en") setLangState(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage doit être utilisé dans <LanguageProvider>");
  return ctx;
}
