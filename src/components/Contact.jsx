// ---------------------------------------------------------------
// Section Contact : affiche mes coordonnées + un formulaire dont
// les messages sont enregistrés dans la base Supabase (table "contacts")
// ---------------------------------------------------------------
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa6";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { supabase } from "../lib/supabase.js"; // client Supabase (voir src/lib/supabase.js)

// Liste des réseaux sociaux affichés sous mes coordonnées
const socials = [
  { label: "WhatsApp", href: "https://wa.me/237653486428", Icon: FaWhatsapp },
  { label: "Facebook", href: "https://facebook.com/Freddy Nya", Icon: FaFacebookF },
  { label: "TikTok", href: "https://tiktok.com/@ton-pseudo", Icon: FaTiktok },
  { label: "Instagram", href: "https://instagram.com/nyafreddyraoul20", Icon: FaInstagram },
];

// Valeurs de départ du formulaire (sert aussi à le vider après l'envoi)
// "website" est un champ piège anti-spam : un vrai visiteur ne le voit jamais
const initialForm = { name: "", email: "", subject: "", message: "", website: "" };

export default function Contact() {
  // Fonction de traduction (FR/EN) fournie par le contexte de langue
  const { t } = useLanguage();

  // Contenu actuel du formulaire
  const [form, setForm] = useState(initialForm);

  // État de l'envoi : "idle" (rien), "sending" (en cours), "success" ou "error"
  const [status, setStatus] = useState("idle");

  // Met à jour le champ modifié (name, email, subject, message...)
  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Appelée quand on clique sur "Envoyer"
  const handleSubmit = async (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    // Anti-spam : si le champ caché est rempli, c'est un robot -> on ignore
    if (form.website) return;

    setStatus("sending");

    // Enregistrement du message dans la table "contacts" de Supabase
    const { error } = await supabase.from("contacts").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });

    // En cas d'erreur : on l'affiche dans la console et on prévient le visiteur
    if (error) {
      console.error("Erreur Supabase :", error);
      setStatus("error");
      return;
    }

    // Succès : on vide le formulaire et on affiche la confirmation
    setForm(initialForm);
    setStatus("success");
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      {/* Titre de la section */}
      <span className="section-eyebrow">{t("contact.eyebrow")}</span>
      <h2 className="section-title mt-4 mb-10">{t("contact.title")}</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* ---------- Colonne gauche : coordonnées ---------- */}
        <div>
          <p className="text-ink-muted leading-relaxed">
            {t("contact.intro")}
          </p>

          <div className="mt-8 space-y-5">
            {/* Email */}
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm text-ink-muted">{t("contact.email")}</p>
                <p className="text-ink">freddynya611@gmail.com</p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm text-ink-muted">{t("contact.phone")}</p>
                <p className="text-ink">+237 687389208 / +237 653486428</p>
              </div>
            </div>

            {/* Localisation */}
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

          {/* Réseaux sociaux */}
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

        {/* ---------- Colonne droite : formulaire ---------- */}
        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Nom */}
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.namePlaceholder")}
              required
              maxLength={100}
              className="bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50"
            />
            {/* Email du visiteur */}
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact.emailPlaceholder")}
              required
              maxLength={150}
              className="bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50"
            />
          </div>

          {/* Sujet (facultatif) */}
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder={t("contact.subjectPlaceholder")}
            maxLength={150}
            className="w-full bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50"
          />

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t("contact.messagePlaceholder")}
            rows={5}
            required
            maxLength={2000}
            className="w-full bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50 resize-none"
          />

          {/* Champ piège anti-spam : caché aux humains, rempli par les robots */}
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          {/* Bouton d'envoi : désactivé pendant l'envoi pour éviter les doublons */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={18} />{" "}
            {status === "sending" ? t("contact.sending") : t("contact.send")}
          </button>

          {/* Message de confirmation */}
          {status === "success" && (
            <p className="text-emerald-400 text-sm">{t("contact.success")}</p>
          )}

          {/* Message d'erreur */}
          {status === "error" && (
            <p className="text-red-400 text-sm">{t("contact.error")}</p>
          )}
        </form>
      </div>
    </section>
  );
}