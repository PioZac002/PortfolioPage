import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [descRef, descVisible] = useScrollAnimation({ threshold: 0.2 });
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.15 });
  const [experienceRef, experienceVisible] = useScrollAnimation({ threshold: 0.2 });

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

  const responsibilities = [
    t.about.resp1,
    t.about.resp2,
    t.about.resp3,
    t.about.resp4,
    t.about.resp5,
    t.about.resp6
  ];

  const certifications = [
    { name: t.about.cert1, provider: t.about.cert1Provider },
    { name: t.about.cert2, provider: t.about.cert2Provider },
    { name: t.about.cert3, provider: t.about.cert3Provider }
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

        {/* Professional Experience, Education & Certifications */}
        <div 
          ref={experienceRef}
          className={`experience-section ${experienceVisible ? 'fade-in-up' : ''}`}
        >
          {/* Work Experience */}
          <div className="experience-card">
            <div className="card-header">
              <div className="header-icon">💼</div>
              <h3 className="card-title">{t.about.workExperience}</h3>
            </div>
            <div className="card-content">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="job-title">{t.about.jobTitle}</h4>
                  <div className="company-info">
                    <span className="company-name">{t.about.company}</span>
                    <span className="job-type-badge">{t.about.jobType}</span>
                  </div>
                  <div className="responsibilities-section">
                    <h5 className="responsibilities-title">{t.about.responsibilities}</h5>
                    <ul className="responsibilities-list">
                      {responsibilities.map((resp, idx) => (
                        <li key={idx} className="responsibility-item">{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="experience-card">
            <div className="card-header">
              <div className="header-icon">🎓</div>
              <h3 className="card-title">{t.about.education}</h3>
            </div>
            <div className="card-content">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="degree-title">{t.about.degree}</h4>
                  <div className="university-info">
                    <span className="university-name">{t.about.university}</span>
                    <span className="university-full">({t.about.universityFull})</span>
                  </div>
                  <div className="study-details">
                    <p className="field-of-study">
                      <strong>{t.about.fieldOfStudy}</strong>
                    </p>
                    <p className="study-period">{t.about.studyPeriod}</p>
                    <p className="program-description">{t.about.programDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="experience-card">
            <div className="card-header">
              <div className="header-icon">📜</div>
              <h3 className="card-title">{t.about.certifications}</h3>
            </div>
            <div className="card-content">
              <div className="certifications-grid">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="certification-item">
                    <div className="cert-marker">✓</div>
                    <div className="cert-details">
                      <p className="cert-name">{cert.name}</p>
                      <p className="cert-provider">{cert.provider}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
