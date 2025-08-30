import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ترجمه‌ها را مستقیماً ایمپورت می‌کنیم (نسخه ساده)
import en from "../locales/en/translation.json";
import fa from "../locales/fa/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa }
    },
    fallbackLng: "en",
    // اگر بخواهی زبان پیش‌فرض را دستی تعیین کنی:
    // lng: "en",
    detection: {
      // ترتیب تشخیص: اول localStorage، بعد navigator
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    },
    interpolation: {
      escapeValue: false
    }
  });

// پشتیبانی RTL/LTR بر اساس زبان
const applyDir = (lng) => {
  const dir = lng === "fa" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lng);
};
applyDir(i18n.resolvedLanguage);
i18n.on("languageChanged", applyDir);

export default i18n;
