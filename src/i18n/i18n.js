import i18n from 'i18next';
import {
    initReactI18next
} from 'react-i18next'

import XHR from 'i18next-http-backend'
// import Backend from 'i18next-node-fs-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        ns: ['translation'],
        partialBundledLanguages: true,
        debug: process.env.NODE_ENV !== 'production',
        fallbackLng: 'en',
        // load: 'languageOnly',

        interpolation: {
            escapeValue: false,
        },

        keySeparator: false,
        nsSeparator: false,

        initImmediate: true,
        

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        saveMissing: true,

        detection: {
            order: ['path', 'navigator', 'querystring'],
        },

        react: {
            useSuspense: false,
            wait: true,
        }

    })



export default i18n