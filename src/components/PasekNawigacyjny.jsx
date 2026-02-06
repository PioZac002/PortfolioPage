import { useState, useEffect } from 'react';
import '../styles/PasekNawigacyjny.css';

const PasekNawigacyjny = () => {
  const [menuRozwiniete, ustawMenuRozwiniete] = useState(false);
  const [pasekPrzezroczysty, ustawPasekPrzezroczysty] = useState(true);

  const linkiMenu = [
    { etykieta: 'Strona główna', cel: '#domek' },
    { etykieta: 'O mnie', cel: '#sekcja-info' },
    { etykieta: 'Technologie', cel: '#tech-zone' },
    { etykieta: 'Projekty', cel: '#galeria-projektow' },
    { etykieta: 'AI & Innowacje', cel: '#strefa-ai' },
    { etykieta: 'Kontakt', cel: '#formularz-kontakt' }
  ];

  useEffect(() => {
    const sledzPrzewijanie = () => {
      const pozycjaPrzewijania = window.scrollY;
      ustawPasekPrzezroczysty(pozycjaPrzewijania < 50);
    };

    window.addEventListener('scroll', sledzPrzewijanie);
    return () => window.removeEventListener('scroll', sledzPrzewijanie);
  }, []);

  const obsluzKlikniecie = (e, cel) => {
    e.preventDefault();
    const element = document.querySelector(cel);
    if (element) {
      const pozycjaElementu = element.offsetTop - 80;
      window.scrollTo({ top: pozycjaElementu, behavior: 'smooth' });
      ustawMenuRozwiniete(false);
    }
  };

  return (
    <nav className={`pasek-glowny ${!pasekPrzezroczysty ? 'pasek-aktywny' : ''}`}>
      <div className="kontener-paska">
        <div className="logo-strony">
          <span className="logo-tekst-gradient">Pio</span>
          <span className="logo-tekst-blask">Zac</span>
          <span className="logo-cyfry">002</span>
        </div>

        <button 
          className={`przycisk-hamburger ${menuRozwiniete ? 'hamburger-otwarty' : ''}`}
          onClick={() => ustawMenuRozwiniete(!menuRozwiniete)}
          aria-label="Toggle menu"
        >
          <span className="kreska-burgera"></span>
          <span className="kreska-burgera"></span>
          <span className="kreska-burgera"></span>
        </button>

        <div className={`nawigacja-linki ${menuRozwiniete ? 'menu-widoczne' : ''}`}>
          {linkiMenu.map((link, indeks) => (
            <a
              key={indeks}
              href={link.cel}
              className="link-nawigatora"
              onClick={(e) => obsluzKlikniecie(e, link.cel)}
            >
              {link.etykieta}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PasekNawigacyjny;
