import { ReactElement, useState } from 'react';

import { useChatRoom } from './use-chat-room.ts';

export const ChatRoom = ({ roomId }: Props): ReactElement => {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
  });

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          className="w-64 inline-block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 focus:outline-none mr-2"
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>
        Welcome to <u>{roomId}</u> room!
      </h1>
    </>
  );
};

type Props = {
  roomId: string;
};
