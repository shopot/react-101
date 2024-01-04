import { JSX } from 'react';

import styles from './users-list.module.css';

import type { User } from '@/types';
import { UsersListItem } from '@/components/users-list-item';

type Props = {
  isKeysEnabled: boolean;
  users: User[];
  onRemove: (id: string) => void;
};

export const UsersList = ({ isKeysEnabled, users, onRemove }: Props): JSX.Element => {
  const list = isKeysEnabled
    ? users.map((user) => <UsersListItem key={user.id} user={user} onRemove={onRemove} />)
    : users.map((user) => <UsersListItem user={user} onRemove={onRemove} />);

  return <ul className={styles.usersList}>{list}</ul>;
};
