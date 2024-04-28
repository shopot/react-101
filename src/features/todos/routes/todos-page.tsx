import { useEffect, type JSX } from 'react';

import { AddTodoForm, TodosList } from '../components';
import { useTodos } from '../stores';

export const TodosPage = (): JSX.Element => {
  const { addTodo, loadTodos } = useTodos();

  useEffect(() => {
    void loadTodos();
  }, [loadTodos]);

  return (
    <>
      <AddTodoForm onAddTodo={addTodo} />
      <TodosList />
    </>
  );
};
