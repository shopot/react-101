import { JSX, useState } from 'react';
import { Button } from '@/shared/ui';
import { useFetchData } from './use-fetch-data';
import { CharacterDetail } from './character-detail';
import { Description } from './description';

const rickandmorty = [
  {
    id: 344,
    title: 'Tammy Gueterman',
  },
  {
    id: 673,
    title: 'Hoovy',
  },
  {
    id: 388,
    title: 'Zeep Xanflorp',
  },
  {
    id: 743,
    title: 'Alyson Hannigan',
  },
];

export const FetchDataApp = (): JSX.Element => {
  const [characterId, setCharacterId] = useState(344);

  const uri = `https://rickandmortyapi.com/api/character/${characterId}`;

  const { loading, data } = useFetchData(uri);

  const nav = rickandmorty.map(({ id, title }) => (
    <Button key={id} onClick={() => setCharacterId(id)}>
      {title}
    </Button>
  ));

  return (
    <div>
      <Description />
      {nav}
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <CharacterDetail data={data} />
          <p>uri: {uri}</p>
        </div>
      )}
    </div>
  );
};
