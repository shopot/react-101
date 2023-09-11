import { useEffect } from 'react';

import { createConnection } from './chat-api.ts';

export const useChatRoom = ({ serverUrl, roomId }: Props) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);

    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
};

type Props = {
  serverUrl: string;
  roomId: string;
};
