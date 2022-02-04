import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PT_TRANSLATIONS from './locales/pt/translation.json';
import EN_TRANSLATIONS from './locales/en/translation.json';

const resources = {
  en: {
    translation: EN_TRANSLATIONS,
  },
  pt: {
    translation: PT_TRANSLATIONS,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
