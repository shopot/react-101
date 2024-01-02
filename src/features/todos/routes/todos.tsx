import { JSX } from 'react';

import { TodosList } from '../components/todos-list/todos-list';
import { AddTodoForm } from '../components/add-todo-form/add-todo-form';
import { TodosPagination } from '../components/todos-pagination/todos-pagination';

export const Todos = (): JSX.Element => {
  return (
    <>
      <AddTodoForm />
      <TodosList />
      <TodosPagination />
    </>
  );
};
