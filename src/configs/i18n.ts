import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "../locales/ar";
import en from "../locales/en";

console.log(en);
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  resources: {
    ar,
    en
  },
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
