import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa os arquivos de tradução diretamente
import en from "./locales/en.json";
import ptbr from "./locales/ptbr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ptbr: { translation: ptbr },
  },
  lng: "ptbr", // Idioma padrão
  fallbackLng: "ptbr", // Idioma de fallback
  interpolation: {
    escapeValue: false, // React já faz o escape para prevenir XSS
  },
});

export default i18n;
