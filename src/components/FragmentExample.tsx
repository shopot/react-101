import { Fragment, JSX } from 'react';

const FragmentChild = (): JSX.Element => {
  return (
    <Fragment>
      <h2>Fragment as child element</h2>
      <p>Just simple text</p>
    </Fragment>
  );
};

export const FragmentExample = (): JSX.Element => {
  return (
    <>
      <h2>Fragment Example</h2>
      <p>Just simple text.</p>
      <FragmentChild />
    </>
  );
};
