import { JSX } from 'react';

type AvatarProps = {
  person: {
    name: string;
    imageId: string;
  };
  size: number;
};

export const Avatar = ({ person, size }: AvatarProps): JSX.Element => {
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
