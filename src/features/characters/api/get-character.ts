import { axios } from '@/lib/axios';

import { Character } from '../types';

export const getCharacter = async (id: number): Promise<Character> => {
  const response = await axios.get<Character>(`/character/${id}`);

  return response.data;
};
