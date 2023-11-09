import { JSX } from 'react';

import styles from './app.module.css';

import { AppRoutes } from '@/routes';
import { AppProvider } from '@/providers/app-provider';

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <div className={styles.appContainer}>
        <AppRoutes />
      </div>
    </AppProvider>
  );
};

export default App;
