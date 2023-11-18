import { JSX } from 'react';

import { AddTodoForm } from '../components/add-todo-form/add-todo-form';
import { TodoList } from '../components/todo-list/todo-list';

export const Todos = (): JSX.Element => {
  return (
    <>
      <AddTodoForm />
      <TodoList />
    </>
  );
};
