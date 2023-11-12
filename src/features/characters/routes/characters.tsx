import { JSX } from 'react';

import { CharactersList } from '../components/characters-list';

export const Characters = (): JSX.Element => (
  <>
    <h1 className="text-2xl mb-3">Characters List Page</h1>
    <CharactersList />
  </>
);
