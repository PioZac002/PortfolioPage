import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import AIInnovation from './components/AIInnovation/AIInnovation';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="portfolio-app">
          <Navbar />
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <AIInnovation />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
