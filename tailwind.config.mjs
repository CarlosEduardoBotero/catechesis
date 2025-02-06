/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-300": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        "auto-fill-150": "repeat(auto-fill, minmax(150px, 1fr))",
      },
      minHeight: {
        screen: ["100vh", "100svh"],
      },
    },
  },
  plugins: [],
};
