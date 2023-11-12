import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

import { CharacterDetail } from './character-detail';
import { db } from '@/__tests__/server';

describe('Test CharactersList', () => {
  test('displays Loading...', () => {
    render(<CharacterDetail />, { wrapper: BrowserRouter });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render data of character when it is fetched from API', async () => {
    const charactersName = db.characters[0].name;

    render(
      <MemoryRouter initialEntries={['/characters/1']}>
        <Routes>
          <Route path="/characters/:characterId" element={<CharacterDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(charactersName)).toBeInTheDocument();
    });
  });
});
