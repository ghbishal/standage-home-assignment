import { getLocales } from 'expo-localization';
import i18n, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { EN } from './dictionary/en.js';
import { JA } from './dictionary/ja.js';

const locales = getLocales();
const languageCode = locales[0]?.languageCode || 'en';

use(initReactI18next).init({
  resources: {
    en: { translation: EN },
    ja: { translation: JA },
  },
  lng: languageCode,
  fallbackLng: ['en'], // if no keys found then default language is English
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v4',
});
export default i18n;
