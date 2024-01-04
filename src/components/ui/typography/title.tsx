import { JSX, PropsWithChildren } from 'react';

import styles from './title.module.css';

const TITLE_ELE_LIST = [1, 2, 3, 4, 5];

type TitleProps = {
  level: number;
} & PropsWithChildren;

export const Title = ({ level, children }: TitleProps): JSX.Element => {
  let Component: keyof JSX.IntrinsicElements;

  if (TITLE_ELE_LIST.includes(level)) {
    Component = `h${level}` as keyof JSX.IntrinsicElements;
  } else {
    Component = 'h1';
  }

  return <Component className={styles[`h${level}`]}>{children}</Component>;
};
