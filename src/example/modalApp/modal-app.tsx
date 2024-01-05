import { JSX, useState } from 'react';

import { Button } from '@/shared/ui';

import { ModalDialog } from './modal-dialog';
import { Description } from './description';

export const ModalApp = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Description />
      <Button onClick={() => setShow(true)}>Открыть модальное окно</Button>
      <ModalDialog isOpen={show}>
        <h1>Hello there!</h1>
        <div>
          <Button
            className="inline-block"
            onClick={() => {
              setShow(false);
            }}
          >
            Закрыть
          </Button>
        </div>
      </ModalDialog>
    </>
  );
};
