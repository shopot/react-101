import { render, waitFor, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { charactersRoutes } from './index';
import { mockCharacters } from '@/__tests__/mocks';

describe('Characters routes', () => {
  test('event route', async () => {
    const charactersName = mockCharacters[0].name;

    const router = createMemoryRouter([...charactersRoutes], {
      initialEntries: ['/characters', '/characters/1'],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByText(charactersName)).toBeInTheDocument();
    });
  });
});
