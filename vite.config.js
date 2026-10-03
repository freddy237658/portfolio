import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Si tu déploies sur https://TON_PSEUDO.github.io/NOM_DU_REPO/
// remplace "./" par "/NOM_DU_REPO/" ci-dessous.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
