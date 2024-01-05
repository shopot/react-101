import { JSX, useEffect, useRef } from 'react';

import { FadeInAnimation } from './animation';

export const Welcome = (): JSX.Element => {
  const ref = useRef(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);

    animation.start(1000);

    console.log('✅ Start  animation!');

    return () => {
      animation.stop();

      console.log('❌ Stop animation');
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      }}
    >
      Introduction to useEffect
    </div>
  );
};
