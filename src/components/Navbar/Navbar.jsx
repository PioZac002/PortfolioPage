import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  const menuLinks = [
    { label: t.nav.home, target: '#home' },
    { label: t.nav.about, target: '#about' },
    { label: t.nav.technologies, target: '#tech-stack' },
    { label: t.nav.projects, target: '#projects' },
    { label: t.nav.aiInnovation, target: '#ai-innovation' },
    { label: t.nav.contact, target: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const elementPosition = element.offsetTop - 80;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text-gradient">Pio</span>
          <span className="logo-text-glow">Zac</span>
          <span className="logo-numbers">002</span>
        </div>

        <button 
          className={`hamburger-button ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'menu-visible' : ''}`}>
          {menuLinks.map((link, index) => (
            <a
              key={index}
              href={link.target}
              className="nav-link"
              onClick={(e) => handleClick(e, link.target)}
            >
              {link.label}
            </a>
          ))}
          
          <div className="navbar-toggles">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
