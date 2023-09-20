import { ReactElement } from 'react';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item';
import { useTodo } from '@/contexts';

export const TodoList = (): ReactElement => {
  const todos = useTodo();

  const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return <div className={styles.todoList}>{todoList}</div>;
};
