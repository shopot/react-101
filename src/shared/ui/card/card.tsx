import { ReactElement, ReactNode } from 'react';

import styles from './card.module.css';

export const Card = ({ children }: CardProps): ReactElement => {
  return <div className={styles.card}>{children}</div>;
};

type CardProps = {
  children: ReactNode;
};
