import { JSX, PropsWithChildren, Suspense } from 'react';

import { Loader } from '@/components/loader';

export const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Loader />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
