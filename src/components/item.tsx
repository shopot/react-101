export const Item = ({ name, isPacked }: Props) => {
  let itemContent = name;

  if (isPacked) {
    itemContent = name + ' ✔';
  }

  return <li className="item">{itemContent}</li>;
};

type Props = {
  name: string;
  isPacked: boolean;
};
