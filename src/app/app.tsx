import { JSX } from 'react';

import { TodosPage } from '@/features/todos';

import styles from './app.module.css';

export const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Todo App</h1>
      <TodosPage />
    </div>
  );
};
