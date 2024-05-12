import Bgchange from "../common/Bgchange";

import { useTranslation } from "react-i18next";
// componente da segunda pagina com o import da imagem de fundo como componente 
export default function HowIam() {
    const { t } = useTranslation()
  return (
        <div id="how-iam" className=" pt-16">
        <Bgchange>
      <div className="bg-cover bg-center h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 flex-col text-gray-200">
          <h1 className="text-4xl font-bold mb-12 text-center font-serif md:text-6xl ">
            {t("who I am")}
          </h1>
          <p className="text-center md:px-16 md:text-xl lg:text-3xl lg:mx-12 ">
            {t("whoiam description")}
          </p>
        </div>
      </div>
    </Bgchange>
    </div>
  )
}
