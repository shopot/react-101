import { axios } from '@/lib/axios';

import { Character, ResponseData } from '../types';

export const getCharacters = async (): Promise<Character[]> => {
  const response = await axios.get<ResponseData<Character[]>>('/character');

  return response.data.results || [];
};
