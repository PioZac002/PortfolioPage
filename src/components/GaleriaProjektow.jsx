import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/GaleriaProjektow.css';

const GaleriaProjektow = () => {
  const [refTytulu, czyWidocznyTytul] = useScrollAnimation({ threshold: 0.25 });
  const [refKart, czyWidoczneKarty] = useScrollAnimation({ threshold: 0.08 });

  const zbiorProjektow = [
    {
      nazwaProjektu: 'TaskSystemFront',
      skrotOpisu: 'System zarządzania zadaniami z interfejsem użytkownika i zaawansowanym trackingiem',
      stos: ['React', 'TypeScript', 'Tailwind', 'API'],
      linkDoRepozytorium: 'https://github.com/PioZac002/TaskSystemFront',
      linkDoPodgladu: null,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      ikonaEmoji: '📋'
    },
    {
      nazwaProjektu: 'BarberAppv2',
      skrotOpisu: 'Aplikacja dla barbershopów z systemem rezerwacji i zarządzaniem klientami',
      stos: ['React', 'Node.js', 'MongoDB', 'Express'],
      linkDoRepozytorium: 'https://github.com/PioZac002/BarberAppv2',
      linkDoPodgladu: null,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      ikonaEmoji: '✂️'
    },
    {
      nazwaProjektu: 'CrushApp',
      skrotOpisu: 'Interaktywna aplikacja społecznościowa z funkcjami interakcji użytkowników',
      stos: ['React', 'Firebase', 'CSS3', 'JavaScript'],
      linkDoRepozytorium: 'https://github.com/PioZac002/CrushApp',
      linkDoPodgladu: null,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      ikonaEmoji: '💬'
    }
  ];

  return (
    <section id="galeria-projektow" className="obsz ar-wystawienniczy">
      <div className="obudowa-sekcyjna">
        <div 
          ref={refTytulu}
          className={`header-projekty ${czyWidocznyTytul ? 'zjawisko-tytulu' : ''}`}
        >
          <span className="mini-etykieta">Moja praca</span>
          <h2 className="mega-tytul">
            <span className="gradientowa-nazwa">Projekty</span>
          </h2>
          <p className="podpis-sekcji">
            Wybrane realizacje pokazujące moje umiejętności i podejście do rozwiązywania problemów
          </p>
        </div>

        <div 
          ref={refKart}
          className={`mozaika-projektowa ${czyWidoczneKarty ? 'aktywuj-mozaike' : ''}`}
        >
          {zbiorProjektow.map((projekt, numerek) => (
            <div 
              key={numerek}
              className="kapsulka-projektu"
              style={{ '--nr-kolejny': numerek }}
            >
              <div 
                className="plansza-koloru"
                style={{ background: projekt.gradient }}
              >
                <div className="symbol-mega">{projekt.ikonaEmoji}</div>
              </div>

              <div className="zawartosc-kapsulki">
                <h3 className="nazwa-projektu-tekst">{projekt.nazwaProjektu}</h3>
                <p className="szczegoly-opisu">{projekt.skrotOpisu}</p>

                <div className="zestawienie-technologii">
                  {projekt.stos.map((technologia, idx) => (
                    <span key={idx} className="znacznik-tech">
                      {technologia}
                    </span>
                  ))}
                </div>

                <div className="akcje-dolne">
                  <a 
                    href={projekt.linkDoRepozytorium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="klawisz-akcji klawisz-repozytorium"
                  >
                    <span className="ikona-github">⚡</span>
                    <span>Repozytorium</span>
                  </a>
                  {projekt.linkDoPodgladu && (
                    <a 
                      href={projekt.linkDoPodgladu}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="klawisz-akcji klawisz-demo"
                    >
                      <span>Demo</span>
                      <span className="strzalka-zewn">↗</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="swiecaca-ramka-projektu"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaProjektow;
