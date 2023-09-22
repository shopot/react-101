import { ReactElement, ReactNode } from 'react';

import styles from './form-control.module.css';

export const FormControl = ({ children }: FormControlProps): ReactElement => {
  return <div className={styles.formControl}>{children}</div>;
};

type FormControlProps = {
  children: ReactNode;
};
