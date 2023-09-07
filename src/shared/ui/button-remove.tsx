import { ReactElement } from 'react';

export const ButtonRemove = ({ onCLick }: Props): ReactElement => {
  return (
    <svg
      onClick={onCLick}
      className="h-10 w-10 text-red-500 cursor-pointer hover:text-red-700"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{' '}
      <line x1="9" y1="9" x2="15" y2="15" /> <line x1="15" y1="9" x2="9" y2="15" />
    </svg>
  );
};

type Props = {
  onCLick: () => void;
};
