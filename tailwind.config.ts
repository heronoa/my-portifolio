import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/template/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modo Claro
        primary: {
          DEFAULT: '#1F3A93', // Azul-marinho
          light: '#EAF2F8', // Versão mais clara para fundos
        },
        accent: {
          green: '#27AE60', // Verde-menta
          gold: '#F1C40F', // Dourado
          purple: '#8E44AD', // Roxo-escuro
        },
        neutral: {
          light: '#FFFFFF', // Branco
          gray: '#ECF0F1', // Cinza-claro
        },
        // Modo Escuro
        dark: {
          DEFAULT: '#121212', // Preto fosco
          light: '#1C1C1C', // Cinza-grafite
          accentGreen: '#2ECC71', // Verde-neon
          accentGold: '#F39C12', // Ouro-antigo
          accentPurple: '#9B59B6', // Roxo-vivo
          gray: '#7F8C8D', // Cinza-médio
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
