import '../styles/SekcjaHero.css';

const SekcjaHero = () => {
  return (
    <section id="domek" className="strefa-hero">
      <div className="tlo-iframe-3d">
        <iframe 
          src='https://my.spline.design/boxeshover-HASNk8iNl8FbNKNWYmxtqO3W/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="3D Background Animation"
        />
      </div>
      
      <div className="warstwa-nakładki-gradientu"></div>
      
      <div className="tresc-centralna-hero">
        <div className="awatar-kontener">
          <div className="ramka-swiecaca">
            <img 
              src="https://avatars.githubusercontent.com/u/98386022?v=4" 
              alt="PioZac002 Avatar"
              className="obrazek-avatara"
            />
          </div>
        </div>

        <h1 className="tytul-powitanie">
          <span className="tekst-witam">Witaj, jestem</span>
          <span className="imie-gradient">PioZac002</span>
        </h1>

        <div className="opis-roli">
          <span className="tag-otwierajacy">{"<"}</span>
          <span className="rola-tekst">Full Stack Developer & AI Enthusiast</span>
          <span className="tag-zamykajacy">{"/>"}</span>
        </div>

        <p className="motto-developerskie">
          Tworzę nowoczesne aplikacje webowe z wykorzystaniem najnowszych technologii
          i sztucznej inteligencji. Przekształcam pomysły w działające rozwiązania.
        </p>

        <div className="przyciski-hero-akcji">
          <a href="#galeria-projektow" className="przycisk-glowny-hero">
            <span className="tekst-przycisku">Odkryj Projekty</span>
            <span className="ikona-strzalki">→</span>
          </a>
          <a href="#formularz-kontakt" className="przycisk-dodatkowy-hero">
            <span className="tekst-przycisku">Skontaktuj się</span>
          </a>
        </div>

        <div className="wskaznik-przewijania">
          <div className="mysz-animowana">
            <div className="kolko-przewijania"></div>
          </div>
          <span className="tekst-przewijania">Przewiń w dół</span>
        </div>
      </div>
    </section>
  );
};

export default SekcjaHero;
