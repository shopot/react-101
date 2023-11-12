import { JSX } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppProvider } from '@/providers/app-provider';
import { routers } from '@/routes';

const App = (): JSX.Element => (
  <AppProvider>
    <RouterProvider router={createBrowserRouter(routers)} />
  </AppProvider>
);

export default App;
