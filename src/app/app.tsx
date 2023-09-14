import { ReactElement } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routes } from '@/pages';

const router = createBrowserRouter(routes);

const App = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
