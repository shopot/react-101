import { JSX } from 'react';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item/todo-item';
import { useGetTodosQuery } from '../../api/todos-api';

export const TodoList = (): JSX.Element => {
  const { data: todos, isLoading, isError } = useGetTodosQuery();

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  const todoList = todos?.map((todo) => <TodoItem key={todo.id} todo={todo} />) || 'No data!';

  return <div className={styles.todoList}>{todoList}</div>;
};
