import { useTranslation } from "react-i18next";

export const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang: string) => {
    console.log({ lang });
    i18n.changeLanguage(lang); // Altera o idioma
  };

  const getCirclePosition = (lang: string) => {
    return lang === "en" ? "translateX(0)" : "translateX(100%)";
  };

  return (
    <label className="flex justify-center items-center gap-4 relative">
      <div
        className={`switch-right bottom-3 cursor-pointer right-9 mr-1 text-primary-light ${i18n.language === "en" ? "text-accent-gold" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        en
      </div>
      <div
        className={`switch-left bottom-3  cursor-pointer left-9 ml-1  text-primary-light ${i18n.language === "ptbr" ? "text-accent-gold" : ""}`}
        onClick={() => changeLanguage("ptbr")}
      >
        ptbr
      </div>
    </label>
  );
};

export default SwitchLanguage;
