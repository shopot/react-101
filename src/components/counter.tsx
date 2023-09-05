import { ReactElement, useState } from 'react';

import { Button } from '@/components/button.tsx';

export const Counter = ({ bgColor }: Props): ReactElement => {
  const [index, setIndex] = useState(0);

  const cardStyles = `card mx-auto w-48 mt-8 ${bgColor}`;

  const increment = () => {
    setIndex(index + 1);
  };

  const decrement = () => {
    setIndex(index - 1);
  };

  return (
    <div className="flex flex-col">
      <div className={cardStyles}>
        <p className="text-center text-3xl font-bold text-white">{index}</p>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={() => setIndex(0)}>Reset</Button>
      </div>
    </div>
  );
};

type Props = {
  bgColor: string;
};
