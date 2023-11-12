import { http, HttpResponse } from 'msw';

import { API_URL } from '@/config';

import { mockCharacters } from '../../mocks';

export const character = [
  // Get all items
  http.get(`${API_URL}/character`, () => {
    return HttpResponse.json({
      results: mockCharacters,
    });
  }),

  // Get an item by id
  http.get(`${API_URL}/character/:id`, () => {
    return HttpResponse.json(mockCharacters[0]);
  }),
];
