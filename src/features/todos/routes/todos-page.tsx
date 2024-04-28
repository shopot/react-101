import { useEffect } from 'react';
import { type JSX } from 'react';

import { AddTodoForm, TodosList } from '../components';
import { loadAllTodos } from '../stores';

export const TodosPage = (): JSX.Element => {
  useEffect(() => {
    void loadAllTodos();
  }, []);

  return (
    <>
      <AddTodoForm />
      <TodosList />
    </>
  );
};
