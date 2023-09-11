import { ReactElement } from 'react';

import { Badge, Divider, Subtitle } from '@/shared/ui';

export const Description = (): ReactElement => {
  return (
    <>
      <div>
        <Subtitle>Пользовательский хук useChatRoom</Subtitle>
        <a href="#">
          &#128279; <Badge>use-chat-room.ts</Badge>
        </a>
        <Divider />В этом примере компонент <Badge>ChatRoom</Badge> использует эффект, чтобы
        оставаться на связи с внешней системой, определенной в <Badge>chat-api.ts</Badge>. <br />{' '}
        Откройте консоль, что бы увидеть работу <Badge>useEffect</Badge>. <br />
        Нажмите <Badge>Открыть чат</Badge>, чтобы появился компонент <Badge>ChatRoom</Badge>.
        Попробуйте изменить <Badge>roomId</Badge> и <Badge>serverUrl</Badge>, используя
        раскрывающийся список и ввод, и посмотрите, как Эффект повторно подключается к чату. Нажмите{' '}
        <Badge>Закрыть чат</Badge>, чтобы увидеть отключение Эффекта в последний раз.
      </div>
      <Divider />
    </>
  );
};
