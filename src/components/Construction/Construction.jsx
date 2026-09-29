import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../../context/language';
import { useFeed } from '../../hooks/useFeed';
import Icon from '../../ui/Icon';
import Stamp from '../../ui/Stamp';
import './Construction.css';

/* Screenshots are filed by folder, not imported by hand:
   src/assets/projects/<slug>/current/  — the build as it stands now
   src/assets/projects/<slug>/previous/ — an earlier build, kept for comparison
   Files sort by name (01.jpg, 02.jpg…); an empty folder simply drops out. */
const SHOTS = import.meta.glob('../../assets/projects/*/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default'
});

const VERSIONS = ['current', 'previous'];

const shotsFor = (slug) =>
  VERSIONS.map((version) => ({
    version,
    images: Object.keys(SHOTS)
      .filter((path) => path.includes(`/projects/${slug}/${version}/`))
      .sort()
      .map((path) => SHOTS[path])
  })).filter((set) => set.images.length > 0);

const Construction = () => {
  const { t } = useLanguage();
  const [feedRef, feedClass] = useFeed(0.06);
  const [openRow, setOpenRow] = useState(0);
  const [viewer, setViewer] = useState({ open: false, images: [], index: 0, title: '' });
  const versionLabel = {
    current: t.construction.versionCurrent,
    previous: t.construction.versionPrevious
  };
  const closeRef = useRef(null);
  const restoreRef = useRef(null);
  const sheetRef = useRef(null);

  const entries = [
    {
      id: 'E-01',
      name: t.construction.taskSystemName,
      description: t.construction.taskSystemDesc,
      stack: ['JavaScript', 'React', 'Java', 'Spring Boot'],
      layers: [
        {
          name: t.construction.layerFrontend,
          stack: ['React 19', 'Vite', 'Zustand', 'Tailwind CSS', 'Radix UI', 'PWA']
        },
        {
          name: t.construction.layerBackend,
          stack: ['Java 25', 'Spring Boot 4', 'Spring Security (JWT)', 'JPA', 'PostgreSQL', 'Docker']
        },
        {
          name: t.construction.layerCloud,
          stack: ['Google Cloud Run', 'Cloud SQL', 'Secret Manager', 'Artifact Registry']
        }
      ],
      repo: 'https://github.com/PioZac002/TaskSystemm',
      live: 'https://tasksystem-frontend-687047392177.europe-west1.run.app/',
      opened: '08.10.2025',
      lastCommit: '27.09.2026',
      shots: shotsFor('tasksystem')
    },
    {
      id: 'E-02',
      name: t.construction.barberAppName,
      description: t.construction.barberAppDesc,
      stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
      layers: [
        {
          name: t.construction.layerFrontend,
          stack: ['React', 'Vite', 'Material UI', 'Tailwind CSS', 'Vitest', 'PWA']
        },
        {
          name: t.construction.layerBackend,
          stack: ['Node.js', 'Express', 'PostgreSQL', 'Docker']
        }
      ],
      repo: 'https://github.com/PioZac002/BarberAppv2',
      live: 'https://barberappv2026.onrender.com/',
      opened: '12.05.2025',
      lastCommit: '26.09.2026',
      shots: shotsFor('barberapp')
    },
    {
      id: 'E-03',
      name: t.construction.hala4Name,
      description: t.construction.hala4Desc,
      stack: ['TypeScript', 'React', 'Three.js', 'Node.js'],
      layers: [
        {
          name: t.construction.layerFrontend,
          stack: ['React 19', 'TypeScript', 'Vite', 'React Three Fiber', 'GLSL', 'Lenis']
        },
        {
          name: t.construction.layerAi,
          stack: ['OpenAI-compatible API', 'Groq', 'Node.js', 'SSE', 'Docker']
        }
      ],
      repo: 'https://github.com/PioZac002/hala-4',
      live: 'https://hala-4.onrender.com/',
      opened: '24.09.2026',
      lastCommit: '27.09.2026',
      shots: shotsFor('hala4')
    },
    {
      id: 'E-04',
      name: t.construction.portfolioName,
      description: t.construction.portfolioDesc,
      stack: ['React 19', 'Vite', 'CSS'],
      layers: [],
      repo: 'https://github.com/PioZac002/PortfolioPage',
      live: 'https://piozac002.github.io/PortfolioPage/',
      opened: '05.02.2026',
      lastCommit: '04.03.2026',
      shots: shotsFor('portfolio')
    }
  ].map((entry) => ({
    ...entry,
    /* One flat reel for the viewer; each frame keeps the version it came from. */
    images: entry.shots.flatMap((set) =>
      set.images.map((src) => ({ src, version: set.version }))
    )
  }));

  const openViewer = (images, title) => {
    restoreRef.current = document.activeElement;
    setViewer({ open: true, images, index: 0, title });
  };

  const closeViewer = useCallback(() => {
    setViewer((v) => ({ ...v, open: false }));
    if (restoreRef.current) restoreRef.current.focus();
  }, []);

  const step = useCallback((delta) => {
    setViewer((v) => ({
      ...v,
      index: (v.index + delta + v.images.length) % v.images.length
    }));
  }, []);

  useEffect(() => {
    if (!viewer.open) return;

    const onKey = (event) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowLeft') step(-1);
      if (event.key === 'ArrowRight') step(1);
      /* aria-modal only tells assistive tech the rest of the page is out of
         play; Tab still has to be held inside the sheet by hand. */
      if (event.key === 'Tab' && sheetRef.current) {
        const stops = sheetRef.current.querySelectorAll('button, a[href]');
        if (!stops.length) return;
        const first = stops[0];
        const last = stops[stops.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    if (closeRef.current) closeRef.current.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [viewer.open, closeViewer, step]);

  return (
    <section id="construction" className="sec">
      <div className="sec__head">
        <span className="sec__no">§4</span>
        <h2 className="sec__title">{t.construction.section}</h2>
        <span className="sec__count">
          {entries.length} {t.construction.countSuffix}
        </span>
      </div>

      <p className="prose sec__note">{t.construction.note}</p>

      <div className="ct__cols" aria-hidden="true">
        <span className="lbl">{t.construction.colEntry}</span>
        <span className="lbl">{t.construction.colStack}</span>
        <span className="lbl">{t.construction.colDeploy}</span>
        <span className="lbl">{t.construction.colAttach}</span>
      </div>

      <div ref={feedRef} className={`ct__reg reg ${feedClass}`}>
        {entries.map((entry, i) => {
          const expanded = openRow === i;
          return (
            <article key={entry.id} className="reg__row ct__row" style={{ '--i': i }}>
              <div className="ct__line">
                <div className="ct__entry">
                  <span className="ct__id">{entry.id}</span>
                  <h3 className="ct__name">{entry.name}</h3>
                </div>

                <ul className="ct__stack">
                  {entry.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="ct__deploy">
                  {entry.live ? (
                    <>
                      <Stamp kind="verified">{t.construction.deployed}</Stamp>
                      <a
                        className="ct__url"
                        href={entry.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {entry.live.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        <Icon name="external" size={10} />
                      </a>
                    </>
                  ) : (
                    <Stamp kind="absent">{t.construction.noDeploy}</Stamp>
                  )}
                </div>

                <div className="ct__attach">
                  {entry.images.length > 0 ? (
                    <button
                      type="button"
                      className="act ct__attach-btn"
                      onClick={() => openViewer(entry.images, entry.name)}
                    >
                      <Icon name="paperclip" size={13} />
                      {entry.images.length} {t.construction.attachments}
                    </button>
                  ) : (
                    <Stamp kind="absent">{t.construction.noAttachments}</Stamp>
                  )}
                </div>

                <button
                  type="button"
                  className="ct__disclose"
                  aria-expanded={expanded}
                  aria-controls={`trail-${entry.id}`}
                  onClick={() => setOpenRow(expanded ? -1 : i)}
                >
                  <span className="vh">
                    {expanded ? t.construction.closeTrail : t.construction.openTrail}
                  </span>
                  <Icon name="chevron" size={14} />
                </button>
              </div>

              <div
                id={`trail-${entry.id}`}
                className="ct__body"
                hidden={!expanded}
              >
                <div className="ct__body-in">
                  <div className="ct__body-main">
                    <p className="prose ct__desc">{entry.description}</p>

                    {entry.layers.length > 0 && (
                      <dl className="ct__layers">
                        {entry.layers.map((layer) => (
                          <div key={layer.name} className="ct__layer">
                            <dt className="lbl">{layer.name}</dt>
                            <dd>
                              <ul className="ct__stack">
                                {layer.stack.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    <div className="ct__links">
                      <a
                        className="act"
                        href={entry.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="github" size={13} />
                        {t.construction.repository}
                        <Icon name="external" size={10} />
                      </a>
                      {entry.live && (
                        <a
                          className="act act--primary"
                          href={entry.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.construction.live}
                          <Icon name="external" size={10} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="ct__trail">
                    <div className="ct__trail-head">
                      <span className="lbl">{t.construction.trailLabel}</span>
                      <span className="lbl">
                        {t.construction.trailAsAt} {t.meta.revision}
                      </span>
                    </div>
                    <dl className="ct__trail-list">
                      <div className="ct__trail-item">
                        <dt>{t.construction.trailOpened}</dt>
                        <dd className="ct__trail-date">{entry.opened}</dd>
                      </div>
                      <div className="ct__trail-item">
                        <dt>{t.construction.trailLastCommit}</dt>
                        <dd className="ct__trail-date">{entry.lastCommit}</dd>
                      </div>
                      <div className="ct__trail-item">
                        <dt>{t.construction.trailDeployDate}</dt>
                        <dd>
                          <Stamp kind="absent">{t.diagnosis.periodAbsent}</Stamp>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {entry.shots.map((set) => {
                    const offset = entry.images.findIndex((image) => image.version === set.version);
                    return (
                      <div key={set.version} className="ct__shots">
                        <span className="lbl ct__shots-label">{versionLabel[set.version]}</span>
                        <ul className="ct__thumbs">
                          {set.images.map((src, n) => {
                            const index = offset + n;
                            return (
                              <li key={src}>
                                <button
                                  type="button"
                                  className="ct__thumb"
                                  onClick={() => {
                                    openViewer(entry.images, entry.name);
                                    setViewer((v) => ({ ...v, index }));
                                  }}
                                >
                                  <img
                                    src={src}
                                    alt={`${entry.name} - ${versionLabel[set.version]}, ${t.construction.attachment} ${n + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <span className="ct__thumb-no">
                                    {String(n + 1).padStart(2, '0')}
                                  </span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {viewer.open && (
        <div className="vw" onClick={closeViewer}>
          <div
            ref={sheetRef}
            className="vw__sheet"
            role="dialog"
            aria-modal="true"
            aria-label={`${viewer.title} - ${t.construction.attachment} ${viewer.index + 1} ${t.construction.of} ${viewer.images.length}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="vw__head">
              <span className="vw__title">{viewer.title}</span>
              <span className="vw__count">
                {versionLabel[viewer.images[viewer.index].version]} ·{' '}
                {t.construction.attachment} {String(viewer.index + 1).padStart(2, '0')}{' '}
                {t.construction.of} {String(viewer.images.length).padStart(2, '0')}
              </span>
              <button
                ref={closeRef}
                type="button"
                className="vw__btn"
                onClick={closeViewer}
                aria-label={t.construction.closeViewer}
              >
                <Icon name="close" size={15} />
              </button>
            </div>

            <div className="vw__frame">
              <img src={viewer.images[viewer.index].src} alt="" />
            </div>

            <div className="vw__foot">
              <button
                type="button"
                className="vw__btn"
                onClick={() => step(-1)}
                aria-label={t.construction.prev}
              >
                <Icon name="left" size={15} />
              </button>
              <ol className="vw__dots">
                {viewer.images.map((image, index) => (
                  <li key={image.src}>
                    <button
                      type="button"
                      className={`vw__dot${index === viewer.index ? ' vw__dot--on' : ''}`}
                      onClick={() => setViewer((v) => ({ ...v, index }))}
                      aria-label={`${t.construction.attachment} ${index + 1}`}
                      aria-current={index === viewer.index ? 'true' : undefined}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </button>
                  </li>
                ))}
              </ol>
              <button
                type="button"
                className="vw__btn"
                onClick={() => step(1)}
                aria-label={t.construction.next}
              >
                <Icon name="right" size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Construction;
