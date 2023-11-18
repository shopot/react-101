import { JSX, useEffect } from 'react';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item/todo-item';
import { useAppDispatch, useAppSelector } from '@/stores';
import { fetchTodos, selectLoading, selectTodos } from '../../stores/todos-slice';

export const TodoList = (): JSX.Element => {
  const todos = useAppSelector(selectTodos);
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return <div className={styles.todoList}>{todoList}</div>;
};
