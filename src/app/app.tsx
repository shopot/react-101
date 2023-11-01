import { JSX } from 'react';

import styles from './app.module.css';

import { TodosPage } from '@/pages';

const App = (): JSX.Element => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>Todo App</h1>
      <TodosPage />
    </div>
  );
};

export default App;
