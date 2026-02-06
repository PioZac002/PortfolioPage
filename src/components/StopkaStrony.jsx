import '../styles/StopkaStrony.css';

const StopkaStrony = () => {
  const obecnyRok = new Date().getFullYear();

  const szybkieLinki = [
    { tekst: 'Strona główna', anchor: '#domek' },
    { tekst: 'O mnie', anchor: '#sekcja-info' },
    { tekst: 'Projekty', anchor: '#galeria-projektow' },
    { tekst: 'Kontakt', anchor: '#formularz-kontakt' }
  ];

  const teknologieWykorzystane = [
    'React 18',
    'Vite',
    'Custom CSS',
    'Intersection Observer'
  ];

  const obsluzKlik = (e, docelowy) => {
    e.preventDefault();
    const elementDocelowy = document.querySelector(docelowy);
    if (elementDocelowy) {
      const pozycja = elementDocelowy.offsetTop - 80;
      window.scrollTo({ top: pozycja, behavior: 'smooth' });
    }
  };

  return (
    <footer className="stopka-glowna">
      <div className="tlo-stopki">
        <div className="fala fala-1"></div>
        <div className="fala fala-2"></div>
        <div className="fala fala-3"></div>
      </div>

      <div className="pojemnik-stopki">
        <div className="gorny-segment-stopki">
          <div className="kolumna-branding">
            <div className="logo-stopki">
              <span className="logo-czesc-1">Pio</span>
              <span className="logo-czesc-2">Zac</span>
              <span className="logo-liczba">002</span>
            </div>
            <p className="motto-stopki">
              Tworzę nowoczesne rozwiązania webowe z pasją i dedykacją
            </p>
            <div className="social-stopka">
              <a href="https://github.com/PioZac002" target="_blank" rel="noopener noreferrer" className="ikona-social" aria-label="GitHub">
                <span>⚡</span>
              </a>
              <a href="#" className="ikona-social" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="ikona-social" aria-label="Twitter">
                <span>🐦</span>
              </a>
            </div>
          </div>

          <div className="kolumna-linkow">
            <h4 className="naglowek-kolumny">Nawigacja</h4>
            <ul className="lista-linkow-stopki">
              {szybkieLinki.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.anchor}
                    onClick={(e) => obsluzKlik(e, link.anchor)}
                    className="link-stopki"
                  >
                    {link.tekst}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="kolumna-tech">
            <h4 className="naglowek-kolumny">Zbudowane z</h4>
            <ul className="lista-technologii">
              {teknologieWykorzystane.map((tech, idx) => (
                <li key={idx} className="element-tech">
                  <span className="kropka-tech"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="separator-stopki"></div>

        <div className="dolny-segment-stopki">
          <p className="copyright-tekst">
            © {obecnyRok} PioZac002. Wszelkie prawa zastrzeżone.
          </p>
          <p className="info-dodatkowe">
            Stworzone z <span className="serce-pulsujace">❤️</span> przy użyciu React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StopkaStrony;
