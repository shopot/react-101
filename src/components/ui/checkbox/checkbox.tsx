import { JSX, useId } from 'react';

import styles from './checkbox.module.css';

type CheckboxProps = {
  label: string;
  onChange: (value: boolean) => void;
};

export const Checkbox = ({ label, onChange }: CheckboxProps): JSX.Element => {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      <input
        onChange={(e) => onChange(e.target.checked)}
        id={id}
        type="checkbox"
        className={styles.input}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};
