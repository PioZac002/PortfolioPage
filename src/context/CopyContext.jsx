import { useState, useEffect } from 'react';
import { CopyContext } from './copy';

/* The record exists in two copies: the white top copy read under daylight,
   and the archive microfilm. index.html resolves one before first paint, so
   this provider adopts what is already on the document rather than deciding
   again and repainting. */

const STORAGE_KEY = 'record-copy';

export const CopyProvider = ({ children }) => {
  const [copy, setCopy] = useState(() =>
    document.documentElement.getAttribute('data-copy') === 'archive' ? 'archive' : 'top'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-copy', copy);
    try {
      localStorage.setItem(STORAGE_KEY, copy);
    } catch {
      /* private browsing; the copy still applies for this visit */
    }
  }, [copy]);

  return (
    <CopyContext.Provider
      value={{ copy, setCopy, toggleCopy: () => setCopy((p) => (p === 'top' ? 'archive' : 'top')) }}
    >
      {children}
    </CopyContext.Provider>
  );
};
