import { JSX } from 'react';

import styles from './app.module.css';

import { AppProvider } from '@/providers/app-provider';
import { Todos } from '@/features/todos';

const App = (): JSX.Element => (
  <AppProvider>
    <div className={styles.appContainer}>
      <h1 className={styles.header}>Todo App</h1>
      <Todos />
    </div>
  </AppProvider>
);

export default App;
