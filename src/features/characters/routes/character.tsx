import { JSX } from 'react';
import { Link } from 'react-router-dom';

import { CharacterDetail } from '../components/character-detail';

export const Character = (): JSX.Element => {
  return (
    <>
      <h1 className="text-2xl mb-3">Character Detail Page</h1>
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/">
        Back to Home
      </Link>
      <CharacterDetail />
    </>
  );
};
