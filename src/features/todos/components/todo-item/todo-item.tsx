import { JSX } from 'react';

import styles from './todo-item.module.css';

import { ButtonRemove } from '@/components/button-remove';

import { Todo } from '../../types';
import { useDeleteTodoMutation, useToggleTodoCompletedMutation } from '../../api/todos-api-slice';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo: { id, title, completed, color } }: TodoItemProps): JSX.Element => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [toggleTodoCompleted] = useToggleTodoCompletedMutation();

  const completedClass = completed ? styles.todoTitleThrough : '';

  const handleChange = () => {
    void toggleTodoCompleted({ id, completed: !completed });
  };

  const handleDelete = () => {
    void deleteTodo(id);
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
