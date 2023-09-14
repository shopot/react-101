import { ReactElement } from 'react';

import styles from './footer.module.css';

export const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/shopot/react-101/tree/chapter-14"
        rel="noreferrer"
        target="_blank"
      >
        React-101 - chapter-14
      </a>
    </footer>
  );
};
