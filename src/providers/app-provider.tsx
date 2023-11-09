import { Suspense, ReactNode, JSX } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@/store';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <Suspense fallback={<div>Loader...</div>}>
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    </Suspense>
  );
};
