import { ReactElement, ReactNode } from 'react';

import styles from './page-header.module.css';

export const PageHeader = ({ children }: Props): ReactElement => {
  return <h1 className={styles.header}>{children}</h1>;
};

type Props = {
  children: ReactNode;
};
