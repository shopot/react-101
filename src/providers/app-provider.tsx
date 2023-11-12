import { JSX, PropsWithChildren, Suspense } from 'react';

export const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">Loading...</div>
      }
    >
      {children}
    </Suspense>
  );
};
