import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { text: t.nav.home, anchor: '#home' },
    { text: t.nav.about, anchor: '#about' },
    { text: t.nav.projects, anchor: '#projects' },
    { text: t.nav.contact, anchor: '#contact' }
  ];

  const technologiesUsed = [
    'React 19',
    'Vite',
    'Custom CSS',
    'Intersection Observer'
  ];

  const handleClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      const position = targetElement.offsetTop - 80;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-background">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      <div className="footer-container">
        <div className="footer-top-segment">
          <div className="branding-column">
            <div className="footer-logo">
              <span className="logo-part-1">Pio</span>
              <span className="logo-part-2">Zac</span>
              <span className="logo-number">002</span>
            </div>
            <p className="footer-motto">
              {t.footer.tagline}
            </p>
            <div className="footer-social">
              <a href="https://github.com/PioZac002" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <span>⚡</span>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <span>🐦</span>
              </a>
            </div>
          </div>

          <div className="links-column">
            <h4 className="column-header">{t.nav.home}</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.anchor}
                    onClick={(e) => handleClick(e, link.anchor)}
                    className="footer-link"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-column">
            <h4 className="column-header">{t.footer.builtWith}</h4>
            <ul className="tech-list">
              {technologiesUsed.map((tech, idx) => (
                <li key={idx} className="tech-item">
                  <span className="tech-dot"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-separator"></div>

        <div className="footer-bottom-segment">
          <p className="copyright-text">
            © {currentYear} PioZac002. {t.footer.rights}
          </p>
          <p className="extra-info">
            {t.footer.builtWith} <span className="pulsing-heart">❤️</span> {t.footer.and} React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
