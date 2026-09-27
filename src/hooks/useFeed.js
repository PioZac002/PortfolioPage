import { useEffect, useRef, useState } from 'react';

/* The page's one authored motion: a line printer advancing the sheet. A
   register arms when it is built and runs once when it reaches the platen,
   so rows arrive line by line instead of every section fading identically.
   Content is present in the DOM from the first paint either way. */

export const useFeed = (threshold = 0.12) => {
  const ref = useRef(null);
  /* A reader who asked for less motion gets the sheet already fed, decided
     before the first paint rather than corrected after it. */
  const [fed, setFed] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || fed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFed(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, fed]);

  return [ref, fed ? 'feed feed--running' : 'feed feed--armed'];
};

/* Wayfinding for the index rail: which section is at the platen now. */
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
};
