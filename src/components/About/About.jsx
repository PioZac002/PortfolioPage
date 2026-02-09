import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [descRef, descVisible] = useScrollAnimation({ threshold: 0.2 });
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.15 });

  const features = [
    {
      icon: '💡',
      title: t.about.creativity,
      description: t.about.creativityDesc
    },
    {
      icon: '⚡',
      title: t.about.performance,
      description: t.about.performanceDesc
    },
    {
      icon: '🎯',
      title: t.about.precision,
      description: t.about.precisionDesc
    },
    {
      icon: '🚀',
      title: t.about.innovation,
      description: t.about.innovationDesc
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div 
          ref={titleRef}
          className={`section-header ${titleVisible ? 'slide-in-top' : ''}`}
        >
          <span className="small-label">{t.about.label}</span>
          <h2 className="section-title">
            <span className="gradient-underline">{t.about.title}</span>
          </h2>
        </div>

        <div className="about-grid">
          <div 
            ref={descRef}
            className={`glass-panel-description ${descVisible ? 'slide-in-left' : ''}`}
          >
            <div className="text-block">
              <h3 className="block-subtitle">{t.about.subtitle}</h3>
              <p className="description-paragraph">
                {t.about.description1.split('{fullStack}')[0]}
                <span className="color-accent">{t.about.fullStack}</span>
                {t.about.description1.split('{fullStack}')[1]}
              </p>
              <p className="description-paragraph">
                {t.about.description2.split('{ai}')[0]}
                <span className="color-accent">{t.about.ai}</span>
                {t.about.description2.split('{ai}')[1]}
              </p>
              <p className="description-paragraph">
                {t.about.description3.split('{clean}')[0]}
                <span className="color-accent">{t.about.clean}</span>
                {t.about.description3.split('{clean}')[1]}
              </p>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">{t.about.projects}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">{t.about.yearsLearning}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">{t.about.commitment}</div>
              </div>
            </div>
          </div>

          <div 
            ref={featuresRef}
            className={`features-grid ${featuresVisible ? 'slide-in-right' : ''}`}
          >
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="feature-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
                <div className="highlight-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
