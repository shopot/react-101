import { ReactElement, useState } from 'react';

import { Button, Divider } from '@/shared/ui';

import { Welcome } from './welcome.tsx';
import { Description } from './description.tsx';

export const TriggeringAnimationApp = (): ReactElement => {
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
