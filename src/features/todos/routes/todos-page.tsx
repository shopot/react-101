import { useEffect, type JSX } from 'react';

import { AddTodoForm, TodosList } from '../components';
import { useTodosStore } from '../stores';

export const TodosPage = (): JSX.Element => {
  const addTodo = useTodosStore((state) => state.addTodo);
  const loadTodos = useTodosStore((state) => state.loadTodos);

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
