import { JSX, useEffect, useState } from 'react';

import { getCharacters } from '@/features/characters/api/get-characters';
import { Character } from '@/features/characters/types';
import { Link } from 'react-router-dom';
import { Loader } from '@/components/loader';

export const CharactersList = (): JSX.Element => {
  const [characters, setCharacters] = useState<Character[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();

      setCharacters(data);
    };

    void fetchData();
  }, []);

  if (!characters) {
    return <Loader />;
  }

  const charactersList = characters.map(({ id, name }) => (
    <li key={id}>
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to={`${id}`}>
        {name}
      </Link>
    </li>
  ));

  return <ul>{charactersList}</ul>;
};
