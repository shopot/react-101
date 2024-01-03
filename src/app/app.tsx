import { JSX } from 'react';

import { PackingList } from '@/components/packing-list';

function App(): JSX.Element {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center text-4xl m-8 font-extrabold dark:text-white">Packing list</h1>
      <div className="flex justify-center">
        <PackingList />
      </div>
    </div>
  );
}

export default App;
