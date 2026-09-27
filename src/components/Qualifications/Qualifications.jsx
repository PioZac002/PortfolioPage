import { useLanguage } from '../../context/language';
import { useFeed } from '../../hooks/useFeed';
import { at } from '../../lib/scale';
import Icon from '../../ui/Icon';
import Span from '../../ui/Span';
import './Qualifications.css';

const YEARS = [2022, 2023, 2024, 2025, 2026];

const Qualifications = () => {
  const { t } = useLanguage();
  const [feedRef, feedClass] = useFeed(0.06);

  const certifications = [
    { name: t.qualifications.cert1, provider: t.qualifications.cert1Provider },
    { name: t.qualifications.cert2, provider: t.qualifications.cert2Provider },
    { name: t.qualifications.cert3, provider: t.qualifications.cert3Provider },
    { name: t.qualifications.cert4, provider: t.qualifications.cert4Provider },
    { name: t.qualifications.cert6, provider: t.qualifications.cert6Provider },
    { name: t.qualifications.cert5, provider: t.qualifications.cert5Provider }
  ];

  return (
    <section id="qualifications" className="sec">
      <div className="sec__head">
        <span className="sec__no">§5</span>
        <h2 className="sec__title">{t.qualifications.section}</h2>
        <span className="sec__count">
          {certifications.length + 1} {t.competence.countSuffix}
        </span>
      </div>

      <p className="prose sec__note">{t.qualifications.note}</p>

      <div className="cell__grid ql__fields">
        <div className="cell ql__cell--degree">
          <span className="lbl">{t.qualifications.degreeLabel}</span>
          <span className="ql__degree">{t.qualifications.degree}</span>
        </div>
        <div className="cell">
          <span className="lbl">{t.qualifications.fieldLabel}</span>
          <span className="val">{t.qualifications.field}</span>
        </div>
        <div className="cell">
          <span className="lbl">{t.qualifications.periodLabel}</span>
          <span className="val">{t.qualifications.period}</span>
        </div>
        <div className="cell ql__cell--uni">
          <span className="lbl">{t.qualifications.universityLabel}</span>
          <span className="val">{t.qualifications.university}</span>
          <span className="val ql__uni-full">{t.qualifications.universityFull}</span>
        </div>
        <div className="cell ql__cell--langs">
          <span className="lbl">{t.qualifications.languagesLabel}</span>
          <span className="val">{t.qualifications.languages}</span>
        </div>
        <div className="cell ql__cell--program">
          <span className="lbl">{t.qualifications.programLabel}</span>
          <span className="val">{t.qualifications.program}</span>
        </div>
      </div>

      {/* One shared measure, printed once so the rest of the page's bands can
          be read against it. */}
      <div className="ql__timeline">
        <div className="ql__timeline-head">
          <span className="lbl">{t.qualifications.timelineLabel}</span>
          <span className="ql__scale-note">{t.qualifications.timelineNote}</span>
        </div>

        <div className="ql__ruler" aria-hidden="true">
          <span className="ql__year" style={{ left: 0 }}>
            2021
          </span>
          {YEARS.map((year) => (
            <span key={year} className="ql__year" style={{ left: `${at(year)}%` }}>
              {year}
            </span>
          ))}
        </div>

        <div className="ql__bars">
          <div className="ql__bar">
            <span className="lbl ql__bar-label">{t.qualifications.rowDegree}</span>
            <Span
              from={2021 + 8 / 12}
              to={2025 + 2 / 12}
              label={`${t.qualifications.rowDegree}: ${t.qualifications.period}`}
            />
            <span className="val ql__bar-value">{t.qualifications.period}</span>
          </div>

          <div className="ql__bar">
            <span className="lbl ql__bar-label">{t.qualifications.rowEngagement}</span>
            <Span
              from={2022 + 8 / 12}
              label={`${t.qualifications.rowEngagement}: ${t.diagnosis.period}`}
            />
            <span className="val ql__bar-value">{t.diagnosis.period}</span>
          </div>
        </div>
      </div>

      <div className="ql__certs">
        <div className="ql__certs-head">
          <span className="lbl">{t.qualifications.certificationsLabel}</span>
          <span className="lbl">{certifications.length}</span>
        </div>
        <ol ref={feedRef} className={`reg ${feedClass}`}>
          {certifications.map((certification, i) => (
            <li key={certification.name} className="reg__row ql__cert" style={{ '--i': i }}>
              <span className="ql__cert-tick" aria-hidden="true">
                <Icon name="check" size={10} />
              </span>
              <span className="ql__cert-name">{certification.name}</span>
              <span className="ql__cert-provider">
                <span className="lbl">{t.qualifications.providerLabel}</span>
                <span className="val">{certification.provider}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Qualifications;
