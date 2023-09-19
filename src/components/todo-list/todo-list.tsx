import { ReactElement, useContext } from 'react';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item';
import { TodoContext } from '@/contexts';

export const TodoList = (): ReactElement => {
  const todos = useContext(TodoContext);
  const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return <div className={styles.todoList}>{todoList}</div>;
};
