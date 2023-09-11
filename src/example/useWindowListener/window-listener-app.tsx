import { ReactElement, useState } from 'react';

import { useWindowListener } from './use-window-listener.ts';
import { Description } from './description.tsx';

export const WindowListenerApp = (): ReactElement => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useWindowListener('pointermove', (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  });

  return (
    <>
      <Description />
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'pink',
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
};
