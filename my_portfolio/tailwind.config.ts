import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  module:{
   css: "@designbycode/tailwindcss-text-stroke"
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      Poppins : ["Poppins, sans-serif"],
      Roboto: ['Roboto', "sans-serif"],
      StyleScript: ["Style Script" ,"cursive"] ,
      Merienda: ["Merienda", 'cursive']

    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
};
export default config;
