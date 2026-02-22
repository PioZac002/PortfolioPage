import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.25 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.08 });

  const projects = [
    {
      name: t.projects.taskSystem.name,
      description: t.projects.taskSystem.description,
      tech: ['JavaScript', 'React', 'Vite'],
      repoLink: 'https://github.com/PioZac002/TaskSystemFront',
      demoLink: null,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '📋'
    },
    {
      name: t.projects.barberApp.name,
      description: t.projects.barberApp.description,
      tech: ['TypeScript', 'React', 'Vite'],
      repoLink: 'https://github.com/PioZac002/BarberAppv2',
      demoLink: null,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '✂️'
    },
    {
      name: t.projects.crushApp.name,
      description: t.projects.crushApp.description,
      tech: ['JavaScript', 'CSS', 'HTML'],
      repoLink: 'https://github.com/PioZac002/crushhapp',
      demoLink: null,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: '💬'
    },
    {
      name: t.projects.portfolioPage.name,
      description: t.projects.portfolioPage.description,
      tech: ['React', 'Vite', 'CSS3'],
      repoLink: 'https://github.com/PioZac002/PortfolioPage',
      demoLink: null,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: '🌐'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-wrapper">
        <div 
          ref={titleRef}
          className={`projects-header ${titleVisible ? 'title-reveal' : ''}`}
        >
          <span className="mini-label">{t.projects.label}</span>
          <h2 className="mega-title">
            <span className="gradient-title">{t.projects.title}</span>
          </h2>
          <p className="section-caption">
            {t.projects.description}
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`projects-mosaic ${cardsVisible ? 'activate-mosaic' : ''}`}
        >
          {projects.map((project, number) => (
            <div 
              key={number}
              className="project-capsule"
              style={{ '--sequence-num': number }}
            >
              <div 
                className="color-plate"
                style={{ background: project.gradient }}
              >
                <div className="mega-symbol">{project.icon}</div>
              </div>

              <div className="capsule-content">
                <h3 className="project-name-text">{project.name}</h3>
                <p className="description-details">{project.description}</p>

                <div className="tech-stack-display">
                  {project.tech.map((technology, idx) => (
                    <span key={idx} className="tech-tag">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="bottom-actions">
                  <a 
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button repo-button"
                  >
                    <span className="github-icon">⚡</span>
                    <span>{t.projects.repository}</span>
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button demo-button"
                    >
                      <span>{t.projects.demo}</span>
                      <span className="external-arrow">↗</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="glowing-project-frame"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
