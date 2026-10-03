# Mon Portfolio

Portfolio React + Tailwind CSS, prêt à héberger sur GitHub Pages.

## 1. Installer les dépendances

```bash
npm install
```

## 2. Lancer en local

```bash
npm run dev
```
Ouvre le lien affiché (ex: http://localhost:5173).

## 3. Personnaliser

- `src/components/Navbar.jsx` et `Hero.jsx` → ton nom, tes liens GitHub/LinkedIn
- `src/data/projects.js` → tes projets déjà hébergés (image, lien live, lien github)
- `src/data/skills.js` → tes compétences
- `src/data/education.js` → ton parcours scolaire
- `src/components/Contact.jsx` → ton email/téléphone/ville

## 4. Héberger sur GitHub Pages

1. Crée un dépôt GitHub, par exemple `mon-portfolio`.
2. Dans `vite.config.js`, remplace :
   ```js
   base: "./",
   ```
   par :
   ```js
   base: "/mon-portfolio/",
   ```
   (remplace `mon-portfolio` par le nom exact de ton dépôt)
3. Initialise git et pousse le code :
   ```bash
   git init
   git add .
   git commit -m "Premier commit du portfolio"
   git branch -M main
   git remote add origin https://github.com/TON_PSEUDO/mon-portfolio.git
   git push -u origin main
   ```
4. Déploie :
   ```bash
   npm run deploy
   ```
   Cette commande construit le projet et le publie sur la branche `gh-pages`.
5. Sur GitHub : Settings → Pages → Source → choisis la branche `gh-pages`.
6. Ton site sera visible à :
   `https://TON_PSEUDO.github.io/mon-portfolio/`

## Stack

- React 18 + Vite
- Tailwind CSS
- lucide-react (icônes UI)
- react-icons (logos technologies)
