import { useState } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "./components/navigation/Navbar";
import Pag1 from "./components/pages/Pag1";
import HowIam from "./components/pages/HowIam";
import Technologies from "./components/pages/Technologies";
import Projects from "./components/pages/Projects";
import Contato from "./components/pages/Contato";

function App() {
  // parametros para tradução
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  //useState para conseguir implemntar a mudança
  const [currentLanguage, setCurrentLanguage] = useState(language);
  // funçao para troca de lingua
  //esse mesmo padrao se repete no dropdonw
  const handleChangeLanguage = (newLanguage: string) => {
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
    {/* passando parametros para que a nav bar possa usar fazer a substitiçao do idioma */}
      <Navbar changeLanguage={handleChangeLanguage} currentLanguage={currentLanguage} />
    {/* primeira pagina*/}
      <Pag1/>
    {/* segunda pagina */}
    <HowIam/>
    {/* pagina das tecnologias */}
    <Technologies/>
    {/* pagina dos projetos */}
    <Projects/>
    {/* pagina de contato */}
    <Contato/>
    </>
  );
}

export default App;
