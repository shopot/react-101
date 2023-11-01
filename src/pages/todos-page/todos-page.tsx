import { JSX } from 'react';

import { AddTodoForm, TodoList } from '@/features/todos';

export const TodosPage = (): JSX.Element => {
  return (
    <>
      <AddTodoForm />
      <TodoList />
    </>
  );
};
