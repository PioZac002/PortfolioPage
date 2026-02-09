import { createContext, useContext, useState, useEffect } from 'react';
import pl from '../translations/pl';
import en from '../translations/en';

const LanguageContext = createContext();

const translations = {
  pl,
  en
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage || 'pl';
  });

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pl' ? 'en' : 'pl');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
