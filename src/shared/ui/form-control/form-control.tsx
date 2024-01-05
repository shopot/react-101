import { JSX, type PropsWithChildren } from 'react';

import styles from './form-control.module.css';

export const FormControl = ({ children }: PropsWithChildren): JSX.Element => (
  <div className={styles.formControl}>{children}</div>
);
