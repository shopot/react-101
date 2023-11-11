import { JSX } from 'react';
import { Link } from 'react-router-dom';

import { CharacterDetail } from '../components/character-detail';

export const Character = (): JSX.Element => {
  return (
    <>
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/">
        Back to Home
      </Link>
      <CharacterDetail />
    </>
  );
};
