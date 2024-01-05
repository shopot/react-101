import styles from './todo-item.module.css';

import { ButtonRemove } from '@/shared/ui';
import type { Todo } from '@/reducers/todo';

type TodoItemProps = {
  todo: Todo;
  onToggleComplete: (todoId: string) => void;
  onRemove: (todoId: string) => void;
};

export const TodoItem = ({ todo, onToggleComplete, onRemove }: TodoItemProps) => {
  const { id, title, completed } = todo;

  const completedClass = completed ? styles.todoTitleThrough : '';

  return (
    <div className={styles.todoRow}>
      <div className={styles.todoInputWrapper}>
        <input
          checked={completed}
          onChange={() => onToggleComplete(id)}
          type="checkbox"
          className={styles.todoInput}
        />
      </div>
      <div className={`${styles.todoTitle} ${completedClass}`}>{title}</div>
      <ButtonRemove onCLick={() => onRemove(id)} />
    </div>
  );
};
