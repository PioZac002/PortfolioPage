import { useLanguage } from '../../context/language';
import { useFeed } from '../../hooks/useFeed';
import Stamp from '../../ui/Stamp';
import './Competence.css';

/* §3 — declared competence. A qualifier the subject wrote about his own
   level travels with the entry and is stamped as qualified; it is never
   quietly dropped to make the row look stronger. */

const Competence = () => {
  const { t } = useLanguage();
  const [feedRef, feedClass] = useFeed(0.06);

  const groups = [
    {
      name: t.competence.frontend,
      entries: [
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'TypeScript', qualifier: t.competence.basics },
        { name: 'Next.js', qualifier: t.competence.basics },
        { name: 'Tailwind CSS' },
        { name: 'MUI / shadcn/ui' },
        { name: 'HTML5' },
        { name: 'CSS' },
        { name: 'PWA' }
      ]
    },
    {
      name: t.competence.backend,
      entries: [
        { name: 'Node.js', qualifier: t.competence.basics },
        { name: 'SQL (PostgreSQL) / NoSQL (MongoDB)' },
        { name: 'C# / Java', qualifier: t.competence.oopBasics },
        { name: 'C / C++', qualifier: t.competence.basics }
      ]
    },
    {
      name: t.competence.automation,
      entries: [
        { name: 'Claude Code / GitHub Copilot / OpenAI Codex' },
        { name: 'Prompt engineering' },
        { name: 'N8N', qualifier: t.competence.basics }
      ]
    },
    {
      name: t.competence.tooling,
      entries: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'Postman' },
        { name: 'Figma' },
        { name: 'Vite' },
        { name: 'AWS / Azure DevOps', qualifier: t.competence.basics }
      ]
    },
    {
      name: t.competence.process,
      entries: [
        { name: 'Vitest / Testing Library' },
        { name: t.competence.agile }
      ]
    }
  ];

  const total = groups.reduce((sum, group) => sum + group.entries.length, 0);

  return (
    <section id="competence" className="sec">
      <div className="sec__head">
        <span className="sec__no">§3</span>
        <h2 className="sec__title">{t.competence.section}</h2>
        <span className="sec__count">
          {total} {t.competence.countSuffix}
        </span>
      </div>

      <p className="prose sec__note">{t.competence.note}</p>

      <div ref={feedRef} className={`cp__reg reg ${feedClass}`}>
        {groups.map((group, i) => (
          <div key={group.name} className="reg__row cp__row" style={{ '--i': i }}>
            <div className="cp__group">
              <span className="lbl">{group.name}</span>
              <span className="cp__count">{group.entries.length}</span>
            </div>
            <ul className="cp__entries">
              {group.entries.map((entry) => (
                <li
                  key={entry.name}
                  className={`cp__entry${entry.qualifier ? ' cp__entry--qualified' : ''}`}
                >
                  <span className="cp__name">{entry.name}</span>
                  {entry.qualifier && (
                    <Stamp kind="qualified">{entry.qualifier}</Stamp>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competence;
