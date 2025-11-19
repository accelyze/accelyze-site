// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
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
  integrations: [react(), svelte(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
