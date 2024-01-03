import { JSX, type PropsWithChildren } from 'react';

import styles from './button.module.css';

type Props = {
  onCLick: () => void;
};

export const Button = ({ children, onCLick }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <button onClick={onCLick} className={styles.button} type="button">
      {children}
    </button>
  );
};
