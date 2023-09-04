import { List } from '@/components/list';
import { people } from '@/data/people';

const App = () => {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center text-5xl font-extrabold dark:text-white">Example List Render</h1>
      <List people={people} />
    </div>
  );
};

export default App;
