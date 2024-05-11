import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationTurkish from "./langs/turkish/translation.json";
import translationEnglish from "./langs/english/translation.json";
import translationSpanish from "./langs/spanish/translation.json";
import translationFrench from "./langs/french/translation.json";

//Import translation2 file
// import translationEnglishSecondFile from "./langs/english/translation2.json";

//---Using translation
const resources = {
  tr: {
    translation: translationTurkish,
  },
  en: {
    translation: translationEnglish,
  },
  es: {
    translation: translationSpanish,
  },
  fr: {
    translation: translationFrench,
  },
};

//---Using different namespaces
// const resources = {
//   en: {
//     home: translationEnglish,
//     main: translationEnglishSecondFile,
//   },
//   es: {
//     home: translationSpanish,
//   },
//   fr: {
//     home: translationFrench,
//   },
// };

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lng") || "tr",
});

export default i18next;
