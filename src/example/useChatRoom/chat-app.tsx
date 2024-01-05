import { JSX, useState } from 'react';

import { Button, Divider } from '@/shared/ui';

import { ChatRoom } from './chat-room';
import { Description } from './description';

export const ChatApp = (): JSX.Element => {
  const [roomId, setRoomId] = useState('general');

  const [show, setShow] = useState(false);

  return (
    <>
      <Description />
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="w-36 inline-block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 focus:outline-none mr-2"
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>

      <Button onClick={() => setShow(!show)} variant="primary">
        {show ? 'Закрыть чат' : 'Открыть чат'}
      </Button>

      {show && <Divider />}

      {show && <ChatRoom roomId={roomId} />}
    </>
  );
};
