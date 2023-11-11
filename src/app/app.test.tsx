import { render, screen } from '@testing-library/react';

import App from './app';

describe('Render App component', () => {
  it('should be render with some text', () => {
    render(<App />);

    expect(screen.getByText('Hello The Rick and Morty')).toBeInTheDocument();
  });
});
