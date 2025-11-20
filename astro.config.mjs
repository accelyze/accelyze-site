// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const SITE = process.env.SITE ?? "https://accelyze.ai";
const BASE = process.env.BASE ?? "/";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
  },
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
