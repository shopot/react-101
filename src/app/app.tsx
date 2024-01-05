import { JSX } from 'react';

import styles from './app.module.css';

import { CatalogPage } from '@/pages';

export const App = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <h1 className={styles.header1}>News Catalog</h1>
      <CatalogPage />
    </div>
  );
};

export default App;
