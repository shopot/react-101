import { ReactElement } from 'react';

import styles from './app.module.css';

import { Accordion } from '@/components';

export const App = (): ReactElement => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>React Roadmap</h1>
      <Accordion />
    </div>
  );
};
