import { useState, useEffect } from 'react';
import pl from '../translations/pl';
import en from '../translations/en';
import { LanguageContext } from './language';

const translations = { pl, en };
const STORAGE_KEY = 'record-lang';

export const LanguageProvider = ({ children }) => {
  /* English is the record's default language; index.html has already put the
     resolved value on the document, so adopt it instead of re-deciding. */
  const [language, setLanguage] = useState(() =>
    document.documentElement.getAttribute('lang') === 'pl' ? 'pl' : 'en'
  );

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* private browsing; the language still applies for this visit */
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage: () => setLanguage((p) => (p === 'pl' ? 'en' : 'pl')),
        t: translations[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
