import { forwardRef, JSX, type PropsWithChildren } from 'react';

import styles from './styles.module.css';

export const MyInput = forwardRef<HTMLInputElement, PropsWithChildren>(
  (props, ref): JSX.Element => {
    return (
      <input
        {...props}
        ref={ref}
        className={styles.formInput}
        placeholder="Set focus from parent"
      />
    );
  }
);
