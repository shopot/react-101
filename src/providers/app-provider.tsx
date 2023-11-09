import { Suspense, ReactNode, JSX } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <Suspense fallback={<div>Loader...</div>}>
      <Router>{children}</Router>
    </Suspense>
  );
};
