import { at, clamp } from '../lib/scale';
import './Span.css';

/* A duration drawn, not described. `open` prints an indeterminate hatch in
   the absence ink: the dates are not on file, and nothing here estimates
   them into existence. */

const Span = ({ from, to, open = false, tick = null, label }) => {
  const left = clamp(from != null ? at(from) : 0);
  const right = clamp(to != null ? at(to) : 100);

  return (
    <div className="span-row">
      <div className="span" role="img" aria-label={label}>
        {open ? (
          <div className="span__fill span__fill--open" style={{ left: 0, right: 0 }} />
        ) : (
          <div
            className="span__fill"
            style={{ left: `${left}%`, width: `${Math.max(right - left, 0.8)}%` }}
          />
        )}
        {tick != null && (
          <div className="span__tick" style={{ left: `${clamp(at(tick))}%` }} />
        )}
      </div>
    </div>
  );
};

export default Span;
