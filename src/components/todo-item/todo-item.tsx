import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import styles from './todo-item.module.css';

import { ButtonRemove } from '@/shared/ui';
import { Todo } from '@/types';

export const TodoItem = ({ todo }: Props): ReactElement => {
  const { id, title, completed } = todo;
  const dispatch = useDispatch();

  const handleToggleCompleted = (id: string) => {
    dispatch({ type: 'todos/toggleCompleted', payload: id });
  };

  const handleRemove = (id: string) => {
    dispatch({ type: 'todos/removeTodo', payload: id });
  };

  const completedClass = completed ? styles.todoTitleThrough : '';

  return (
    <div className={styles.todoRow}>
      <div className={styles.todoInputWrapper}>
        <input
          checked={completed}
          onChange={() => handleToggleCompleted(id)}
          type="checkbox"
          className={styles.todoInput}
        />
      </div>
      <div className={`${styles.todoTitle} ${completedClass}`}>{title}</div>
      <ButtonRemove onCLick={() => handleRemove(id)} />
    </div>
  );
};

type Props = {
  todo: Todo;
};
