import { JSX, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item/todo-item';

import { todosStore } from '../../stores/todos-store';
import { Pagination } from '@/components/pagination';

export const TodoList = observer((): JSX.Element => {
  const [page, setPage] = useState(1);

  const { state, todos, totalCount, fetchTodos } = todosStore;

  useEffect(() => {
    void fetchTodos();
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
    <>
      <div className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <Pagination page={page} total={totalCount || 0} onChange={() => setPage(2)} />
    </>
  );
});
