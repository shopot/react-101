import { JSX } from 'react';

import { PageHeader } from '@/components/page-header';

import { AddTodoForm } from '../components/add-todo-form/add-todo-form';
import { TodoList } from '../components/todo-list/todo-list';

export const TodosPage = (): JSX.Element => {
  return (
    <>
      <PageHeader title="Todo App" />
      <AddTodoForm />
      <TodoList />
    </>
  );
};
