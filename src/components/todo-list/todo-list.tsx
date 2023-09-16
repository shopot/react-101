import { ReactElement } from 'react';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item';
import { TodoState } from '@/reducers/todo';

export const TodoList = ({ todos, onToggleComplete, onRemove }: Props): ReactElement => {
  const todoList = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} onRemove={onRemove} />
  ));

  return <div className={styles.todoList}>{todoList}</div>;
};

type Props = {
  todos: TodoState;
  onToggleComplete: (todoId: number) => void;
  onRemove: (todoId: number) => void;
};
