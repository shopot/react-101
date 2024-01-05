import { JSX, type PropsWithChildren } from 'react';

import styles from './card.module.css';

export const Card = ({ children }: PropsWithChildren): JSX.Element => (
  <div className={styles.card}>{children}</div>
);
