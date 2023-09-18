import { forwardRef, ReactElement, ReactNode } from 'react';

import styles from './styles.module.css';

export const MyInput = forwardRef<HTMLInputElement, Props>((props, ref): ReactElement => {
  return (
    <input {...props} ref={ref} className={styles.formInput} placeholder="Set focus from parent" />
  );
});

type Props = { children?: ReactNode };
