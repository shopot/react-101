import { JSX } from 'react';

import styles from './counter-form.module.css';

import { Button } from '@/components/button';
import { useAppDispatch } from '@/store';
import { decrement, increment, incrementByAmount } from '../../stores/counter-slice';

export const CounterForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  const handleIncrementByAmount = () => {
    void dispatch(incrementByAmount(10));
  };

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  return (
    <div className={styles.controls}>
      <Button onCLick={handleDecrement}>Decrement</Button>
      <Button onCLick={handleIncrementByAmount}>Increment By Random</Button>
      <Button onCLick={handleIncrement}>Increment</Button>
    </div>
  );
};
