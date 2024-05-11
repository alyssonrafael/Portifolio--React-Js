//o arquivo i18n serve para configuraçao da minha internacionalização
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTrasnlation from '../locale/en.json'
import ptTrasnlation from '../locale/pt.json'


i18n.use(initReactI18next).init({
    resources:{
        en: {
            ...enTrasnlation
        },

        pt:{
            ...ptTrasnlation
        },
    },

    lng: 'en',
})
