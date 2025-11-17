import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import rusTranslation from "../locales/rus/rusTranslation.json";
import engTranslation from "../locales/eng/engTranslation.json";

i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: engTranslation
    },
    rus: {
      translation: rusTranslation
    }
  },
  lng: "rus",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
