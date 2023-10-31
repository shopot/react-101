import { JSX } from 'react';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item';
import { useAppSelector } from '@/store';
import { selectTodos } from '@/store/todos-slice';

export const TodoList = (): JSX.Element => {
  const todos = useAppSelector(selectTodos);

  const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return <div className={styles.todoList}>{todoList}</div>;
};
