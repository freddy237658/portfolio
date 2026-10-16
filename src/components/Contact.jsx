import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa6";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const socials = [
  { label: "WhatsApp", href: "https://wa.me/237687389208", Icon: FaWhatsapp },
  { label: "Facebook", href: "https://facebook.com/ton-profil", Icon: FaFacebookF },
  { label: "TikTok", href: "https://tiktok.com/@ton-pseudo", Icon: FaTiktok },
  { label: "Instagram", href: "https://instagram.com/ton-profil", Icon: FaInstagram },
];

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = "ton.email@example.com"; // <-- remplace par ton email
    const subject = encodeURIComponent(form.subject || t("contact.defaultSubject"));
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <span className="section-eyebrow">{t("contact.eyebrow")}</span>
      <h2 className="section-title mt-4 mb-10">{t("contact.title")}</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-ink-muted leading-relaxed">
            {t("contact.intro")}
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm text-ink-muted">{t("contact.email")}</p>
                <p className="text-ink">freddynya611@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm text-ink-muted">{t("contact.phone")}</p>
                <p className="text-ink">+237 687389208 / +237 653486428</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm text-ink-muted">{t("contact.location")}</p>
                <p className="text-ink">Douala, Cameroun</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-ink-muted mb-3">{t("contact.socials")}</p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-11 h-11 rounded-xl bg-bg-card border border-white/10 flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent/50 hover:-translate-y-0.5 transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.namePlaceholder")}
              required
              className="bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact.emailPlaceholder")}
              required
              className="bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50"
            />
          </div>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder={t("contact.subjectPlaceholder")}
            className="w-full bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t("contact.messagePlaceholder")}
            rows={5}
            required
            className="w-full bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50 resize-none"
          />
          <button type="submit" className="btn-primary w-full justify-center">
            <Send size={18} /> {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
