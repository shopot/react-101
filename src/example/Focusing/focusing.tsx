import { useRef } from 'react';

import styles from './focusing.module.css';

import { Badge, Button, Divider, Subtitle } from '@/shared/ui';

export const Focusing = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Subtitle>Установка фокуса на элементе</Subtitle>
      <Divider />
      <p>
        В этом примере нажатие кнопки приведет к установке фокуса на элемент{' '}
        <Badge>&lt;input&gt;</Badge>
      </p>
      <Divider />
      <div className={styles.wrapper}>
        <input ref={inputRef} className={styles.formInput} placeholder="Set focus to element" />
      </div>
      <Button onClick={handleClick} variant="primary">
        Focus the input
      </Button>
    </>
  );
};
