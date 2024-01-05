import { forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './select.module.css';

type SelectProps = {
  label: string;
  options: string[];
};

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps & ReturnType<UseFormRegister<{ [key: string]: string }>>
>(({ onChange, onBlur, name, label, options }, ref) => (
  <>
    <label className={styles.label}>{label}</label>
    <select
      className={styles.select}
      name={name}
      ref={ref}
      onChange={(e) => void onChange(e)}
      onBlur={(e) => void onBlur(e)}
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </>
));
