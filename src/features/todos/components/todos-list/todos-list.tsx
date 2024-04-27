import type { JSX } from 'react';

import { useTodosStore } from '../../stores';
import { TodoItem } from '../todo-item/todo-item';

import styles from './todos-list.module.css';

export const TodosList = (): JSX.Element => {
  const todos = useTodosStore((state) => state.todos);
  const [deleteTodo, toggleTodo] = useTodosStore((state) => [state.deleteTodo, state.toggleTodo]);

  if (todos.length === 0) {
    return <div>No data!</div>;
  }

  return (
    <div className={styles.todos}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
      ))}
    </div>
  );
};
