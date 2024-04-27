import { JSX } from 'react';

import { ButtonRemove } from '@/components';

import { TodoType } from '../../types';

import styles from './todo-item.module.css';

type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodoItem = ({
  todo: { id, title, completed },
  onToggle,
  onDelete,
}: TodoItemProps): JSX.Element => {
  const completedClassName = completed ? styles.completed : '';

  return (
    <div className={styles.row}>
      <div className={styles.inputWrapper}>
        <input
          checked={completed}
          onChange={() => onToggle(id)}
          type="checkbox"
          className={styles.todoInput}
        />
      </div>
      <div className={`${styles.title} ${completedClassName}`}>{title}</div>
      <ButtonRemove onCLick={() => onDelete(id)} />
    </div>
  );
};
