import { createElement, JSX } from 'react';

export const CreateElementExample = (): JSX.Element => {
  return createElement(
    'header',
    null,
    createElement('h2', { className: 'title' }, 'Example of usage createElement()')
  );
};
