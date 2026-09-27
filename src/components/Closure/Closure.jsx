import { useLanguage } from '../../context/language';
import Icon from '../../ui/Icon';
import './Closure.css';

const EMAIL = 'piotrek.zacminski2002@gmail.com';

/* §6 — the closure block: contact channels, then the form-number strip. */

const Closure = ({ onCopyEmail, emailCopied }) => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();


  return (
    <>
      <div className="sheet__inner">
        <section id="closure" className="sec cl">
        <div className="sec__head">
          <span className="sec__no">§6</span>
          <h2 className="sec__title">{t.closure.section}</h2>
        </div>

        <p className="prose sec__note">{t.closure.note}</p>

        <div className="cl__channels">
          <span className="lbl">{t.closure.contactLabel}</span>
          <div className="cl__acts">
            <a
              className="act act--primary cl__act"
              href="https://github.com/PioZac002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" size={16} />
              {t.closure.github}
              <Icon name="external" size={12} />
            </a>
            <a
              className="act cl__act"
              href="https://www.linkedin.com/in/piotr-za%C4%87mi%C5%84ski-587263199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" size={16} />
              {t.closure.linkedin}
              <Icon name="external" size={12} />
            </a>
            <button
              type="button"
              className="act cl__act"
              onClick={onCopyEmail}
              aria-label={t.closure.emailAria}
            >
              <Icon name={emailCopied ? 'check' : 'mail'} size={16} />
              {emailCopied ? t.closure.emailCopied : t.closure.email}
            </button>
          </div>
          <p className="cl__email val">{EMAIL}</p>
        </div>
        </section>
      </div>

      <footer className="cl__foot">
        <div className="sheet__inner cl__foot-in">
          <div className="cl__signed">
            <span className="lbl">{t.closure.signedLabel}</span>
            <span className="cl__signed-name">{t.closure.signedValue}</span>
          </div>
          <div className="cl__built">
            <span className="lbl">{t.closure.builtLabel}</span>
            <span className="val">React 19 · Vite · CSS</span>
          </div>
          <div className="cl__stamp-strip">
            <span className="val">{t.meta.recordNo}</span>
            <span className="val">{t.meta.form}</span>
            <span className="val">{t.meta.revision}</span>
            <span className="val">
              © {year} Piotr Zaćmiński - {t.closure.rights}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Closure;
