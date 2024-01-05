import { JSX, useState } from 'react';

import { Button, Divider } from '@/shared/ui';

import { Welcome } from './welcome';
import { Description } from './description';

export const TriggeringAnimationApp = (): JSX.Element => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Description />
      <Button onClick={() => setShow(!show)}>{show ? 'Удалить' : 'Показать'}</Button>
      <Divider />
      {show && <Welcome />}
    </>
  );
};
