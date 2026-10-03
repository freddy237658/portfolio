import { Rocket, Send, Github, Linkedin, MousePointer2, Database, Code2 } from "lucide-react";
import { SiReact, SiLaravel } from "react-icons/si";

// Génère une position fixe pour chaque étoile (évite qu'elles bougent au re-render)
const stars = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}));

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center overflow-hidden"
    >
      {/* Fond spatial : grille + étoiles + planètes */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Grille discrète */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Étoiles scintillantes */}
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}

        {/* Planètes / orbes lumineux */}
        <div className="absolute -top-20 right-[-80px] w-[320px] h-[320px] rounded-full bg-accent/20 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[260px] h-[260px] rounded-full bg-indigo-500/10 blur-[90px] animate-float-slow-reverse" />
        <div className="absolute top-1/3 left-1/2 w-[180px] h-[180px] rounded-full bg-accent/10 blur-[80px]" />
      </div>

      {/* Texte */}
      <div className="relative z-10">
        <span className="section-eyebrow mb-6">● Disponible pour de nouveaux projets</span>

        <p className="mt-6 text-ink-muted text-lg"> 👋 Bonjour, je suis</p>
        <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mt-2">
          FREDDY
          <br />
          <span className="text-accent">NYA .</span>
        </h1>
        <p className="mt-4 text-xl font-semibold text-accent">
          Full-Stack <span className="text-ink font-normal">Web Developer</span>
        </p>

        <p className="mt-5 text-ink-muted max-w-md leading-relaxed">
          Je conçois et développe des applications web modernes, performantes et
          adaptées aux besoins des entreprises. Spécialisé dans le développement
          frontend avec <span className="text-accent">React</span> et backend avec{" "}
          <span className="text-accent">Laravel</span>.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projets" className="btn-primary">
            <Rocket size={18} /> Voir mes projets
          </a>
          <a href="#contact" className="btn-outline">
            <Send size={18} /> Me contacter
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          
           <a href="https://github.com/ton-pseudo"
            target="_blank"
            rel="noreferrer"
            className="btn-outline !border-white/10"
          >
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/in/ton-profil"
            target="_blank"
            rel="noreferrer"
            className="btn-outline !border-white/10"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Graphique orbital */}
      <div className="relative z-10 hidden md:flex items-center justify-center h-[420px]">
        <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-white/10" />
        <div className="absolute w-[260px] h-[260px] rounded-full border border-white/10" />

        <div className="relative w-32 h-32 rounded-full bg-bg-card border border-accent/30 flex items-center justify-center shadow-[0_0_60px_-10px_rgba(34,211,238,0.4)]">
          <span className="text-4xl font-extrabold text-accent">FN</span>
        </div>

        <div className="absolute inset-0 animate-orbit">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-bg-card border border-white/10 flex items-center justify-center animate-orbit-reverse">
            <SiReact className="text-sky-400" size={26} />
          </div>
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-bg-card border border-white/10 flex items-center justify-center animate-orbit-reverse">
            <SiLaravel className="text-red-400" size={24} />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-bg-card border border-white/10 flex items-center justify-center animate-orbit-reverse">
            <Database className="text-accent" size={24} />
          </div>
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-bg-card border border-white/10 flex items-center justify-center animate-orbit-reverse">
            <Code2 className="text-accent" size={24} />
          </div>
        </div>

        <div className="absolute bottom-0 flex flex-col items-center gap-2 text-ink-muted text-sm">
          <MousePointer2 size={18} className="animate-float" />
          Découvrir mon univers
        </div>
      </div>
    </section>
  );
}