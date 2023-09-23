import { ButtonHTMLAttributes, ReactElement } from 'react';

import styles from './button.module.css';

export const Button = (props: ButtonProps): ReactElement => {
  const { variant, type, ...rest } = props;

  return (
    <button
      type={type || 'button'}
      className={`${styles.button} ${styles[variant || 'default']}`}
      {...rest}
    />
  );
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'default';
};
