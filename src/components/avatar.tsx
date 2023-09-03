import { ReactElement } from 'react';

export const Avatar = ({ person, size }: Props): ReactElement => {
  const { name, imageId } = person;

  return (
    <>
      <h2>{name}</h2>
      <img
        className="avatar"
        src={`https://i.imgur.com/${imageId}.jpg`}
        alt={name}
        width={size}
        height={size}
      />
    </>
  );
};

type Props = {
  person: {
    name: string;
    imageId: string;
  };
  size: number;
};
