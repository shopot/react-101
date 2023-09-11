import { useState, useEffect, RefObject } from 'react';

export const useIntersectionObserver = (ref: RefObject<Element>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const div = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 1.0,
      }
    );

    console.log('✅ Set of target elements being watched by the IntersectionObserver!');

    observer.observe(div!);

    return () => {
      observer.disconnect();

      console.log('❌ Stops watching all of its target elements for visibility changes!');
    };
  }, [ref]);

  return isIntersecting;
};
