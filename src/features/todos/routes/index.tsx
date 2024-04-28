import { TodosStoreProvider } from '../stores';

import { TodosPage } from './todos-page';

const initialTodos = [
  {
    id: 'bd592344-0b02-4796-8a15-3d349137cca8',
    title: 'Learn to use JSX',
    completed: true,
  },
  {
    id: '3e4bc7e6-f79d-4fe6-9056-2821d4c5afd3',
    title: 'Learn to make React Components',
    completed: false,
  },
  {
    id: '8256436e-e605-4884-9865-95ee20688446',
    title: 'Learn how to use Hooks in React',
    completed: false,
  },
  {
    id: '631d1dfc-f7a2-4ebf-a69b-bd6e4b04efe3',
    title: 'Learn to use Zustand',
    completed: false,
  },
];

export const TodosRoute = (): JSX.Element => (
  <TodosStoreProvider todos={initialTodos}>
    <TodosPage />
  </TodosStoreProvider>
);
