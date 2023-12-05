import { JSX } from 'react';

import styles from './counter-result.module.css';

import { useAppSelector } from '@/store';

export const CounterResult = (): JSX.Element => {
  const counter = useAppSelector((state) => state.counter);

  return <div className={styles.result}>{counter}</div>;
};
