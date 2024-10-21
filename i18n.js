import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome',
        // outras traduções
      },
    },
    ptBR: {
      translation: {
        welcome: 'Bem-vindo',
        // outras traduções
      },
    },
  },
  lng: 'ptBR', // Defina o idioma inicial
  fallbackLng: 'en', // Idioma de fallback
  interpolation: {
    escapeValue: false, // React já faz a sanitização dos valores
  },
});

export default i18n;
