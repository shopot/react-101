import { JSX, type PropsWithChildren } from 'react';

import styles from './page-header.module.css';

export const PageHeader = ({ children }: PropsWithChildren): JSX.Element => (
  <h1 className={styles.header}>{children}</h1>
);
