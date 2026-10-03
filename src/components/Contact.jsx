import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = "ton.email@example.com"; // <-- remplace par ton email
    const subject = encodeURIComponent(form.subject || "Contact depuis le portfolio");
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <span className="section-eyebrow">Contact</span>
      <h2 className="section-title mt-4 mb-10">Travaillons ensemble</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-ink-muted leading-relaxed">
            Vous avez un projet en tête ? Discutons-en. Je suis disponible pour de
            nouvelles opportunités.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm text-ink-muted">Email</p>
                <p className="text-ink">freddynya611@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm text-ink-muted">Téléphone</p>
                <p className="text-ink">+237 687389208 / +237 653486428</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm text-ink-muted">Localisation</p>
                <p className="text-ink">Douala, Cameroun</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
              className="bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
              className="bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50"
            />
          </div>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Sujet"
            className="w-full bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows={5}
            required
            className="w-full bg-bg-soft border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50 resize-none"
          />
          <button type="submit" className="btn-primary w-full justify-center">
            <Send size={18} /> Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}
