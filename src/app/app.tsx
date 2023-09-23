import { Fragment, ReactElement, ReactNode, createElement } from 'react';

/**
 * JSX — это расширение синтаксиса JavaScript,
 * которое позволяет писать на XML-подобном синтаксисе разметку внутри файла JavaScript.
 * Файлы JSX имеют расширение tsx и jsx.
 */

const App = (): ReactNode => {
  return createElement('header', null, createElement('h1', { className: 'title' }, 'Hello React'));
};

// const App = (): ReactElement => {
//   return <h1>Hello React</h1>;
// };

/** ReactNode vs ReactElement */
// const App = (): ReactElement => {
//   return 'demo';
// };

// const App = (): ReactElement => {
/** Простой элемент с одним тегом H1 */
// const someJSX = <h1>Hello React</h1>;
// return someJSX;

// return <h1>Hello React</h1>;

/** Вложенные элементы */
// const someJSX = (
//   <div>
//     <h1>Hello React</h1>
//   </div>
// );
// return someJSX;

/** Фрагмент */
// const someJSX = (
//   <Fragment>
//     <h1>Hello React</h1>
//     <div>This is text</div>
//   </Fragment>
// );
// return someJSX;

/** Фрагмент */
// const someJSX = (
//   <>
//     <h1>Hello React</h1>
//     <div>This is text</div>
//   </>
// );
// return someJSX;

/** Выражения */
// const expressions1 = <p>{1 + 2}</p>;
// const expressions2 = <p>{Math.random() * 100}</p>;
// const expressions3 = <p>{expressions1}</p>;
// return (
//   <>
//     <h1>Hello React</h1>
//     <div>
//       {expressions2}
//       {expressions3}
//     </div>
//   </>
// );
// };

export default App;
