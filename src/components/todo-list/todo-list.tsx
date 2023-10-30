import { JSX } from 'react';
import { useSelector } from 'react-redux';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item';
import { TodosState } from '@/store/todos-slice';

export const TodoList = (): JSX.Element => {
  const todos = useSelector((state: TodosState) => state.todos);

  const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return <div className={styles.todoList}>{todoList}</div>;
};
