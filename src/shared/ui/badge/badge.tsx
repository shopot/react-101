import { ReactElement, ReactNode } from 'react';

import styles from './badge.module.css';

export const Badge = ({ children }: Props): ReactElement => {
  return <span className={styles.badge}>{children}</span>;
};

type Props = {
  children: ReactNode;
};
