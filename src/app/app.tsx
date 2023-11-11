import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/routes';

const App = (): JSX.Element => <RouterProvider router={router} />;

export default App;
