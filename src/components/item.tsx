import { JSX } from 'react';

type ItemProps = {
  name: string;
  isPacked: boolean;
};

export const Item = ({ name, isPacked }: ItemProps): JSX.Element => {
  let itemContent = name;

  if (isPacked) {
    itemContent = name + ' ✔';
  }

  return <li className="item">{itemContent}</li>;
};
