import "./App.css";
import "./fonts.css";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Footer from "./components/Footer";
import SiteRoutes from "./routes/SiteRoutes";
import { LanguageProvider } from "./LanguageContext";
import "./i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.body.classList.remove("fa", "en");
    document.body.classList.add(i18n.language);
  }, [i18n.language]);

  return (
    <LanguageProvider>
      <Navbar />
      <div className="pt-[5rem] px-2 py-2">
        <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <SiteRoutes />
              <Social />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
