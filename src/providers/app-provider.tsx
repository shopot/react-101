import { JSX, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/stores';

export const AppProvider = ({ children }: PropsWithChildren): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);
