import { useLanguage } from '../../context/language';
import { useFeed } from '../../hooks/useFeed';
import './Diagnosis.css';

/* §2 — the paid record. Every instrument named here is named in one of the
   six responsibilities below it; nothing is added to round out the list. */
const INSTRUMENTS = [
  '.NET',
  'Visual Studio',
  'JetBrains ReSharper',
  'SQL',
  'Cherwell',
  'Halo',
  'Application logs'
];

const Diagnosis = () => {
  const { t } = useLanguage();
  const [feedRef, feedClass] = useFeed(0.08);

  const findings = [
    t.diagnosis.finding1,
    t.diagnosis.finding2,
    t.diagnosis.finding3,
    t.diagnosis.finding4,
    t.diagnosis.finding5,
    t.diagnosis.finding6
  ];

  return (
    <section id="diagnosis" className="sec">
      <div className="sec__head">
        <span className="sec__no">§2</span>
        <h2 className="sec__title">{t.diagnosis.section}</h2>
        <span className="sec__count">{t.diagnosis.count}</span>
      </div>

      <p className="prose sec__note">{t.diagnosis.note}</p>

      <div className="cell__grid dg__fields">
        <div className="cell dg__cell--role">
          <span className="lbl">{t.subject.fieldClassification}</span>
          <span className="dg__role">{t.diagnosis.role}</span>
        </div>
        <div className="cell">
          <span className="lbl">{t.diagnosis.employerLabel}</span>
          <span className="val">{t.diagnosis.employer}</span>
        </div>
        <div className="cell">
          <span className="lbl">{t.diagnosis.arrangementLabel}</span>
          <span className="val">{t.diagnosis.arrangement}</span>
        </div>
        <div className="cell dg__cell--period">
          <span className="lbl">{t.diagnosis.periodLabel}</span>
          <span className="val">{t.diagnosis.period}</span>
        </div>
      </div>

      <div className="dg__findings">
        <div className="dg__findings-head">
          <span className="lbl">{t.diagnosis.findingsLabel}</span>
          <span className="lbl">{findings.length}</span>
        </div>
        <ol ref={feedRef} className={`reg ${feedClass}`}>
          {findings.map((finding, i) => (
            <li key={i} className="reg__row dg__row" style={{ '--i': i }}>
              <span className="dg__row-no">F-{String(i + 1).padStart(2, '0')}</span>
              <span className="dg__row-text">{finding}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="dg__instruments">
        <span className="lbl">{t.diagnosis.toolsLabel}</span>
        <ul className="dg__chips">
          {INSTRUMENTS.map((instrument) => (
            <li key={instrument} className="dg__chip">
              {instrument}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Diagnosis;
