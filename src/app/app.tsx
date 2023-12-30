import { JSX } from 'react';
import { CreateElementExample } from '@/components/CreateElementExample';
import { JsxElementExample } from '@/components/JsxElementExample';
import { FragmentExample } from '@/components/FragmentExample';
import { ExpressionsExample } from '@/components/ExpressionsExample';

const App = (): JSX.Element => {
  return (
    <div className="container">
      <h1>Знакомство с JSX</h1>
      <p>
        JSX - это расширение синтаксиса JavaScript, которое позволяет писать на XML-подобном
        синтаксисе разметку внутри файла JavaScript. Файлы JSX имеют расширение tsx и jsx.
      </p>
      <CreateElementExample />
      <JsxElementExample />
      <FragmentExample />
      <ExpressionsExample />
    </div>
  );
};

export default App;
