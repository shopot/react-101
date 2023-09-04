import { useState } from 'react';

import { Person } from '@/shared/types';
import { people } from '@/data/people';
import { Item } from '@/components/item';

export const List = ({ isKeysEnabled, people }: ListProps) => {
  const listItems = isKeysEnabled
    ? people.map((person) => <Item key={person.id} person={person} />)
    : people.map((person) => <Item person={person} />);

  return <ul className="mt-4 max-w-md space-y-1 list-disc list-inside">{listItems}</ul>;
};

type ListProps = {
  isKeysEnabled: boolean;
  people: Person[];
};

const createNewPerson = (id: number): Person => {
  return {
    id,
    name: `John Doe #${id}`,
    profession: 'unknown',
  };
};

const AppRender = () => {
  const [peopleList, setPeopleList] = useState(people);
  const [isKeysEnabled, setIsKeysEnabled] = useState(true);

  const addPerson = () => {
    const id = peopleList.length + 1;

    const posIndex = Math.floor(Math.random() * peopleList.length);

    // Deep copy peopleList
    const newPeopleList = JSON.parse(JSON.stringify(peopleList));

    // Add new item to array
    newPeopleList.splice(posIndex, 0, createNewPerson(id));

    // Set new state
    setPeopleList(newPeopleList);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center text-4xl font-extrabold dark:text-white">Example List Render</h1>

      <div className="flex items-center mb-4">
        <input
          onChange={() => {
            setIsKeysEnabled(!isKeysEnabled);
            setPeopleList(people);
          }}
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Without keys
        </label>
      </div>

      <button
        onClick={addPerson}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Add new
      </button>

      <List isKeysEnabled={isKeysEnabled} people={peopleList} />
    </div>
  );
};

export default AppRender;
