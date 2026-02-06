import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/StrefaAI.css';

const StrefaAI = () => {
  const [refNaglowka, ukazNaglowek] = useScrollAnimation({ threshold: 0.28 });
  const [refElementow, ukazElementy] = useScrollAnimation({ threshold: 0.12 });

  const innowacjeAI = [
    {
      tytulInnowacji: 'Integracja z GPT',
      detaleInnowacji: 'Wykorzystuję modele językowe do automatyzacji zadań i usprawnienia workflow',
      symbolika: '🤖',
      barwa: '#6C63FF'
    },
    {
      tytulInnowacji: 'Machine Learning',
      detaleInnowacji: 'Eksperymenty z algorytmami ML w aplikacjach webowych dla lepszych doświadczeń',
      symbolika: '🧠',
      barwa: '#00D4FF'
    },
    {
      tytulInnowacji: 'Automatyzacja',
      detaleInnowacji: 'Tworzenie inteligentnych systemów automatyzujących powtarzalne procesy',
      symbolika: '⚙️',
      barwa: '#9D4EDD'
    },
    {
      tytulInnowacji: 'Analiza Danych',
      detaleInnowacji: 'Wykorzystanie AI do analizy i wizualizacji dużych zbiorów danych',
      symbolika: '📊',
      barwa: '#06FFA5'
    }
  ];

  return (
    <section id="strefa-ai" className="teritorium-ai">
      <div className="rama-sekcji">
        <div 
          ref={refNaglowka}
          className={`naglowek-ai ${ukazNaglowek ? 'rozblysk-naglowka' : ''}`}
        >
          <span className="etykietka-mini">Przyszłość</span>
          <h2 className="tytul-glowny-ai">
            <span className="kolorowy-wyraz">AI & Innowacje</span>
          </h2>
          <p className="wstep-tekstowy">
            Fascynacja sztuczną inteligencją i jej zastosowaniem w nowoczesnych aplikacjach
          </p>
        </div>

        <div 
          ref={refElementow}
          className={`matryca-innowacji ${ukazElementy ? 'wlacz-matryca' : ''}`}
        >
          {innowacjeAI.map((innowacja, numerIndeksu) => (
            <div 
              key={numerIndeksu}
              className="kafelek-innowacji"
              style={{ '--numer-elementu': numerIndeksu }}
            >
              <div className="glowa-kafelka">
                <div 
                  className="orbita-ikony"
                  style={{ background: `linear-gradient(135deg, ${innowacja.barwa}, ${innowacja.barwa}cc)` }}
                >
                  <span className="symbol-ai">{innowacja.symbolika}</span>
                </div>
              </div>

              <div className="korpus-kafelka">
                <h3 className="nazwa-innowacji">{innowacja.tytulInnowacji}</h3>
                <p className="tresc-innowacji">{innowacja.detaleInnowacji}</p>
              </div>

              <div className="dolna-linia"></div>
            </div>
          ))}
        </div>

        <div className="pudlo-motto">
          <div className="cytat-ai">
            <span className="cudzyslow-lewy">"</span>
            <p className="tekst-cytatu">
              Sztuczna inteligencja to nie tylko narzędzie, to sposób myślenia o rozwiązywaniu problemów.
              Stale uczę się i eksper ymentuję, aby tworzyć aplikacje wykorzystujące potencjał AI.
            </p>
            <span className="cudzyslow-prawy">"</span>
          </div>
        </div>
      </div>

      <div className="chmury-tla">
        <div className="chmura chmura-1"></div>
        <div className="chmura chmura-2"></div>
        <div className="chmura chmura-3"></div>
      </div>
    </section>
  );
};

export default StrefaAI;
