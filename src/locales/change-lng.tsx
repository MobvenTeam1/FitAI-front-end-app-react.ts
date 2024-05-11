import { useEffect, useState, ChangeEvent, FC } from "react";
import { useTranslation } from "react-i18next";

type Language = {
  value: string;
  label: string;
};

const LANGUAGES: Language[] = [
  { value: "tr", label: "Turkish" },
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
];

const getStoredLanguage = (): string => localStorage.getItem("lng") || "tr";
const storeLanguage = (lng: string): void => localStorage.setItem("lng", lng);

export const ChangeLng: FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(getStoredLanguage());

  const onClickLanguageChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    storeLanguage(newLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <div className="flex justify-center items-center bg-gray-800 p-1 rounded-md">
      <select
        value={language}
        onChange={onClickLanguageChange}
        className="px-2 py-1 bg-white text-gray-800 border border-gray-300 rounded-md shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {LANGUAGES.map((lang: Language) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};
