import { ReactElement, ReactNode } from 'react';

import styles from './subtitle.module.css';

export const Subtitle = ({ children }: Props): ReactElement => {
  return <p className={styles.subtitle}>{children}</p>;
};

type Props = {
  children: ReactNode;
};
