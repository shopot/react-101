import { http, HttpResponse } from 'msw';

import { API_URL } from '@/config';

import { db } from '../db';

export const character = [
  // Get all items
  http.get(`${API_URL}/character`, () => {
    return HttpResponse.json({
      results: db.characters,
    });
  }),

  // Get an item by id
  http.get(`${API_URL}/character/:id`, () => {
    return HttpResponse.json(db.characters[0]);
  }),
];
