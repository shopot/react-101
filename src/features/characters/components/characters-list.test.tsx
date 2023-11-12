import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CharactersList } from './characters-list';
import { mockCharacters } from '@/__tests__/mocks';

describe('Test CharactersList', () => {
  test('displays Loading...', () => {
    render(<CharactersList />, { wrapper: BrowserRouter });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render list of characters when data is fetched from API', async () => {
    const charactersLength = mockCharacters.length;

    const characterName = mockCharacters[0].name;

    render(<CharactersList />, { wrapper: BrowserRouter });

    await waitFor(() => {
      const { length } = screen.getAllByRole('listitem');

      expect(length).toBe(charactersLength);

      expect(screen.getByText(characterName)).toBeInTheDocument();
    });
  });
});
