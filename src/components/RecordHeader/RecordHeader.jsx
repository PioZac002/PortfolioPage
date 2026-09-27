import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../context/language';
import { useCopy } from '../../context/copy';
import { useActiveSection } from '../../hooks/useFeed';
import Icon from '../../ui/Icon';
import './RecordHeader.css';

const SECTIONS = [
  'subject',
  'diagnosis',
  'competence',
  'construction',
  'qualifications',
  'closure'
];

const RecordHeader = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const { copy, setCopy } = useCopy();
  const [indexOpen, setIndexOpen] = useState(false);
  const ids = useMemo(() => SECTIONS, []);
  const active = useActiveSection(ids);

  useEffect(() => {
    if (!indexOpen) return;
    const onKey = (event) => {
      if (event.key === 'Escape') setIndexOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [indexOpen]);

  const jump = (event, id) => {
    event.preventDefault();
    const node = document.getElementById(id);
    if (!node) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: node.offsetTop - 74,
      behavior: reduced ? 'auto' : 'smooth'
    });
    setIndexOpen(false);
  };

  return (
    <header className="rh">
      <div className="rh__strip">
        <div className="sheet__inner rh__strip-in">
          <span className="rh__no">{t.meta.recordNo}</span>
          <span className="rh__form">{t.meta.form}</span>
          <h1 className="rh__title">
            <span className="rh__title-full">{t.meta.recordTitle}</span>
            <span className="rh__title-short">{t.meta.recordTitleShort}</span>
          </h1>
          <span className="rh__rev">{t.meta.revision}</span>
          <span className="state-chip">{t.meta.status}</span>
        </div>
      </div>

      <nav className="rh__bar" aria-label={t.index.jumpTo}>
        <div className="sheet__inner rh__bar-in">
          <button
            type="button"
            className="rh__toggle"
            aria-expanded={indexOpen}
            onClick={() => setIndexOpen((open) => !open)}
          >
            <span className="rh__toggle-label">{t.index.label}</span>
            <span className="rh__toggle-active">
              §{ids.indexOf(active) + 1} {t.index[active]}
            </span>
            <Icon name="chevron" size={13} />
          </button>

          <ol className={`rh__index${indexOpen ? ' rh__index--open' : ''}`}>
            {ids.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(event) => jump(event, id)}
                  className={`rh__link${active === id ? ' rh__link--active' : ''}`}
                  aria-current={active === id ? 'true' : undefined}
                >
                  <span className="rh__link-no">§{i + 1}</span>
                  <span className="rh__link-name">{t.index[id]}</span>
                </a>
              </li>
            ))}
          </ol>

          <div className="rh__sel">
            <div className="sel" role="group" aria-label={t.controls.copyHint}>
              <span className="lbl sel__legend">{t.controls.copy}</span>
              <div className="sel__opts">
                <button
                  type="button"
                  className="sel__opt"
                  aria-pressed={copy === 'top'}
                  onClick={() => setCopy('top')}
                >
                  {t.controls.copyTop}
                </button>
                <button
                  type="button"
                  className="sel__opt"
                  aria-pressed={copy === 'archive'}
                  onClick={() => setCopy('archive')}
                >
                  {t.controls.copyArchive}
                </button>
              </div>
            </div>

            <div className="sel" role="group" aria-label={t.controls.langHint}>
              <span className="lbl sel__legend">{t.controls.lang}</span>
              <div className="sel__opts">
                <button
                  type="button"
                  className="sel__opt"
                  aria-pressed={language === 'en'}
                  onClick={() => language !== 'en' && toggleLanguage()}
                >
                  EN
                </button>
                <button
                  type="button"
                  className="sel__opt"
                  aria-pressed={language === 'pl'}
                  onClick={() => language !== 'pl' && toggleLanguage()}
                >
                  PL
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default RecordHeader;
