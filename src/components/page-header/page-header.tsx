import { JSX } from 'react';

import styles from './page-header.module.css';

type PageHeaderProps = {
  title: string;
};

export const PageHeader = ({ title }: PageHeaderProps): JSX.Element => {
  return <h1 className={styles.header}>{title}</h1>;
};
