import Profile from "../components/Profile";
import Projects from "../components/Projects";
// import { useLanguage } from "../LanguageContext";
// import { useTranslation } from "react-i18next";

export default function Home() {
  // const { t } = useTranslation();
  // const { language, changeLanguage } = useLanguage();

  return (
    <>
      {/* <div>
        <p>{t("welcome")}</p>
        <button onClick={() => changeLanguage("fa")}>فارسی</button>
        <button onClick={() => changeLanguage("en")}>English</button>
        <span>زبان فعلی: {language}</span>
      </div> */}

      <Profile />
      <Projects />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Your product deserves more than just code — let’s craft an experience.
        </p>
      </div>
    </>
  );
}
