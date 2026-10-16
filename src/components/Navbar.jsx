import { useEffect, useState } from "react";
import { Github, Linkedin, Send, Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import LanguageToggle from "./LanguageToggle.jsx";

const links = [
  {
    labelKey: "nav.home",
    href: "#accueil"
   },

  { labelKey: "nav.about", href: "#apropos" },
  { labelKey: "nav.skills", href: "#competences" },
  { labelKey: "nav.projects", href: "#projets" },
  { labelKey: "nav.education", href: "#formation" },
  { labelKey: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-bg/90 backdrop-blur border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#accueil" className="text-xl font-bold text-ink">
          FREDDY<span className="text-accent ">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link hover:text-accent transition-colors" >
                {t(l.labelKey)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <a
            href="https://github.com/ton-pseudo"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-white/10 text-ink-muted hover:text-accent hover:border-accent/50 transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ton-profil"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-white/10 text-ink-muted hover:text-accent hover:border-accent/50 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a href="#contact" className="btn-primary !px-4 !py-2 text-sm">
            <Send size={16} /> {t("nav.contactMe")}
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-bg/95 border-b border-white/5">
          <div className="self-start">
            <LanguageToggle />
          </div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink-muted hover:text-accent transition-colors"
            >
              {t(l.labelKey)}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
            <Send size={16} /> {t("nav.contactMe")}
          </a>
        </div>
      )}
    </header>
  );
}
