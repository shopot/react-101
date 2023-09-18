import { useRef } from 'react';

import styles from './styles.module.css';

import { Badge, Button, Divider, Subtitle } from '@/shared/ui';
import { MyInput } from '@/example/UsingForwardRef/my-input.tsx';

export const UsingForwardRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Subtitle>Установка фокуса из родительского компонента</Subtitle>
      <Divider />
      <p>
        В этом примере нажатие кнопки приведет к установке фокуса на элемент{' '}
        <Badge>&lt;input&gt;</Badge> в дочернем компоненте <Badge>&lt;MyInput /&gt;</Badge> из
        родительского компонента <Badge>&lt;UsingForwardRef /&gt;</Badge>
      </p>
      <Divider />
      <div className={styles.wrapper}>
        <MyInput ref={inputRef} />
      </div>
      <Button onClick={handleClick} variant="primary">
        Focus the input
      </Button>
    </>
  );
};
