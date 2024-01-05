import { JSX } from 'react';

import styles from './footer.module.css';

export const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <a
      href="https://github.com/shopot/react-101/tree/react-routing"
      rel="noreferrer"
      target="_blank"
    >
      React-101 - react-routing
    </a>
  </footer>
);
