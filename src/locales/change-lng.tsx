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
    <div className="flex justify-center items-center bg-gray-800 rounded-md">
      <div className="relative inline-flex">
        <svg
          className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.763-9.763 25.592 0 35.355l181 181c9.763 9.763 25.592 9.763 35.355 0l181-181c9.762-9.763 9.762-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
            fillRule="nonzero"
          />
        </svg>
        <select
          value={language}
          onChange={onClickLanguageChange}
          className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
        >
          {LANGUAGES.map((lang: Language) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
