import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/TechZone.css';

const TechZone = () => {
  const [refNaglowka, widocznoscNaglowka] = useScrollAnimation({ threshold: 0.3 });
  const [refTechnologii, widocznoscTechnologii] = useScrollAnimation({ threshold: 0.1 });

  const pakietyTechnologiczne = [
    {
      kategoria: 'Frontend',
      kolorAkcent: '#6C63FF',
      narzedzia: [
        { nazwa: 'React', poziom: 90 },
        { nazwa: 'TypeScript', poziom: 85 },
        { nazwa: 'Tailwind CSS', poziom: 88 },
        { nazwa: 'Next.js', poziom: 80 }
      ]
    },
    {
      kategoria: 'Backend',
      kolorAkcent: '#00D4FF',
      narzedzia: [
        { nazwa: 'Node.js', poziom: 85 },
        { nazwa: 'Express', poziom: 82 },
        { nazwa: 'PostgreSQL', poziom: 78 },
        { nazwa: 'MongoDB', poziom: 80 }
      ]
    },
    {
      kategoria: 'Tools & Other',
      kolorAkcent: '#9D4EDD',
      narzedzia: [
        { nazwa: 'Git & GitHub', poziom: 88 },
        { nazwa: 'Docker', poziom: 75 },
        { nazwa: 'REST API', poziom: 90 },
        { nazwa: 'Figma', poziom: 72 }
      ]
    }
  ];

  return (
    <section id="tech-zone" className="przestrzen-technologiczna">
      <div className="kontener-glowny">
        <div 
          ref={refNaglowka}
          className={`blok-tytulowy ${widocznoscNaglowka ? 'ujawnianie-tytulu' : ''}`}
        >
          <span className="maly-napis">Mój arsenał</span>
          <h2 className="wielki-tytul">
            <span className="wyrazenie-kolorowe">Tech Stack</span>
          </h2>
          <p className="wstepny-opis">
            Technologie i narzędzia, których używam do tworzenia nowoczesnych aplikacji
          </p>
        </div>

        <div 
          ref={refTechnologii}
          className={`uklad-pakietow ${widocznoscTechnologii ? 'pokaz-pakiety' : ''}`}
        >
          {pakietyTechnologiczne.map((pakiet, indeks) => (
            <div 
              key={indeks}
              className="pudlo-technologii"
              style={{ '--delay-pakietu': `${indeks * 0.15}s` }}
            >
              <div className="naglowek-kategorii">
                <div 
                  className="lampka-kategorii"
                  style={{ background: pakiet.kolorAkcent }}
                ></div>
                <h3 className="nazwa-kategorii">{pakiet.kategoria}</h3>
              </div>

              <div className="lista-umiejetnosci">
                {pakiet.narzedzia.map((tech, idx) => (
                  <div key={idx} className="element-technologii">
                    <div className="gora-technologii">
                      <span className="etykieta-technologii">{tech.nazwa}</span>
                      <span className="procent-umiejetnosci">{tech.poziom}%</span>
                    </div>
                    <div className="tlo-paska">
                      <div 
                        className="wypelnienie-paska"
                        style={{ 
                          width: `${tech.poziom}%`,
                          background: `linear-gradient(90deg, ${pakiet.kolorAkcent}, ${pakiet.kolorAkcent}dd)`
                        }}
                      >
                        <div className="blask-paska"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechZone;
