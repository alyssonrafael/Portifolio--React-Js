import SectionContainer from "../common/SectionContainer";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaArrowCircleDown,
} from "react-icons/fa";

import Av1 from "../common/Av1"; // Importe o componente de avatar
import ScrollLink from "../common/ScrollLink"; //importe do componente que coloca o scrool suave a minha pagina

const Pag1 = () => {
  const { t, i18n } = useTranslation(); // Hook para acessar as traduções

  return (
    <div
      id="pag1"
      className={`text-1xl md:text-2xl flex justify-center items-center md:my-0`}
    >
      <SectionContainer>
        <div className="max-w-6xl mx-auto md:px-8">
          <div className="md:flex md:justify-between md:space-x-2 font-sans ">
            {/* Seção para a parte esquerda da tela */}
            <div className="md:flex-1 md:space-y-5 text-center lg:text-left">
              <div className="space-y-2 w-5/6 mx-auto">
                {/* Título com animação de digitação */}
                <div className="font-serif md:text-4xl transition-opacity duration-500 text-3xl items-center pt-16">
                  <h1 className="md:text-5xl">{t("title")}</h1>
                  {/* Animação de digitação */}
                  <div>
                    {i18n.language === "en" && (
                      <TypeAnimation
                        sequence={[
                          "Web Developer",
                          1000,
                          "Dreamer",
                          1000,
                          "Adventurer",
                          1000,
                          "This is my Portfolio!",
                          3000,
                        ]}
                        wrapper="h1"
                        speed={1}
                        repeat={Infinity}
                      />
                    )}
                    {i18n.language === "pt" && (
                      <TypeAnimation
                        sequence={[
                          "Desenvolvedor Web",
                          1000,
                          "Sonhador",
                          1000,
                          "Aventureiro",
                          1000,
                          "Este é o meu Portfólio!",
                          3000,
                        ]}
                        wrapper="h1"
                        speed={1}
                        repeat={Infinity}
                      />
                    )}
                  </div>
                </div>
                {/* Subtítulo */}
                <p className="pt-3">{t("Navigating the Imagination")}</p>
                <div className="lg:text-left">
                  <h2 className="font-serif">{t("My Work")}</h2>
                  <p className="text-lg w-full mx-auto pt-2">
                    {t("Job Description")}
                  </p>
                </div>
                {/* Link para navegar para projetos */}
                <div className="w-full mx-auto">
                  <ScrollLink
                    to="projetos"
                    className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300 flex justify-center md:justify-normal text-center items-center"
                  >
                    <p className=" underline decoration-1">
                      {t("Navigate to projects")}
                    </p>
                    <FaArrowRight className="pl-3 text-3xl w-8 h-8" />
                  </ScrollLink>
                </div>
                {/* Links de redes sociais */}
                <div className="md:flex space-x-6 items-center mx-auto hidden md:justify-center lg:justify-normal  w-full  ">
                  <h3 className="underline decoration-3">{t("Follow me")}</h3>
                  <a
                    href="http://github.com/alyssonrafael"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-900 dark:hover:text-purple-800 transition-colors duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alysson-rafael-485540290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-900 dark:hover:text-purple-800 transition-colors duration-300"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                {/* Ícone de seta para baixo para rolar para baixo */}
                <div className="lg:flex align-bottom mx-auto hidden md:widden">
                  <ScrollLink
                    to="how-iam"
                    className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
                  >
                    <FaArrowCircleDown className="text-3xl w-8 h-8 hover:text-yellow-900 dark:hover:text-purple-800 transition-transform duration-300 ease-in-out transform hover:translate-y-2" />
                  </ScrollLink>
                </div>
              </div>
            </div>
            {/* Seção para a parte direita da tela */}
            <div className="md:flex-1 w-full md:w-auto items-center justify-center flex px-12 md:pt-0 ">
              <div className="transition-transform duration-500 ease-in-out transform hover:scale-110 lg:pt-0 pt-4">
                {/* Renderização do avatar */}
                <Av1 />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Pag1;
