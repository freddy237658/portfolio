
// "id" relie chaque formation à son texte traduit (formation.items.<id> :
// degree, school, status). "period" et "ongoing" sont indépendants de la
// langue : "ongoing" vaut true si la formation est en cours (couleur du statut).
const education = [
  {
    id: "licence",
    period: "2025 - 2026",
    ongoing: false,
  },
  {
    id: "bts",
    period: "2023 - 2025",
    ongoing: false,
  },
  {
    id: "bac",
    period: "2022 - 2023",
    ongoing: false,
  },
];

export default education;
