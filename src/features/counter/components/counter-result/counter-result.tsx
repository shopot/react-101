import { JSX } from 'react';

import styles from './counter-result.module.css';

import { useCounter } from '../../stores/hooks';

export const CounterResult = (): JSX.Element => {
  const { data, isLoading } = useCounter();

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return <div className={styles.result}>{data}</div>;
};
