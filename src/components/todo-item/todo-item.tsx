import styles from './todo-item.module.css';

import { ButtonRemove } from '../ui';
import type { Todo } from '@/types';

type Props = {
  todo: Todo;
  onToggle: (todoId: string) => void;
  onRemove: (todoId: string) => void;
};

export const TodoItem = ({ todo, onToggle, onRemove }: Props) => {
  const { id, title, completed } = todo;

  const completedClass = completed ? styles.todoTitleThrough : '';

  return (
    <div className={styles.todoRow}>
      <div className={styles.todoInputWrapper}>
        <input
          checked={completed}
          onChange={() => onToggle(id)}
          type="checkbox"
          className={styles.todoInput}
        />
      </div>
      <div className={`${styles.todoTitle} ${completedClass}`}>{title}</div>
      <ButtonRemove onCLick={() => onRemove(id)} />
    </div>
  );
};
