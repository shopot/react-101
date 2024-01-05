import { useRef, useEffect, JSX } from 'react';

import { useIntersectionObserver } from './use-intersection-observer';

export const Box = (): JSX.Element => {
  const ref = useRef(null);

  const isIntersecting = useIntersectionObserver(ref);

  useEffect(() => {
    if (isIntersecting) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        height: 100,
        width: 100,
        border: '2px solid black',
        backgroundColor: 'blue',
      }}
    />
  );
};
