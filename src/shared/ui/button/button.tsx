import { ComponentPropsWithoutRef, JSX } from 'react';

import styles from './button.module.css';

export const Button = (props: Props): JSX.Element => {
  const { variant, type, ...rest } = props;

  const classVariant = variant || 'default';

  const attrType = type || 'button';

  return (
    <button {...rest} type={attrType} className={`${styles.button} ${styles[classVariant]}`} />
  );
};

interface Props extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'default';
}
