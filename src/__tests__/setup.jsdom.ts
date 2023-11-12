import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

import { server } from './server';

// Enable the API mocking before tests.
beforeAll(() => {
  server.listen();
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() => {
  cleanup();
  server.resetHandlers();
});

// Disable the API mocking after the tests finished.
afterAll(() => {
  server.close();
});
