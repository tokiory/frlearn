/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter Variable",
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
      ],
      mono: [
        "Jetbrains Mono Variable",
        "Menlo",
        "Monaco",
        "Consolas",
        "monospace",
      ],
    },
    extend: {
      accentColor: "rgb(234 88 12)",
    },
  },
  plugins: [],
};

// Цикл с предусловием без инициализации
