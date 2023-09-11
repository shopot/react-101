import { ReactElement, useState } from 'react';

import { Button } from '@/shared/ui';

import { ModalDialog } from './modal-dialog.tsx';
import { Description } from './description.tsx';

export const ModalApp = (): ReactElement => {
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
