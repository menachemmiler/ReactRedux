import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig(({ mode }) => ({
//   plugins: [react()],
//   base: mode === 'production' ? '/ReactRedux/' : '/',  // base רק בבנייה לפרודקשן
// }))

export default defineConfig({
  plugins: [react()],
  base: "/ReactRedux/"
})
