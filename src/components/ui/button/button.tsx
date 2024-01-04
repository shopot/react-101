import { JSX, type PropsWithChildren } from 'react';

import styles from './button.module.css';

type ButtonProps = {
  onCLick: () => void;
} & PropsWithChildren;

export const Button = ({ children, onCLick }: ButtonProps): JSX.Element => (
  <button onClick={onCLick} className={styles.button} type="button">
    {children}
  </button>
);
