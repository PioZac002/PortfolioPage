import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';
import './TechStack.css';

const TechStack = () => {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 });
  const [techRef, techVisible] = useScrollAnimation({ threshold: 0.1 });

  const techCategories = [
    {
      category: t.techStack.frontend,
      color: '#6C63FF',
      technologies: [
        'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
        'Shadcn/ui', 'Redux Toolkit', 'React Router 6', 'React Query',
        'Axios', 'Zod', 'HTML5', 'CSS3'
      ]
    },
    {
      category: t.techStack.backend,
      color: '#00D4FF',
      technologies: [
        'Node.js', 'Express.js', 'MongoDB',
        '.NET (OOP basics)', 'Java (OOP basics)', 'C / C++ (basics)'
      ]
    },
    {
      category: t.techStack.aiAutomation,
      color: '#9D4EDD',
      technologies: [
        'N8N', 'AI-assisted development', 'GitHub Copilot', 'Prompt Engineering'
      ]
    },
    {
      category: t.techStack.tools,
      color: '#F72585',
      technologies: [
        'Git', 'GitHub', 'Azure DevOps', 'Postman', 'Docker', 'Figma', 'Vite',
        'AWS (basics)'
      ]
    }
  ];

  return (
    <section id="tech-stack" className="tech-stack-section">
      <div className="main-container">
        <div 
          ref={headerRef}
          className={`title-block ${headerVisible ? 'reveal-title' : ''}`}
        >
          <span className="small-text">{t.techStack.label}</span>
          <h2 className="large-title">
            <span className="colorful-expression">{t.techStack.title}</span>
          </h2>
          <p className="intro-description">
            {t.techStack.description}
          </p>
        </div>

        <div 
          ref={techRef}
          className={`categories-layout ${techVisible ? 'show-categories' : ''}`}
        >
          {techCategories.map((category, index) => (
            <div 
              key={index}
              className="tech-box"
              style={{ '--category-delay': `${index * 0.15}s` }}
            >
              <div className="category-header">
                <div 
                  className="category-indicator"
                  style={{ background: category.color }}
                ></div>
                <h3 className="category-name">{category.category}</h3>
              </div>

              <div className="tech-badges-grid">
                {category.technologies.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="tech-badge"
                    style={{ '--badge-delay': `${idx * 0.05}s` }}
                  >
                    <span className="tech-name">{tech}</span>
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

export default TechStack;
