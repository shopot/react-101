import { JSX } from 'react';

import styles from './app.module.css';

import { AppProvider } from '@/providers/app-provider';
import { Counter } from '@/features/counter';

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <div className={styles.appContainer}>
        <h1 className={styles.header}>Counter App</h1>
        <Counter />
      </div>
    </AppProvider>
  );
};

export default App;
