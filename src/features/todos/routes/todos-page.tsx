import { useEffect, type JSX } from 'react';

import { AddTodoForm, TodosList } from '../components';
import { useTodosStore } from '../stores';

export const TodosPage = (): JSX.Element => {
  const [addTodo, loadTodos] = useTodosStore(({ addTodo, loadTodos }) => [addTodo, loadTodos]);

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
