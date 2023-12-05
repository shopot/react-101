import { JSX } from 'react';

import styles from './counter-reset.module.css';

import { Button } from '@/components/button';
import { reset } from '../../store/actions';
import { useAppDispatch } from '@/store';

export const CounterReset = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(reset());
  };

  return (
    <div className={styles.reset}>
      <Button onCLick={handleClick}>Reset</Button>
    </div>
  );
};
