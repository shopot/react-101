import { ReactElement } from 'react';

export const CharacterDetail = ({ data }: Props): ReactElement | null => {
  if (typeof data === 'undefined') {
    return null;
  }

  const { name, gender, species, image, location } = data;

  const { name: locationName } = location;

  return (
    <div className="flex gap-6 bg-gray-700 rounded-lg mt-2 p-8">
      <div className="">
        <img className="rounded-lg" src={image} />
      </div>
      <div className="text-lg">
        <h2 className="text-white font-extrabold text-4xl mb-4">{name}</h2>
        <p className="text-white">
          {species} - {gender}
        </p>
        <p className="pt-4">
          <span className="text-gray-300">Last known location:</span>
          <br />
          <span className="text-orange-300">{locationName}</span>
        </p>
      </div>
    </div>
  );
};

type Props = {
  data: Character | undefined;
};

export type Character = {
  id: number;
  name: string;
  gender: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
};
