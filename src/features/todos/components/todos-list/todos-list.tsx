import type { JSX } from 'react';

import { Loader } from '@/components';

import { deleteTodo, useStore, toggleTodo } from '../../stores';
import { TodoItem } from '../todo-item/todo-item';

import styles from './todos-list.module.css';

export const TodosList = (): JSX.Element => {
  const [todos, isLoading] = useStore((s) => [s.todos, s.isLoading]);

  if (isLoading) {
    return <Loader />;
  }

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
