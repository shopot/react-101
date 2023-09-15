import { createBrowserRouter } from 'react-router-dom';

import { APP_ROUTES } from '@/config';
import { RootLayout } from '@/layouts';
import { AboutPage, CatalogDetailPage, CatalogPage, ErrorPage, HomePage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: APP_ROUTES.HOME, element: <HomePage /> },
      { path: APP_ROUTES.CATALOG, element: <CatalogPage /> },
      { path: `${APP_ROUTES.CATALOG}/:catalogId`, element: <CatalogDetailPage /> },
      { path: APP_ROUTES.ABOUT, element: <AboutPage /> },
    ],
  },
]);
