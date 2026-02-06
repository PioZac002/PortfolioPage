import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/StrefaInformacji.css';

const StrefaInformacji = () => {
  const [refTytulu, widocznoscTytulu] = useScrollAnimation({ threshold: 0.3 });
  const [refOpisu, widocznoscOpisu] = useScrollAnimation({ threshold: 0.2 });
  const [refCech, widocznoscCech] = useScrollAnimation({ threshold: 0.15 });

  const cechyProgramisty = [
    {
      ikona: '💡',
      nazwa: 'Kreatywność',
      szczegoly: 'Tworzę unikalne rozwiązania, które łączą estetykę z funkcjonalnością'
    },
    {
      ikona: '⚡',
      nazwa: 'Wydajność',
      szczegoly: 'Optymalizuję kod dla maksymalnej prędkości i skalowalności'
    },
    {
      ikona: '🎯',
      nazwa: 'Precyzja',
      szczegoly: 'Dbam o każdy detal, od UI/UX po architekturę aplikacji'
    },
    {
      ikona: '🚀',
      nazwa: 'Innowacyjność',
      szczegoly: 'Wykorzystuję najnowsze technologie i trendy w developmencie'
    }
  ];

  return (
    <section id="sekcja-info" className="strefa-informacyjna">
      <div className="pojemnik-sekcji">
        <div 
          ref={refTytulu}
          className={`naglowek-sekcji ${widocznoscTytulu ? 'animacja-wjazd-gora' : ''}`}
        >
          <span className="etykieta-mala">Poznaj mnie bliżej</span>
          <h2 className="tytul-sekcyjny">
            <span className="podkreslenie-gradientowe">O mnie</span>
          </h2>
        </div>

        <div className="siatka-informacji">
          <div 
            ref={refOpisu}
            className={`panel-opisu-szklo ${widocznoscOpisu ? 'animacja-wjazd-lewo' : ''}`}
          >
            <div className="blok-tekstowy">
              <h3 className="podtytul-bloku">Pasjonat Technologii</h3>
              <p className="akapit-opisu">
                Jestem <span className="akcent-kolorowy">full-stack developerem</span> z pasją do 
                tworzenia nowoczesnych aplikacji webowych. Specjalizuję się w ekosystemie JavaScript/TypeScript, 
                budując rozwiązania od frontendu po backend.
              </p>
              <p className="akapit-opisu">
                Fascynuje mnie <span className="akcent-kolorowy">sztuczna inteligencja</span> i jej 
                zastosowanie w codziennych aplikacjach. Stale rozwijam swoje umiejętności, 
                eksperymentując z nowymi frameworkami i technologiami.
              </p>
              <p className="akapit-opisu">
                Wierzę, że dobry kod to taki, który jest <span className="akcent-kolorowy">czysty, 
                skalowalny i łatwy w utrzymaniu</span>. Każdy projekt traktuję jako szansę na 
                naukę czegoś nowego i doskonalenie swoich umiejętności.
              </p>
            </div>

            <div className="kontener-statystyk">
              <div className="statystyka-element">
                <div className="liczba-stat">15+</div>
                <div className="etykieta-stat">Projektów</div>
              </div>
              <div className="statystyka-element">
                <div className="liczba-stat">3+</div>
                <div className="etykieta-stat">Lata nauki</div>
              </div>
              <div className="statystyka-element">
                <div className="liczba-stat">100%</div>
                <div className="etykieta-stat">Zaangażowanie</div>
              </div>
            </div>
          </div>

          <div 
            ref={refCech}
            className={`siatka-cech ${widocznoscCech ? 'animacja-wjazd-prawo' : ''}`}
          >
            {cechyProgramisty.map((cecha, idx) => (
              <div 
                key={idx} 
                className="karta-cechy"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="ikona-cechy">{cecha.ikona}</div>
                <h4 className="nazwa-cechy">{cecha.nazwa}</h4>
                <p className="opis-cechy">{cecha.szczegoly}</p>
                <div className="linia-podswietlenia"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrefaInformacji;
