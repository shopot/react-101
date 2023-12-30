import { JSX } from 'react';

function sum(a: number, b: number): number {
  return a + b;
}

export const ExpressionsExample = (): JSX.Element => {
  return (
    <>
      <h2>Expressions Example</h2>
      <div>
        <p>{1 + 2}</p>
        <p>{Math.random() * 100}</p>
        <p>{sum(7, 18)}</p>
      </div>
    </>
  );
};
