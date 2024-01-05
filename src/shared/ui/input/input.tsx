import { forwardRef, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
} & Omit<ReturnType<UseFormRegister<{ [k: string]: string | number | boolean }>>, 'ref'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, onBlur, name, label, ...rest }, ref) => (
    <>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        name={name}
        onChange={(e) => void onChange(e)}
        onBlur={(e) => void onBlur(e)}
        ref={ref}
        {...rest}
      />
    </>
  )
);
