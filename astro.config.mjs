import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "pt"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
  site: "http://injesuslikeness.com",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en", // All urls that don't contain `es` or `pt` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en-US",
          es: "es-MX",
          pt: "pt-BR",
        },
      },
    }),
  ],
});
