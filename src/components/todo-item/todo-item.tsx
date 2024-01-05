import { JSX } from 'react';

import styles from './todo-item.module.css';

import { ButtonRemove } from '@/shared/ui';
import { removeTodo, type Todo, toggleCompleted } from '@/reducers/todo';

import { useTodoDispatch } from '@/contexts';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps): JSX.Element => {
  const dispatch = useTodoDispatch();

  const { id, title, completed } = todo;

  const completedClass = completed ? styles.todoTitleThrough : '';

  return (
    <div className={styles.todoRow}>
      <div className={styles.todoInputWrapper}>
        <input
          checked={completed}
          onChange={() => dispatch(toggleCompleted(id))}
          className={styles.todoInput}
          type="checkbox"
        />
      </div>
      <div className={`${styles.todoTitle} ${completedClass}`}>{title}</div>
      <ButtonRemove onCLick={() => dispatch(removeTodo(id))} />
    </div>
  );
};
