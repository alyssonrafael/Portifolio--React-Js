import { useState } from "react";
import { useTranslation } from "react-i18next";

import ScrollLink from "../common/ScrollLink";
import ChangeTheme from "./changeTheme";
import DropdownIdiomas from "./DropdonwLanguage";

// tipos definidos do idioma atual e para mudar o idioma
type NavbarProps = {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
};
// componente da Navbar que vai retornar todos os links e a mudança de idioma e de tema
const Navbar: React.FC<NavbarProps> = ({ currentLanguage, changeLanguage }) => {

  // toggle navbar para quando tiver em dispositivos pequenos
  const [isClick, setIsClick] = useState(false);
  
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  
// usado para traduçao
  const { t } = useTranslation();

  return (
    <nav className="bg-transparent text-gray-800 dark:text-white text-1xl lg:text-2xl fixed top-0 w-full z-50">
      <div className=" mx-auto px-4 sm:px6 lg:px-12 backdrop-filter backdrop-blur-sm">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-auto">
              <ScrollLink
                to="pag1"
                className="text-4xl hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
              >
                &lt;/&gt;
              </ScrollLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center justify-center space-x-6">
              <ScrollLink
                to="pag1"
                className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
              >
                {t("home")}
              </ScrollLink>
              <ScrollLink
                to="how-iam"
                className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
              >
                {t("about")}
              </ScrollLink>
              <ScrollLink
                to="Technologies"
                className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
              >
                {t("tecnologies")}
              </ScrollLink>
              <ScrollLink
                to="projetos"
                className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
              >
                {t("projects")}
              </ScrollLink>
              <ScrollLink
                to="contato"
                className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
              >
                {t("contact")}
              </ScrollLink>
            </div>
          </div>
          <div className="flex items-center">

            <ChangeTheme />
            <button
              className=" md:hidden inline-flex items-center justify-center p-2 rounded-md hover:text-yellow-800 dark:hover:text-purple-600 focus:outline-none focus:ring-inset focus:ring-white transition-colors duration-300"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
        <DropdownIdiomas changeLanguage={changeLanguage} currentLanguage={currentLanguage} />
          </div>
        </div>
      </div>
      <div className={`${isClick ? "backdrop-blur-sm" : ""} md:hidden mx-2`}>
        {isClick && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-2 border-black dark:border-white">
            <ScrollLink
              to="pag1"
              className="pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg"
            >
             {t("home")}
            </ScrollLink>
            <ScrollLink
              to="how-iam"
              className="pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg"
            >
              {t("about")}
            </ScrollLink>
            <ScrollLink
              to="Technologies"
              className="pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg"
            >
              {t("tecnologies")}
            </ScrollLink>
            <ScrollLink
              to="projetos"
              className="pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg"
            >
              {t("projects")}
            </ScrollLink>
            <ScrollLink
              to="contato"
              className="pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg"
            >
             {t("contact")}
            </ScrollLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
