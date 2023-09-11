import { ReactElement } from 'react';

import { Badge, Divider, Subtitle } from '@/shared/ui';

export const Description = (): ReactElement => {
  return (
    <>
      <div>
        <Subtitle>Управление модальным диалогом</Subtitle>
        <a href="#">
          &#128279; <Badge>modal-app.ts</Badge>
        </a>
        <Divider />В этом примере внешней системой является DOM браузера.
        <br />
        Компонент <Badge>ModalDialog</Badge> отображает элемент <Badge>{`<dialog />`}</Badge>.
        <br />
        Он использует эффект для синхронизации свойства <Badge>isOpen</Badge> с вызовами методов{' '}
        <Badge>showModal()</Badge> и <Badge>close()</Badge>.
      </div>
      <Divider />
    </>
  );
};
