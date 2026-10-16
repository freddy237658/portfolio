import { FileText } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

// Chemin du CV dans le dossier public/.
// import.meta.env.BASE_URL permet de respecter le "base" de Vite ("./"),
// donc le lien fonctionne aussi sur GitHub Pages (sous-chemin du dépôt).
const CV_URL = `${import.meta.env.BASE_URL}cv/cv-freddy.pdf`;

export default function CvButton({ className = "btn-outline" }) {
  const { t } = useLanguage();
  return (
    <a href={CV_URL} target="_blank" rel="noreferrer" className={className}>
      <FileText size={18} /> {t("cv.viewCv")}
    </a>
  );
}
