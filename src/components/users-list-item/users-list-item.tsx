import { JSX } from 'react';

import type { User } from '@/types';

type Props = {
  user: User;
  onRemove: (id: string) => void;
};

export const UsersListItem = ({ user, onRemove }: Props): JSX.Element => {
  const { name, id } = user;

  return <li onClick={() => onRemove(id)}>{name}</li>;
};
