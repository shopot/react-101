import { ReactElement } from 'react';

export const Header = (): ReactElement => {
  return (
    <header>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  );
};
