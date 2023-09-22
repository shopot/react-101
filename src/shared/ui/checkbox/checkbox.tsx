import { forwardRef, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './checkbox.module.css';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ onChange, onBlur, name, label, id, ...rest }, ref) => {
    const _id = id || `id-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div className={styles.checkboxWrapper}>
        <input
          className={styles.checkbox}
          name={name}
          onChange={(e) => void onChange(e)}
          onBlur={(e) => void onBlur(e)}
          ref={ref}
          id={_id}
          {...rest}
        />
        <label htmlFor={_id} className={styles.label}>
          {label}
        </label>
      </div>
    );
  }
);

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
} & Omit<ReturnType<UseFormRegister<{ [k: string]: boolean }>>, 'ref'>;
