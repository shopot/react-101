import { Person } from '@/shared/types';

export const Item = ({ person }: Props) => {
  const { name } = person;

  return <li>{name}</li>;
};

type Props = {
  person: Person;
};
