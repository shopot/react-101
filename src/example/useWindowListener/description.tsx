import { ReactElement } from 'react';

import { Badge, Divider, Subtitle } from '@/shared/ui';

export const Description = (): ReactElement => {
  return (
    <div>
      <Subtitle>Пользовательский хук useWindowListener</Subtitle>
      <a href="#">
        &#128279; <Badge>use-window-listener.ts</Badge>
      </a>
      <Divider />В этом примере внешней системой является сам DOM браузера. Обычно вы указываете
      прослушиватели событий с помощью JSX, но вы не можете прослушивать глобальный объект{' '}
      <Badge>window</Badge> таким образом. Эффект позволяет вам подключиться к объекту окна и
      прослушивать его события. Прослушивание события <Badge>pointermove</Badge> позволяет
      отслеживать положение курсора (или пальца) и обновлять красную точку для перемещения вместе с
      ней.
    </div>
  );
};
