import { Navigate, Outlet } from 'react-router-dom';

import { NotFound } from '@/features/misc';
import { charactersRoutes } from '@/features/characters';

const ContainerLayout = () => {
  return (
    <div className="container mx-auto mt-5 max-w-lg">
      <Outlet />
    </div>
  );
};

export const routers = [
  {
    path: '/',
    element: <ContainerLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="characters" replace />,
      },
      ...charactersRoutes,
    ],
  },
];
