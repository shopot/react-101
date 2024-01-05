import { type ButtonHTMLAttributes, JSX } from 'react';

import styles from './button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'default';
};

export const Button = (props: ButtonProps): JSX.Element => {
  const { variant, type, ...rest } = props;

  return (
    <button
      type={type || 'button'}
      className={`${styles.button} ${styles[variant || 'default']}`}
      {...rest}
    />
  );
};
