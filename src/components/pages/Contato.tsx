import { FaArrowCircleUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ScrollLink from "../common/ScrollLink";
import { useTranslation } from "react-i18next";
import Sendemail from "../common/SendEmail";

// Componente Contato responsável pela seção de contato da página
const Contato = () => {
  // Hook para usar a biblioteca de internacionalização
  const { t } = useTranslation();
  // Renderização do componente
  return (
    // Container principal da seção de contato
    <div
      id="contato"
      className=" flex flex-col justify-center items-center min-h-screen dark:text-gray-200"
    >
      {/* Cabeçalho da seção de contato */}
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-center text-6xl font-serif py-16">
          {t("Contact")}
        </h1>
        {/* Conteúdo principal da seção de contato */}
        <div className="flex-grow max-w-6xl mx-auto md:px-8">
          {/* Layout responsivo para desktop e dispositivos móveis */}
          <div className="md:flex md:justify-between md:space-x-2 font-sans">
            {/* Coluna esquerda com informações de contato */}
            <div className="md:flex-1 md:space-y-5 text-center lg:text-left">
              <div className="space-y-2 w-5/6 mx-auto">
                <div className="lg:text-left">
                  <h2 className="text-semibold text-3xl md:pb-4">
                    {t("Unleash Your Potential")}
                  </h2>
                  <p className="text-lg w-full mx-auto">{t("liked my work")}</p>
                </div>
                <div className="flex space-x-6 items-center mx-auto md:justify-center lg:justify-normal w-full pt-6 text-2xl justify-center">
                  <h3 className="underline decoration-3">{t("Follow me")}</h3>
                  <a
                    href="http://github.com/alyssonrafael"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-900 dark:hover:text-purple-800 transition-colors duration-300 text-4xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alysson-rafael-485540290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-900 dark:hover:text-purple-800 transition-colors duration-300 text-4xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className="lg:flex align-bottom mx-auto hidden md:widden pt-4">
                  <ScrollLink
                    to="pag1"
                    className="text-4xl hover:text-yellow-800 dark:hover:text-purple-800 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                  >
                    <FaArrowCircleUp />
                  </ScrollLink>
                </div>
              </div>
            </div>
            {/* Coluna direita com o formulário de envio de e-mail */}
            <div className="md:flex-1 w-full md:w-auto items-center justify-center p-12 md:pt-0 text-center">
              <div className="flex flex-col items-center justify-center md:flex-row pb-8">
                <MdEmail className="text-5xl lg:mr-16 md:mr-10" />
                <div className="text-center">
                  <h1 className="underline lg:text-lg text-base">
                    {t("Send-me an email")} <br />
                    <span className="text-xs">{t("Directed")}</span>
                  </h1>
                </div>
              </div>
              {/* Inclusão do componente Sendemail para o formulário de envio de e-mails */}
              <div>
                <Sendemail />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rodapé da seção de contato */}
      <footer className="text-center pt-16">
        <p>{t("footer")}</p>
      </footer>
    </div>
  );
};

export default Contato;
