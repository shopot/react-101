import { JSX } from 'react';

import styles from './counter-result.module.css';

import { useAppSelector } from '@/store';

import { selectCount } from '../../stores/counter-slice';

export const CounterResult = (): JSX.Element => {
  const count = useAppSelector(selectCount);

  return <div className={styles.result}>{count}</div>;
};
