import { TodosStoreProvider } from '../stores';

import { TodosPage } from './todos-page';

export const TodosRoute = (): JSX.Element => (
  <TodosStoreProvider todos={[]}>
    <TodosPage />
  </TodosStoreProvider>
);
