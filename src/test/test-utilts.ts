import { API_URL } from '@/config';

export const getUrl = (path = '') => {
  if (path.length === 0) {
    throw new Error("The path can't be empty!");
  }

  return `${API_URL}${path}`;
};
