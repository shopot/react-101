import { JSX, useState } from 'react';

import styles from './todo-list.module.css';

import { TodoItem } from '../todo-item/todo-item';

export const TodoList = (): JSX.Element => {
  const [page, setPage] = useState(1);

  console.log(totalCount);

  if (isError) {
    return <div>An error has occurred!</div>;
  }

  if (isLoading || isFetching) {
    return <div className={styles.loader}>Loading...</div>;
  }

  const todoList = results.length
    ? results.map((todo) => <TodoItem key={todo.id} todo={todo} />)
    : 'No data!';

  return (
    <>
      <div className={styles.todoList}>{todoList}</div>
    </>
  );
};
