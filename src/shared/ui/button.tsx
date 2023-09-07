import { ReactNode } from 'react';

export const Button = ({ onCLick, children }: Props) => {
  return (
    <button
      onClick={onCLick}
      className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
      type="button"
    >
      {children}
    </button>
  );
};

type Props = {
  onCLick: () => void;
  children: ReactNode;
};
