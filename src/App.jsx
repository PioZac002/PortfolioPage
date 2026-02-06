import PasekNawigacyjny from './components/PasekNawigacyjny';
import SekcjaHero from './components/SekcjaHero';
import StrefaInformacji from './components/StrefaInformacji';
import TechZone from './components/TechZone';
import GaleriaProjektow from './components/GaleriaProjektow';
import StrefaAI from './components/StrefaAI';
import FormularzKontakt from './components/FormularzKontakt';
import StopkaStrony from './components/StopkaStrony';

const App = () => {
  return (
    <div className="aplikacja-portfolio">
      <PasekNawigacyjny />
      <SekcjaHero />
      <StrefaInformacji />
      <TechZone />
      <GaleriaProjektow />
      <StrefaAI />
      <FormularzKontakt />
      <StopkaStrony />
    </div>
  );
};

export default App;
