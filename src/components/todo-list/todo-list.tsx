import { ReactElement } from 'react';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item';
import { TodoState } from '@/reducers/todo';

type TodoListProps = {
  todos: TodoState;
  onToggleComplete: (todoId: string) => void;
  onRemove: (todoId: string) => void;
};

export const TodoList = ({ todos, onToggleComplete, onRemove }: TodoListProps): ReactElement => {
  const todoList = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} onRemove={onRemove} />
  ));

  return <div className={styles.todoList}>{todoList}</div>;
};
