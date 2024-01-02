import { JSX, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import styles from './todos-list.module.css';

import { todosStore } from '../../stores/todos-store';
import { TodoItem } from '../todo-item/todo-item';

export const TodosList = observer((): JSX.Element => {
  const { state, todos, fetchTodos } = todosStore;

  useEffect(() => {
    void fetchTodos(1);
  }, [fetchTodos]);

  if (state === 'pending') {
    return <div>Loading...</div>;
  }

  if (state === 'error') {
    return <div>Error</div>;
  }

  if (todos.length === 0) {
    return <div>No data!</div>;
  }

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
});
