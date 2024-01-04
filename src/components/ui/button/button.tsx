import { ReactNode } from 'react';

import styles from './button.module.css';

export const Button = ({ onCLick, children }: Props) => {
  return (
    <button onClick={onCLick} className={styles.button} type="button">
      {children}
    </button>
  );
};

type Props = {
  onCLick: () => void;
  children: ReactNode;
};
