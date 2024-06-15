/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-350": "repeat(auto-fill, minmax(350px, 1fr))",
      },
    },
  },
  plugins: [],
};
