import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  // parametros para tradução
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  //useState para conseguir implemntar a mudança
  const [currentLanguage, setCurrentLanguage] = useState(language);
  // funçao para troca de lingua
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  //usando o getlocalstorage para que quando atualizar a pagina ele saber em qual tema estava e nao ficar com o tema nao desejado
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  //funçao de mudança de tema
  const changeteme = () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <button type="button" onClick={handleChangeLanguage}>
        chage language
      </button>
      <br />
      <div className="flex" onClick={changeteme}>
        <div className="flex-initial w-64 font-bold underline decoration-sky-500 text-red-800">
          Change Mode (Dark/Light)
        </div>
      </div>
    </>
  );
}

export default App;
