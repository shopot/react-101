import { JSX, type PropsWithChildren } from 'react';

export const Card = ({ children }: PropsWithChildren): JSX.Element => (
  <div className="card">{children}</div>
);
