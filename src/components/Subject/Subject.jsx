import { useLanguage } from '../../context/language';
import { useFeed } from '../../hooks/useFeed';
import Icon from '../../ui/Icon';
import './Subject.css';

const EMAIL = 'piotrek.zacminski2002@gmail.com';

const Subject = ({ onCopyEmail, emailCopied }) => {
  const { t } = useLanguage();
  const [parityRef, parityFeed] = useFeed(0.2);

  const split = (text, token, accent) => {
    if (!text.includes(`{${token}}`)) return text;
    const [before, after] = text.split(`{${token}}`);
    return (
      <>
        {before}
        <strong>{accent}</strong>
        {after}
      </>
    );
  };

  return (
    <section id="subject" className="sec sec--subject">
      <div className="sub__plate">
        <div className="sub__name-wrap">
          <h2 className="sub__name">{t.subject.name}</h2>
          <p className="sub__role">{t.subject.role}</p>
        </div>

        <figure className="sub__photo">
          <img
            src="https://avatars.githubusercontent.com/u/98386022?v=4"
            alt={t.subject.name}
            width="132"
            height="132"
            decoding="async"
          />
          <figcaption className="lbl">{t.subject.photoLabel}</figcaption>
        </figure>
      </div>

      <div className="cell__grid sub__fields">
        <div className="cell">
          <span className="lbl">{t.subject.fieldSubject}</span>
          <span className="val">{t.subject.name}</span>
        </div>
        <div className="cell">
          <span className="lbl">{t.subject.fieldClassification}</span>
          <span className="val">{t.subject.valueClassification}</span>
        </div>
        <div className="cell">
          <span className="lbl">{t.subject.fieldOpened}</span>
          <span className="val">{t.subject.valueOpened}</span>
        </div>
        <div className="cell">
          <span className="lbl">{t.subject.fieldLocation}</span>
          <span className="val">{t.subject.valueLocation}</span>
        </div>
      </div>

      <div className="cell sub__contact">
        <span className="lbl">{t.closure.contactLabel}</span>
        <div className="sub__acts">
          <a
            className="act act--primary"
            href="https://github.com/PioZac002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size={14} />
            {t.closure.github}
            <Icon name="external" size={11} />
          </a>
          <a
            className="act"
            href="https://www.linkedin.com/in/piotr-za%C4%87mi%C5%84ski-587263199"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" size={14} />
            {t.closure.linkedin}
            <Icon name="external" size={11} />
          </a>
          <button
            type="button"
            className="act"
            onClick={onCopyEmail}
            aria-label={t.closure.emailAria}
          >
            <Icon name={emailCopied ? 'check' : 'copy'} size={14} />
            {emailCopied ? t.closure.emailCopied : t.closure.email}
          </button>
          <span className="sub__email val">{EMAIL}</span>
        </div>
      </div>

      {/* The commanding axis: both halves of a defect, balanced by
          construction so neither reads as the other's footnote. */}
      <div ref={parityRef} className={`sub__parity ${parityFeed}`}>
        <div className="parity" style={{ '--i': 0 }}>
          <div className="parity__head">
            <span className="lbl">{t.subject.sideALabel}</span>
            <h3 className="parity__title">{t.subject.sideATitle}</h3>
          </div>
          <p className="parity__lead">{t.subject.sideALead}</p>
          <ul className="parity__list">
            <li>{t.subject.sideA1}</li>
            <li>{t.subject.sideA2}</li>
            <li>{t.subject.sideA3}</li>
          </ul>
          <a className="parity__foot" href="#diagnosis">
            <span>{t.subject.sideAFoot}</span>
            <span className="parity__ref">§2</span>
          </a>
        </div>

        <div className="parity" style={{ '--i': 1 }}>
          <div className="parity__head">
            <span className="lbl">{t.subject.sideBLabel}</span>
            <h3 className="parity__title">{t.subject.sideBTitle}</h3>
          </div>
          <p className="parity__lead">{t.subject.sideBLead}</p>
          <ul className="parity__list">
            <li>{t.subject.sideB1}</li>
            <li>{t.subject.sideB2}</li>
            <li>{t.subject.sideB3}</li>
          </ul>
          <a className="parity__foot" href="#construction">
            <span>{t.subject.sideBFoot}</span>
            <span className="parity__ref">§4</span>
          </a>
        </div>
      </div>

      <p className="sub__parity-note">{t.subject.parityNote}</p>

      <div className="sub__desc">
        <span className="lbl sub__desc-label">{t.subject.descriptionLabel}</span>
        <div className="sub__desc-body">
          <p className="prose">
            {split(t.subject.description1, 'fullStack', t.subject.fullStack)}
          </p>
          <p className="prose">{split(t.subject.description2, 'ai', t.subject.ai)}</p>
          <p className="prose">
            {split(t.subject.description3, 'clean', t.subject.clean)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subject;
