import { ReactElement, ReactNode } from 'react';

export const Button = ({ onClick, children }: Props): ReactElement => {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
};

type Props = {
  onClick: () => void;
  children: ReactNode;
};
