import { JSX } from 'react';

import styles from './styles.module.css';

export const CharacterDetail = ({ data }: Props): JSX.Element | null => {
  if (typeof data === 'undefined') {
    return null;
  }

  const { name, gender, species, image, location } = data;

  const { name: locationName } = location;

  return (
    <div className={styles.card}>
      <div>
        <img alt={name} src={image} />
      </div>
      <div>
        <h2 className={styles.title}>{name}</h2>
        <p>
          {species} - {gender}
        </p>
        <p className={styles.location}>
          <span className={styles.label}>Last known location:</span>
          <br />
          <span className={styles.name}>{locationName}</span>
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
