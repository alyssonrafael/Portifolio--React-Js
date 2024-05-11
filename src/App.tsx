import { useState } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "./components/navigation/Navbar";
import Pag1 from "./components/pages/Pag1";

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
    </>
  );
}

export default App;
