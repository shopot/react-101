import type { JSX } from 'react';

import { AddTodoForm, TodosList } from '../components';
import { useTodosStore } from '../stores';

export const TodosPage = (): JSX.Element => {
  const addTask = useTodosStore((state) => state.addTask);

  return (
    <>
      <AddTodoForm onAddTodo={addTask} />
      <TodosList />
    </>
  );
};
