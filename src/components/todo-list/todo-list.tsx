import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item';
import { TodosState } from '@/store/todos/todos-reducer';

export const TodoList = (): ReactElement => {
  const todos = useSelector((state: TodosState) => state.todos);

  const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return <div className={styles.todoList}>{todoList}</div>;
};
