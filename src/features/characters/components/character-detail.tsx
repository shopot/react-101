import { JSX, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Character } from '../types';
import { getCharacter } from '../api/get-character';
import { Loader } from '@/components/loader';

export const CharacterDetail = (): JSX.Element => {
  const { characterId = '' } = useParams<'characterId'>();
  const [character, setCharacter] = useState<Character | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const id = parseInt(characterId, 10);

      if (id > 0) {
        const data = await getCharacter(id);

        setCharacter(data);
      }
    };

    void fetchData();
  }, [characterId]);

  if (!character) {
    return <Loader />;
  }

  const { name, image, status, gender } = character;

  return (
    <div className="mt-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={image}
        alt={name}
      />
      <div className="flex flex-col justify-between p-4">
        <h5 className="mb-2 text-2xl font-bold text-gray-900">{name}</h5>
        <p>Status: {status}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  );
};
