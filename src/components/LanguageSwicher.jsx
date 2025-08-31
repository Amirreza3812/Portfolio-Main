// src/components/LanguageSwitcher.jsx
import { useState } from "react";
import i18n from "../i18n";

const languages = [
  { code: "fa", name: "فارسی", flag: "/flags/IR.png" },
  { code: "en", name: "English", flag: "/flags/EN.png" },
  // { code: "ja", name: "日本語", flag: "/flags/JP.png" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("fa");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className="relative text-left">
      {/* دکمه اصلی */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border rounded-md shadow-sm bg-white hover:bg-gray-100"
      >
        <img
          src={languages.find((l) => l.code === selected)?.flag}
          alt="flag"
          className="w-5 h-5 rounded-full object-cover"
        />
        <span className="hidden sm:inline">
          {languages.find((l) => l.code === selected)?.name}
        </span>
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* منوی بازشونده */}
      {open && (
        <div
          className={`absolute mt-2 w-36 rounded-md shadow-lg bg-white border z-10
      ${selected === "en" ? "right-0 mr-2" : ""}
      ${selected === "fa" ? "left-0 ml-2" : ""}
    `}
        >
          <ul className="py-1">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleChangeLanguage(lang.code)}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  lang.code === selected ? "font-bold text-green-600" : ""
                }`}
              >
                <img
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  className="w-5 h-5 rounded-full object-cover"
                />
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
