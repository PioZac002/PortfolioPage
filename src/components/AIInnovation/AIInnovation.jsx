import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';
import './AIInnovation.css';

const AIInnovation = () => {
  const { t } = useLanguage();
  const [headerRef, showHeader] = useScrollAnimation({ threshold: 0.28 });
  const [elementsRef, showElements] = useScrollAnimation({ threshold: 0.12 });

  const aiInnovations = [
    {
      title: t.aiInnovation.automation,
      details: t.aiInnovation.automationDesc,
      symbol: '⚙️',
      color: '#6C63FF'
    },
    {
      title: t.aiInnovation.aiAssisted,
      details: t.aiInnovation.aiAssistedDesc,
      symbol: '🤖',
      color: '#00D4FF'
    },
    {
      title: t.aiInnovation.modernTools,
      details: t.aiInnovation.modernToolsDesc,
      symbol: '🚀',
      color: '#9D4EDD'
    }
  ];

  return (
    <section id="ai-innovation" className="ai-territory">
      <div className="section-frame">
        <div 
          ref={headerRef}
          className={`ai-header ${showHeader ? 'header-flash' : ''}`}
        >
          <span className="mini-label">{t.aiInnovation.label}</span>
          <h2 className="main-ai-title">
            <span className="colorful-word">{t.aiInnovation.title}</span>
          </h2>
          <p className="intro-text">
            {t.aiInnovation.description}
          </p>
        </div>

        <div 
          ref={elementsRef}
          className={`innovations-matrix ${showElements ? 'enable-matrix' : ''}`}
        >
          {aiInnovations.map((innovation, indexNumber) => (
            <div 
              key={indexNumber}
              className="innovation-tile"
              style={{ '--element-number': indexNumber }}
            >
              <div className="tile-head">
                <div 
                  className="icon-orbit"
                  style={{ background: `linear-gradient(135deg, ${innovation.color}, ${innovation.color}cc)` }}
                >
                  <span className="ai-symbol">{innovation.symbol}</span>
                </div>
              </div>

              <div className="tile-body">
                <h3 className="innovation-name">{innovation.title}</h3>
                <p className="innovation-content">{innovation.details}</p>
              </div>

              <div className="bottom-line"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="background-clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>
    </section>
  );
};

export default AIInnovation;
