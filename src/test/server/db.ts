type CharacterModel = {
  id: string;
  name: string;
  image: string;
  gender: string;
  status: string;
};

export const db: {
  characters: CharacterModel[];
} = {
  characters: [],
};

export const initializeDb = (characters: CharacterModel[]) => {
  db.characters = characters;
};
