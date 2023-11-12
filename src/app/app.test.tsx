import { userEvent } from '@testing-library/user-event';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

import App from './app';
import { routers } from '@/routes';

export const renderWithRouter = (route = '/') => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(<RouterProvider router={createBrowserRouter(routers)} />),
  };
};

describe('Render App', () => {
  test('full app rendering/navigating', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Characters List Page')).toBeInTheDocument();
    });
  });

  test('landing on a bad page shows 404 page', async () => {
    renderWithRouter('/something-that-does-not-match');

    await waitFor(() => {
      expect(screen.getByText('404 Not Found!')).toBeInTheDocument();
    });
  });
});
