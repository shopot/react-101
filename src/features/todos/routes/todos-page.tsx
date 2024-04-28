import { useEffect, type JSX } from 'react';

import { AddTodoForm, TodosList } from '../components';
import { useTodosContext } from '../stores';

export const TodosPage = (): JSX.Element => {
  const [addTodo, loadTodos] = useTodosContext((s) => [s.addTodo, s.loadTodos]);

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
