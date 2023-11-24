import { JSX } from 'react';

import styles from './todo-item.module.css';

import { ButtonRemove } from '@/components/button-remove';

import { Todo } from '../../types';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo: { id, title, completed, color } }: TodoItemProps): JSX.Element => {
  const completedClass = completed ? styles.todoTitleThrough : '';

  const handleChange = () => {
    console.log(`toggleTodoCompleted: ${id}`);
  };

  const handleDelete = () => {
    console.log(`deleteTodo: ${id}`);
  };

  return (
    <div className={styles.todoRow}>
      <div className={styles.todoInputWrapper}>
        <input
          checked={completed}
          onChange={handleChange}
          type="checkbox"
          className={styles.todoInput}
        />
      </div>
      <div className={`${styles.todoTitle} ${completedClass}`} style={{ color }}>
        {title}
      </div>
      <ButtonRemove onCLick={handleDelete} />
    </div>
  );
};
