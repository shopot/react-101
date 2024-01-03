import { JSX } from 'react';

import { CounterForm } from '../components/counter-form/counter-form';
import { CounterResult } from '../components/counter-result/counter-result';
import { CounterReset } from '../components/counter-reset/counter-reset';

export const Counter = (): JSX.Element => {
  return (
    <>
      <CounterResult />
      <CounterForm />
      <CounterReset />
    </>
  );
};
