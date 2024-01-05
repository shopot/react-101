import { JSX, type PropsWithChildren } from 'react';

import styles from './subtitle.module.css';

export const Subtitle = ({ children }: PropsWithChildren): JSX.Element => (
  <p className={styles.subtitle}>{children}</p>
);
