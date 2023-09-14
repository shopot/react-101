import { RouteObject } from 'react-router';

import { Root } from '@/layouts';

import { HomePage } from './home-page';
import { CatalogPage } from './catalog-page';
import { CatalogDetailPage } from './catalog-detail-page';
import { AboutPage } from './about-page';
import { ErrorPage } from './error-page';

import { APP_ROUTES } from '@/config';

export const routes: RouteObject[] = [
  {
    path: APP_ROUTES.HOME,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: APP_ROUTES.HOME, element: <HomePage /> },
      { path: APP_ROUTES.CATALOG, element: <CatalogPage /> },
      { path: `${APP_ROUTES.CATALOG}/:catalogId`, element: <CatalogDetailPage /> },
      { path: APP_ROUTES.ABOUT, element: <AboutPage /> },
    ],
  },
];
