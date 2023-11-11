import { Characters } from './characters';
import { Character } from './character';

export const charactersRoutes = [
  {
    path: 'characters',
    element: <Characters />,
  },
  {
    path: 'characters/:characterId',
    element: <Character />,
  },
];
