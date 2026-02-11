import { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(108, 99, 255, 0.8)';
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(108, 99, 255, 0.9)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create particles (fewer on mobile)
    const particleCount = window.innerWidth < 768 ? 50 : 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.4 * (1 - distance / 150)})`;
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(0, 212, 255, 0.5)';
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas-bg"></canvas>
      
      <div className="hero-gradient-overlay"></div>
      
      <div className="hero-content-center">
        <div className="avatar-container">
          <div className="glowing-frame">
            <img 
              src="https://avatars.githubusercontent.com/u/98386022?v=4" 
              alt="PioZac002 Avatar"
              className="avatar-image"
            />
          </div>
        </div>

        <h1 className="hero-greeting">
          <span className="greeting-text">{t.hero.greeting}</span>
          <span className="name-gradient">{t.hero.name}</span>
        </h1>

        <div className="role-description">
          <span className="tag-open">{"<"}</span>
          <span className="role-text">{t.hero.role}</span>
          <span className="tag-close">{"/>"}</span>
        </div>

        <p className="hero-motto">
          {t.hero.description}
        </p>

        <div className="hero-action-buttons">
          <a href="#projects" className="hero-primary-button">
            <span className="button-text">{t.hero.exploreProjects}</span>
            <span className="arrow-icon">→</span>
          </a>
          <a href="#contact" className="hero-secondary-button">
            <span className="button-text">{t.hero.contactMe}</span>
          </a>
        </div>

        <div className="scroll-indicator">
          <div className="mouse-animated">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">{t.hero.scrollDown}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
