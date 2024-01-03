import { JSX, type PropsWithChildren } from 'react';

type ButtonProps = {
  onClick: () => void;
} & PropsWithChildren;

export const Button = ({ onClick, children }: ButtonProps): JSX.Element => {
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
