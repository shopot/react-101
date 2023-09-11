import { useEffect } from 'react';

export const useWindowListener = <Event extends keyof WindowEventMap>(
  eventType: Event,
  listener: (event: WindowEventMap[Event]) => unknown
): void => {
  useEffect(() => {
    console.log('✅ Add event listener to Window object');

    window.addEventListener(eventType, listener);

    return () => {
      window.removeEventListener(eventType, listener);

      console.log('❌ Remove event listener to Window object');
    };
  }, [eventType, listener]);
};
