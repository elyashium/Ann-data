import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//importing transaltion files 
import engTrans from '../assets/lang/eng.json'
import hinTrans from '../assets/lang/hin.json'
import benTrans from '../assets/lang/ben.json'
import gujTrans from '../assets/lang/guj.json'
import odiTrans from '../assets/lang/odi.json'
import punTrans from '../assets/lang/pun.json'
import tamTrans from '../assets/lang/tam.json'
import telTrans from '../assets/lang/tel.json'


i18n
    .use(initReactI18next)
    .init({
        resources: {
            eng: {
                translation: engTrans
            },
            hin: {
                translation: hinTrans
            },
            ben: {
                translation: benTrans
            },
            guj: {
                translation: gujTrans
            },
            odi: {
                translation: odiTrans
            },
            pun: {
                translation: punTrans
            },
            tam: {
                translation: tamTrans
            },
            tel: {
                translation: telTrans
            }
        },
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React already safes from xss
        }
    });

export default i18n;