
// "id" est la clé stable qui relie chaque projet à sa description traduite
// dans src/i18n/fr.js et src/i18n/en.js (projects.items.<id>.description).
// Les autres champs (titre, image, tech, liens) sont identiques dans les 2 langues.
const projects = [
  {
    id: "djelica",
    title: "Djelica",
    image: "/images/projects/djelica.jpg",
    tech: ["Express.js", "Next.js", "MySQL","jTailwind","TypeScript","PostgreSQL","Turborepo","Prisma ORM","pnpm workspaces" ,"docker"],
    live: "https://djelica.com",
    github: "https://github.com/Best-Corp/Djelica",
  },
  {
    id: "eazlypost",
    title: "EazlyPost",
    image: "/images/projects/eazlypost.jpg",
    tech: ["Nest.js","Next.js","jTailwind","TypeScript","PostgreSQL","Turborepo","Prisma ORM","pnpm workspaces" ,"docker"],
    live: "https://eazlypost.com",
    github: "https://github.com/Best-Corp/FrontendEazlyPost",
  },
  {
    id: "fredschool",
    title: "FredSchool",
    image: "/images/projects/FredSchool.jpg",
    tech: ["Laravel", "blade", "MySQL","bootstrap","Symfony","vite"],
    live: "",
    github: "https://github.com/freddy237658/fredschool",
  },
  {
    id: "lettreai",
    title: "LettreAI",
    image: "/images/projects/LettreAI.jpg",
    tech: ["React", "Laravel", "docker", "MySQL", "Tailwind", "TypeScript"],
    live: "https://lettres-8etyc23jh-freddy-nya.vercel.app",
    github: "https://github.com/freddy237658/lettresIA",
  },
  {
    id: "lims3",
    title: "Portfolio",
    image: "/images/projects/Lims3.jpg",
    tech: ["Laravel", "MySQL", "Reactjs", "Tailwind"],
    live: "",
    github: "https://github.com/freddy237658/gestion_de_laboratoire_scientifique",
  },
  {
    id: "lenuxwood",
    title: "Lenuxwood",
    image: "/images/projects/lenuxwood.jpg",
    tech: ["Laravel", "MySQL", "Reactjs", "bootstrap", "TypeScript", "Vite"],
    live: "https://lenuxwood-frontend.vercel.app/",
    github: "https://github.com/freddy237658/lenuxwood-frontend",
  },
  {
    id: "collectionapp",
    title: "CollectionApp",
    image: "/images/projects/lenuxwood.jpg",
    tech: ["Reactjs", "bootstrap", "TypeScript", "Vite"],
    live: "https://fredschool-tox3.vercel.app/",
    github: "https://github.com/freddy237658/CollectionApp",
  },
];

export default projects;
