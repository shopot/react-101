import { JSX, PropsWithChildren } from 'react';

import styles from './button.module.css';

type ButtonProps = {
  onCLick: () => void;
} & PropsWithChildren;

export const Button = ({ onCLick, children }: ButtonProps): JSX.Element => {
  return (
    <button onClick={onCLick} className={styles.button} type="button">
      {children}
    </button>
  );
};
