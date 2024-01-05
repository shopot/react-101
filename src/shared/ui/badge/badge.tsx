import { JSX, type PropsWithChildren } from 'react';

import styles from './badge.module.css';

export const Badge = ({ children }: PropsWithChildren): JSX.Element => (
  <span className={styles.badge}>{children}</span>
);
