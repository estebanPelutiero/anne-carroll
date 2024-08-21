// LanguageContext.js
import { createContext, useState, useContext } from 'react';
import englishTranslations from './jsons/english.json';
import spanishTranslations from './jsons/spanish.json';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const translations = language === 'en' ? englishTranslations : spanishTranslations;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};