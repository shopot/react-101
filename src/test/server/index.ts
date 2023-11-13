import { setupServer } from 'msw/node';

import { handlers } from './handlers';

export { db } from './db';

export const server = setupServer(...handlers);
