import { JSX, type PropsWithChildren } from 'react';

type Props = {
  onClick: () => void;
} & PropsWithChildren;

export const Button = ({ onClick, children }: Props): JSX.Element => {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
};
