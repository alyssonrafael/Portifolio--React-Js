import { useState } from "react";

import brasil from "../../assets/brasil.png";
import eua from "../../assets/unidos.png";

import { FaArrowDown } from "react-icons/fa";

// aqui esrta sendo defindo o tipo da propriedade do componente para mudar o idioma lembrando que ja estavam definidos no eemento pai a nav
type DropdownIdiomasProps = {
  changeLanguage: (lang: string) => void;
  currentLanguage: string;
};
// componente que vai fazer o menu da mudança de idioma
const DropdownIdiomas: React.FC<DropdownIdiomasProps> = ({
  changeLanguage,
  currentLanguage,
}) => {
  // estados para saber se ta aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);
  // controla o idioma atual
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);
// funçao que e chamada quando um novo idioma e selecionado
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    changeLanguage(language);
    setIsOpen(false);
  };
// funçao para retornar a bandeirinha dependendo do idioma
  const getFlagIcon = (language: string) => {
    switch (language) {
      case "pt":
        return brasil;
      case "en":
        return eua;
      default:
        return ""; // ou uma imagem padrão
    }
  };
// dropdown que mostra ou nao o conteudo do dorpdown e o icone de seta e bandeira atual e chama a funçao do handlelanguage para trocar o idioma
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full sm:w-auto sm:p-2 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={getFlagIcon(selectedLanguage)}
            alt="Bandeira"
            className="inline-block h-6 w-6 mr-2 align-middle"
          />
          {selectedLanguage === "pt" ? "Pt" : "En"}
          <FaArrowDown className="ml-2" style={{ verticalAlign: "middle" }} />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:border-gray-600"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm dark:text-gray-200"
              role="menuitem"
              id="menu-item-0"
              onClick={() => handleLanguageChange("pt")}
            >
              <img
                src={brasil}
                alt="Português"
                className="inline-block h-6 w-6 mr-2 align-middle"
              />
              Português
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm dark:text-gray-200"
              role="menuitem"
              id="menu-item-1"
              onClick={() => handleLanguageChange("en")}
            >
              <img
                src={eua}
                alt="English"
                className="inline-block h-6 w-6 mr-2 align-middle"
              />
              English
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownIdiomas;
