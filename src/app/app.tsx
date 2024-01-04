import { JSX, useState } from 'react';

import { users as initialState } from '@/data/users';

import { Button, Checkbox, Typography } from '@/components/ui';
import { UsersList } from '@/components/users-list';
import { createUser } from '@/utils/create-user';

const App = (): JSX.Element => {
  const [users, setUsers] = useState(initialState);
  const [isKeysEnabled, setIsKeysEnabled] = useState(false);

  const addNewUser = () => {
    // Deep copy users
    const nextState = structuredClone(users);

    // Get random position index
    const posIndex = Math.floor(Math.random() * users.length);

    // Add new item to array
    nextState.splice(posIndex, 0, createUser());

    // Set new state
    setUsers(nextState);
  };

  const removeUser = (id: string) => {
    const nextState = users.filter((user) => user.id !== id);

    // Set new state
    setUsers(nextState);
  };

  return (
    <div className="container mx-auto mt-5">
      <Typography.Title level={1}>Example List Render</Typography.Title>

      <p className="text-center mb-4">You can open console and see the renders result.</p>

      <div className="flex gap-4 justify-center items-center">
        <Checkbox label="Without keys" onChange={setIsKeysEnabled} />
        <Button onCLick={addNewUser}>Add New</Button>
      </div>

      <UsersList isKeysEnabled={isKeysEnabled} users={users} onRemove={removeUser} />
    </div>
  );
};

export default App;
