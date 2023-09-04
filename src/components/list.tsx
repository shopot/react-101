import { Person } from '@/shared/types';
import { Item } from '@/components/item';

// Render list with keys
export const List = ({ people }: Props) => {
  const listItems = people.map((person) => <Item key={person.id} person={person} />);

  return <ul className="mt-4 max-w-md space-y-1 list-disc list-inside">{listItems}</ul>;
};

type Props = {
  people: Person[];
};
