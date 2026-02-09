import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formRef, isFormVisible] = useScrollAnimation({ threshold: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sendStatus, setSendStatus] = useState({
    sending: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setSendStatus({
      sending: true,
      success: false,
      message: ''
    });

    setTimeout(() => {
      setSendStatus({
        sending: false,
        success: true,
        message: t.contact.success
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setSendStatus({
          sending: false,
          success: false,
          message: ''
        });
      }, 4000);
    }, 1500);
  };

  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/PioZac002', emoji: '⚡' },
    { platform: 'LinkedIn', url: '#', emoji: '💼' },
    { platform: 'Twitter', url: '#', emoji: '🐦' },
    { platform: 'Email', url: 'mailto:contact@piozac.dev', emoji: '📧' }
  ];

  return (
    <section id="contact" className="contact-sector">
      <div className="container-wrapper">
        <div className="contact-header">
          <span className="small-tag">{t.contact.label}</span>
          <h2 className="contact-title">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="intro-description">
            {t.contact.description}
          </p>
        </div>

        <div className="contact-layout">
          <div className="info-panel">
            <div className="info-block">
              <h3 className="info-subtitle">{t.contact.label}</h3>
              <p className="info-content">
                {t.contact.description}
              </p>
            </div>

            <div className="social-links">
              <h4 className="links-title">Find me on:</h4>
              <div className="links-grid">
                {socialLinks.map((link, num) => (
                  <a
                    key={num}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                  >
                    <span className="platform-icon">{link.emoji}</span>
                    <span className="platform-name">{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div 
            ref={formRef}
            className={`form-plate ${isFormVisible ? 'form-active' : ''}`}
          >
            <form onSubmit={handleSubmit} className="form-structure">
              <div className="field-group">
                <label htmlFor="name" className="field-label">{t.contact.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-field"
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="field-group">
                <label htmlFor="email" className="field-label">{t.contact.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-field"
                  required
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="field-group">
                <label htmlFor="message" className="field-label">{t.contact.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-field text-field"
                  required
                  placeholder={t.contact.message}
                  rows="5"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="send-button"
                disabled={sendStatus.sending}
              >
                {sendStatus.sending ? (
                  <>
                    <span className="loading-spinner"></span>
                    <span>{t.contact.sending}</span>
                  </>
                ) : (
                  <>
                    <span>{t.contact.send}</span>
                    <span className="send-arrow">→</span>
                  </>
                )}
              </button>

              {sendStatus.message && (
                <div className={`notification ${sendStatus.success ? 'success' : 'error'}`}>
                  {sendStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
