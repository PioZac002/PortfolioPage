import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/FormularzKontakt.css';

const FormularzKontakt = () => {
  const [refFormularza, czyFormularzWidoczny] = useScrollAnimation({ threshold: 0.2 });
  
  const [daneWejsciowe, ustawDaneWejsciowe] = useState({
    nazwaOsoby: '',
    emailKontaktowy: '',
    wiadomoscTekst: ''
  });

  const [statusWyslania, ustawStatusWyslania] = useState({
    wysylam: false,
    sukces: false,
    komunikat: ''
  });

  const obrobkaZmiany = (e) => {
    const { name, value } = e.target;
    ustawDaneWejsciowe(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const obslugaWyslania = async (e) => {
    e.preventDefault();
    
    ustawStatusWyslania({
      wysylam: true,
      sukces: false,
      komunikat: ''
    });

    setTimeout(() => {
      ustawStatusWyslania({
        wysylam: false,
        sukces: true,
        komunikat: 'Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.'
      });

      ustawDaneWejsciowe({
        nazwaOsoby: '',
        emailKontaktowy: '',
        wiadomoscTekst: ''
      });

      setTimeout(() => {
        ustawStatusWyslania({
          wysylam: false,
          sukces: false,
          komunikat: ''
        });
      }, 4000);
    }, 1500);
  };

  const linkiSpolecznosciowe = [
    { platforma: 'GitHub', adres: 'https://github.com/PioZac002', emojka: '⚡' },
    { platforma: 'LinkedIn', adres: '#', emojka: '💼' },
    { platforma: 'Twitter', adres: '#', emojka: '🐦' },
    { platforma: 'Email', adres: 'mailto:contact@piozac.dev', emojka: '📧' }
  ];

  return (
    <section id="formularz-kontakt" className="sektor-kontaktowy">
      <div className="obudowa-kontenera">
        <div className="naglowek-kontaktu">
          <span className="znacznik-maly">Zostańmy w kontakcie</span>
          <h2 className="tytul-kontaktowy">
            <span className="gradientowy-tekst">Skontaktuj się</span>
          </h2>
          <p className="opis-wstepny">
            Masz pytanie lub propozycję współpracy? Napisz do mnie!
          </p>
        </div>

        <div className="uklad-kontaktu">
          <div className="panel-informacyjny">
            <div className="bloczek-info">
              <h3 className="podtytul-info">Porozmawiajmy</h3>
              <p className="tresc-info">
                Zawsze otwarty na nowe możliwości i ciekawe projekty. 
                Chętnie odpowiem na wszystkie pytania!
              </p>
            </div>

            <div className="linki-spoleczne">
              <h4 className="tytul-linkow">Znajdź mnie na:</h4>
              <div className="siatka-linkow">
                {linkiSpolecznosciowe.map((link, numer) => (
                  <a
                    key={numer}
                    href={link.adres}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="przycisk-spoleczny"
                  >
                    <span className="ikona-platformy">{link.emojka}</span>
                    <span className="nazwa-platformy">{link.platforma}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="dekoracyjny-blok">
              <div className="ornament ornament-1"></div>
              <div className="ornament ornament-2"></div>
              <div className="ornament ornament-3"></div>
            </div>
          </div>

          <div 
            ref={refFormularza}
            className={`plyta-formularza ${czyFormularzWidoczny ? 'formularz-aktywny' : ''}`}
          >
            <form onSubmit={obslugaWyslania} className="struktura-formularza">
              <div className="grupa-pola">
                <label htmlFor="nazwaOsoby" className="etykieta-pola">Imię i nazwisko</label>
                <input
                  type="text"
                  id="nazwaOsoby"
                  name="nazwaOsoby"
                  value={daneWejsciowe.nazwaOsoby}
                  onChange={obrobkaZmiany}
                  className="pole-formularza"
                  required
                  placeholder="Jan Kowalski"
                />
              </div>

              <div className="grupa-pola">
                <label htmlFor="emailKontaktowy" className="etykieta-pola">Adres email</label>
                <input
                  type="email"
                  id="emailKontaktowy"
                  name="emailKontaktowy"
                  value={daneWejsciowe.emailKontaktowy}
                  onChange={obrobkaZmiany}
                  className="pole-formularza"
                  required
                  placeholder="jan.kowalski@example.com"
                />
              </div>

              <div className="grupa-pola">
                <label htmlFor="wiadomoscTekst" className="etykieta-pola">Wiadomość</label>
                <textarea
                  id="wiadomoscTekst"
                  name="wiadomoscTekst"
                  value={daneWejsciowe.wiadomoscTekst}
                  onChange={obrobkaZmiany}
                  className="pole-formularza pole-tekstowe"
                  required
                  placeholder="Twoja wiadomość..."
                  rows="5"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="przycisk-wyslij"
                disabled={statusWyslania.wysylam}
              >
                {statusWyslania.wysylam ? (
                  <>
                    <span className="spinner-ladowania"></span>
                    <span>Wysyłanie...</span>
                  </>
                ) : (
                  <>
                    <span>Wyślij wiadomość</span>
                    <span className="strzalka-wyslij">→</span>
                  </>
                )}
              </button>

              {statusWyslania.komunikat && (
                <div className={`powiadomienie ${statusWyslania.sukces ? 'sukces' : 'blad'}`}>
                  {statusWyslania.komunikat}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularzKontakt;
