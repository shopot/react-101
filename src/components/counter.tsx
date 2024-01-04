import { JSX, useState } from 'react';

import { Button } from './button';

type Props = {
  bgColor: string;
};

export const Counter = ({ bgColor }: Props): JSX.Element => {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div className="flex flex-col">
      <div className={`card mx-auto w-48 mt-8 ${bgColor}`}>
        <p className="text-center text-3xl font-bold text-white">{counterValue}</p>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <Button onClick={() => setCounterValue(counterValue - 1)}>-</Button>
        <Button onClick={() => setCounterValue(counterValue + 1)}>+</Button>
        <Button onClick={() => setCounterValue(0)}>Reset</Button>
      </div>
    </div>
  );
};
