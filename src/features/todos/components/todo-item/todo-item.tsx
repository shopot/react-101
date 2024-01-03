import { JSX } from 'react';

import styles from './todo-item.module.css';

import { ButtonRemove } from '@/components/button-remove';

import type { Todo } from '../../types';
import { todosStore } from '../../stores/todos-store';
import { observer } from 'mobx-react-lite';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = observer(
  ({ todo: { id, text, completed } }: TodoItemProps): JSX.Element => {
    const completedClass = completed ? styles.todoTitleThrough : '';

    const handleChange = () => {
      void todosStore.toggleTodo(id);

      console.log(`toggleTodo: ${id}`);
    };

    const handleDelete = () => {
      void todosStore.removeTodo(id);

      console.log(`removeTodo: ${id}`);
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
        <div className={`${styles.todoTitle} ${completedClass}`}>{text}</div>
        <ButtonRemove onCLick={handleDelete} />
      </div>
    );
  }
);
