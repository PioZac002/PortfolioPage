import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';
import './Projects.css';

import tsimg1 from '../../assets/tsimg1.png';
import tsimg2 from '../../assets/tsimg2.png';
import tsimg3 from '../../assets/tsimg3.png';
import barberapp1 from '../../assets/barberapp1.png';
import barberapp2 from '../../assets/barberapp2.png';
import barberapp3 from '../../assets/barberapp3.png';

const Projects = () => {
  const { t } = useLanguage();
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.25 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.08 });
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 });

  const projects = [
    {
      name: t.projects.taskSystem.name,
      description: t.projects.taskSystem.description,
      tech: ['JavaScript', 'React', 'Vite'],
      repoLink: 'https://github.com/PioZac002/TaskSystemFront',
      liveLink: 'http://komuna.site/',
      images: [tsimg1, tsimg2, tsimg3],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '📋'
    },
    {
      name: t.projects.barberApp.name,
      description: t.projects.barberApp.description,
      tech: ['TypeScript', 'React', 'Vite'],
      repoLink: 'https://github.com/PioZac002/BarberAppv2',
      liveLink: 'https://barberappv2-1.onrender.com/',
      images: [barberapp1, barberapp2, barberapp3],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '✂️'
    },
    {
      name: t.projects.portfolioPage.name,
      description: t.projects.portfolioPage.description,
      tech: ['React', 'Vite', 'CSS3'],
      repoLink: 'https://github.com/PioZac002/PortfolioPage',
      liveLink: null,
      images: null,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: '🌐'
    }
  ];

  const openLightbox = (images) => setLightbox({ open: true, images, index: 0 });
  const closeLightbox = () => setLightbox({ open: false, images: [], index: 0 });
  const prevImage = () => setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }));
  const nextImage = () => setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.images.length }));

  useEffect(() => {
    if (!lightbox.open) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox.open]);

  return (
    <>
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
                    {project.images && (
                      <button
                        onClick={() => openLightbox(project.images)}
                        className="action-button photos-button"
                      >
                        <span>🖼️</span>
                        <span>{t.projects.seePhotos}</span>
                      </button>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button live-button"
                      >
                        <span>{t.projects.checkLive}</span>
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

      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-prev" onClick={prevImage}>‹</button>
            <img
              src={lightbox.images[lightbox.index]}
              alt={`screenshot ${lightbox.index + 1}`}
              className="lightbox-image"
            />
            <button className="lightbox-next" onClick={nextImage}>›</button>
            <div className="lightbox-dots">
              {lightbox.images.map((_, i) => (
                <span
                  key={i}
                  className={`lightbox-dot ${i === lightbox.index ? 'active' : ''}`}
                  onClick={() => setLightbox(lb => ({ ...lb, index: i }))}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
