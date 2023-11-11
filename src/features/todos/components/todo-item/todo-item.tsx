import { JSX } from 'react';

import styles from './todo-item.module.css';

import { useAppDispatch } from 'src/stores';
import { ButtonRemove } from '@/components/button-remove';

import { removeTodo, toggleTodoCompleted } from '../../todos-slice';
import { Todo } from '../../types';

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
