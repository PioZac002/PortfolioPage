import { useLanguage } from '../../context/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle-button" 
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'pl' ? 'English' : 'Polish'}`}
    >
      <span className={`lang-option ${language === 'pl' ? 'active' : ''}`}>PL</span>
      <span className="lang-separator">|</span>
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
    </button>
  );
};

export default LanguageToggle;
