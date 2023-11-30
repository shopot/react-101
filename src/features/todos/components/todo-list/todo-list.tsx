import { JSX } from 'react';

import styles from './todo-list.module.css';

// import { TodoItem } from '../todo-item/todo-item';

export const TodoList = (): JSX.Element => {
  return (
    <>
      <div className={styles.todoList}>TodoList</div>
    </>
  );
};
