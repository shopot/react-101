import { http, HttpResponse } from 'msw';

import { db } from '../db';
import { getUrl } from '../../test-utilts';

export const character = [
  // Get all items
  http.get(getUrl('/character'), () => {
    return HttpResponse.json({
      results: db.characters,
    });
  }),

  // Get an item by id
  http.get(getUrl('/character/:id'), () => {
    return HttpResponse.json(db.characters[0]);
  }),
];
