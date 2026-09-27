# Piotr Zaćmiński — Technical Record

Personal portfolio built as a **service-desk incident record**: a printed, numbered,
stamped document on greenbar continuous-feed stock, whose register rows are actual
professional facts. Not a dashboard and not a dark hero with a gradient name — a record.

## Live

https://piozac002.github.io/PortfolioPage/

## The idea

A career is an open ticket with two balanced sides. §1 states them side by side:

- **Side A — Diagnosis:** .NET debugging, application log analysis, SQL for operational
  reporting, incident management in Cherwell.
- **Side B — Construction:** React and TypeScript applications, shipped and reachable.

Neither half is the other's footnote.

## Sections

| | |
|---|---|
| §1 Subject | Name plate, record fields, the two-sided thesis, description |
| §2 Diagnosis | The Quad Europe engagement and its six responsibilities on file |
| §3 Competence | Declared stack, with self-declared levels kept qualified |
| §4 Construction | Three entries, each with a status trail and attachment slips |
| §5 Qualifications | Degree and five named certifications, on one shared timeline |
| §6 Closure | Contact channels and the legend governing every ink on the sheet |

## Rules the page keeps

- **Record over adjective.** Every claim resolves to a date, a name, or a link.
- **Ink law.** Each ink is reserved to exactly one meaning — green *verified*, amber
  *qualified*, blue *reference*, a hatch for *not on file*, red for the reader's own
  mark. An ink reused for a second meaning is a defect.
- **Absence is printed.** A missing employment period and a self-limited skill level
  appear as data, never hidden and never estimated.
- **One shared measure.** Every duration band is positioned on a single scale, so a
  span occupies the share of the record it actually took.

## Features

- Two copies of one document: the white top copy and the archive microfilm, resolved
  before first paint so neither flashes.
- Full Polish / English parity, English by default, persisted per visitor.
- Paper-feed reveal as the only authored motion; `prefers-reduced-motion` prints the
  page already fed.
- Attachment viewer with keyboard navigation, focus restore and scroll lock.
- Working deep links (`/#construction`), re-applied after mount.
- Responsive from 390px up.

## Tech

React 19 · Vite · custom CSS, no framework · Archivo and Martian Mono (both variable,
width and weight axes) · no backend, no analytics.

## Getting started

```bash
npm install
npm run dev
npm run build
npm run lint
```
