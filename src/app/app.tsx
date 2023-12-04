import { JSX } from 'react';

import styles from './app.module.css';

import { Todos } from '@/features/todos';

const App = (): JSX.Element => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>Todo App</h1>
      <Todos />
    </div>
  );
};

export default App;
