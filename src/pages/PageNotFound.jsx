import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-center items-center text-center">
        <span className="text-4xl font-medium">{t("page404")}</span>
      </div>
    </>
  );
}
