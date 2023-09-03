import { ReactElement, ReactNode } from 'react';

export const Card = ({ children }: Props): ReactElement => {
  return <div className="card">{children}</div>;
};

type Props = {
  children: ReactNode;
};
