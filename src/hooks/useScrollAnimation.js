import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (params = {}) => {
  const elementoRef = useRef(null);
  const [jestWidoczny, setJestWidoczny] = useState(false);
  const czyJuzWykonano = useRef(false);
  
  const progWidocznosci = params.threshold || 0.2;
  const marginesKrawedzi = params.margin || '0px';
  const pozwolNaPowtorke = params.repeat === true;

  useEffect(() => {
    const elementDoSledzenia = elementoRef.current;
    if (!elementDoSledzenia) return;

    const akcjaPojawieniaSie = (listaWpisow) => {
      listaWpisow.forEach(wpis => {
        const widocznyTeraz = wpis.isIntersecting;
        const pierwszyRaz = !czyJuzWykonano.current;
        
        if (widocznyTeraz && pierwszyRaz) {
          setJestWidoczny(true);
          if (!pozwolNaPowtorke) {
            czyJuzWykonano.current = true;
          }
        } else if (!widocznyTeraz && pozwolNaPowtorke) {
          setJestWidoczny(false);
          czyJuzWykonano.current = false;
        }
      });
    };

    const obserwatorPrzewijania = new IntersectionObserver(akcjaPojawieniaSie, {
      threshold: progWidocznosci,
      rootMargin: marginesKrawedzi
    });

    obserwatorPrzewijania.observe(elementDoSledzenia);

    return () => obserwatorPrzewijania.disconnect();
  }, [progWidocznosci, marginesKrawedzi, pozwolNaPowtorke]);

  return [elementoRef, jestWidoczny];
};
