import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (params = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);
  
  const visibilityThreshold = params.threshold || 0.2;
  const edgeMargin = params.margin || '0px';
  const allowRepeat = params.repeat === true;

  useEffect(() => {
    const elementToObserve = elementRef.current;
    if (!elementToObserve) return;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        const isCurrentlyVisible = entry.isIntersecting;
        const isFirstTime = !hasAnimated.current;
        
        if (isCurrentlyVisible && isFirstTime) {
          setIsVisible(true);
          if (!allowRepeat) {
            hasAnimated.current = true;
          }
        } else if (!isCurrentlyVisible && allowRepeat) {
          setIsVisible(false);
          hasAnimated.current = false;
        }
      });
    };

    const scrollObserver = new IntersectionObserver(handleIntersection, {
      threshold: visibilityThreshold,
      rootMargin: edgeMargin
    });

    scrollObserver.observe(elementToObserve);

    return () => scrollObserver.disconnect();
  }, [visibilityThreshold, edgeMargin, allowRepeat]);

  return [elementRef, isVisible];
};
