import { Counter } from '@/components';

function App() {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center text-4xl font-bold text-gray-600">Counter Example</h1>

      <div className="flex flex-row justify-center">
        <Counter bgColor="bg-blue-800" />
        <Counter bgColor="bg-orange-600" />
      </div>
    </div>
  );
}

export default App;
