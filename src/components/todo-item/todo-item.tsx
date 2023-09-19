import styles from './todo-item.module.css';

import { ButtonRemove } from '@/shared/ui';
import { Todo } from '@/reducers/todo';

export const TodoItem = ({ todo, onToggleComplete, onRemove }: Props) => {
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

type Props = {
  todo: Todo;
  onToggleComplete: (todoId: number) => void;
  onRemove: (todoId: number) => void;
};
