import { JSX } from 'react';

import styles from './counter-result.module.css';

import { useCounter } from '../../store/selectors';

export const CounterResult = (): JSX.Element => {
  const counter = useCounter();

  return <div className={styles.result}>{counter}</div>;
};
