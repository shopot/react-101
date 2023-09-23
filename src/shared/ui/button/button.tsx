import { ButtonHTMLAttributes, ReactElement } from 'react';

import styles from './button.module.css';

export const Button = (props: ButtonProps): ReactElement => {
  const { variant, type, className, ...rest } = props;

  const computedClassName = `${styles.button} ${styles[variant || 'default']} ${className || ''}`;

  return <button type={type || 'button'} className={computedClassName} {...rest} />;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'default';
};
