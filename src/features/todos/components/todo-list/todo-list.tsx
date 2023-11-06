import { JSX } from 'react';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item/todo-item';
import { useGetTodosQuery } from '../../api/todos-api-slice';

export const TodoList = (): JSX.Element => {
  const { data = [], isLoading, isFetching, isError } = useGetTodosQuery();

  if (isError) {
    return <div>An error has occurred!</div>;
  }

  if (isLoading || isFetching) {
    return <div className={styles.loader}>Loading...</div>;
  }

  const todoList = data.length
    ? data.map((todo) => <TodoItem key={todo.id} todo={todo} />)
    : 'No data!';

  return <div className={styles.todoList}>{todoList}</div>;
};
