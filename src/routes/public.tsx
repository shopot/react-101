import { lazy } from 'react';

const TodosRoutes = lazy(() =>
  import('@/features/todos').then(({ TodosRoutes }) => ({ default: TodosRoutes }))
);

export const publicRoutes = [
  {
    path: '*',
    element: <TodosRoutes />,
  },
];
