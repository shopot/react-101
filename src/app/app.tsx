import { JSX } from 'react';

import styles from './app.module.css';

const App = (): JSX.Element => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>Todo App</h1>
    </div>
  );
};

export default App;
