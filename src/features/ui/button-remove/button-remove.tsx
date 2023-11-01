import { JSX } from 'react';

import styles from './button-remove.module.css';

type ButtonRemoveProps = {
  onCLick: () => void;
};

export const ButtonRemove = ({ onCLick }: ButtonRemoveProps): JSX.Element => {
  return (
    <svg
      onClick={onCLick}
      className={styles.buttonRemove}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{' '}
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
    </svg>
  );
};
