import { JSX } from 'react';

import { TodosRoute } from '@/features/todos';

import styles from './app.module.css';

export const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Todo App</h1>
      <TodosRoute />
    </div>
  );
};
