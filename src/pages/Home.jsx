import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Profile />
      <Projects />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold">{t("workTogether.header")}</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          {t("workTogether.text")}
        </p>
      </div>
    </>
  );
}
