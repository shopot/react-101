import { JSX } from 'react';

import styles from './todo-item.module.css';

import { ButtonRemove } from '@/shared/ui';
import { removeTodo, Todo, toggleTodoCompleted } from '@/store/todos-slice';
import { useAppDispatch } from '@/store';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps): JSX.Element => {
  const { id, title, completed } = todo;
  const dispatch = useAppDispatch();

  const completedClass = completed ? styles.todoTitleThrough : '';

  return (
    <div className={styles.todoRow}>
      <div className={styles.todoInputWrapper}>
        <input
          checked={completed}
          onChange={() => dispatch(toggleTodoCompleted(id))}
          type="checkbox"
          className={styles.todoInput}
        />
      </div>
      <div className={`${styles.todoTitle} ${completedClass}`}>{title}</div>
      <ButtonRemove onCLick={() => dispatch(removeTodo(id))} />
    </div>
  );
};
