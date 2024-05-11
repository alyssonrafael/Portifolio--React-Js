//o arquivo i18n serve para configuraçao da minha internacionalização
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTrasnlation from "../locale/en.json";
import ptTrasnlation from "../locale/pt.json";

// configura o i18n para ser usado com react e o initReact ajuda a inicializar o i18n, o init eu passo configuraçoes dentro do objeto
i18n.use(initReactI18next).init({
  // contem os recurso para traduçao em idiomas
  resources: {
    en: {
      ...enTrasnlation,
    },

    pt: {
      ...ptTrasnlation,
    },
  },
  //  Isso define o idioma padrão que será usado.
  lng: "en",
});
