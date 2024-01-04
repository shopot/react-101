import { JSX } from 'react';

import styles from './users-list-item.module.css';

import type { User } from '@/types';

type Props = {
  user: User;
  onRemove: (id: string) => void;
};

export const UsersListItem = ({ user, onRemove }: Props): JSX.Element => {
  const { name, id } = user;

  return (
    <li className={styles.item} onClick={() => onRemove(id)}>
      {name}
    </li>
  );
};
