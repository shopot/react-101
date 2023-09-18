import { ReactElement, useRef } from 'react';

import { Badge, Button, Divider, Subtitle } from '@/shared/ui';

export const ClickCounter = (): ReactElement => {
  const ref = useRef<number>(0);

  const handleClick = () => {
    ref.current = ref.current + 1;

    alert('You clicked ' + ref.current + ' times!');
  };

  return (
    <>
      <Subtitle>Счетчик кликов</Subtitle>
      <Divider />
      <p>
        Этот компонент использует <Badge>ref</Badge> для отслеживания того, сколько раз была нажата
        кнопка. Обратите внимание, что здесь можно использовать <Badge>ref</Badge> вместо состояния,
        поскольку количество кликов считывается и записывается только в обработчике событий.
      </p>
      <Divider />
      <Button onClick={handleClick}>Click me!</Button>
    </>
  );
};
