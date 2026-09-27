/* Reserved ink. `kind` is the meaning, not the colour: verified, qualified,
   absent, reference. A kind that would need a second meaning needs a second
   ink. */

const Stamp = ({ kind, children }) => (
  <span className={`stamp stamp--${kind}`}>
    <span className="stamp__dot" aria-hidden="true" />
    {children}
  </span>
);

export default Stamp;
