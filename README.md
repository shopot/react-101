# React JSX

**JSX** представляет способ описания визуального кода посредством комбинации кода на JavaScript и разметки XML, код **JSX** транспилируется в обычный JavaScript:

```jsx
<header>
  <h1 className="title">Hello, React!</h1>
</header>
```

этот код **JSX**, после транспиляции превратится в вызов `React.createElement()`:

```javascript
React.createElement(
  'header',
  null,
  React.createElement('h1', { className: 'title' }, 'Hello, React!')
);
```

### JSX и XML синтаксис

- Так как это похожий на XML синтаксис, одиночные теги в **JSX** должны быть закрыты: `<hr />`
- Вместо атрибута `class` в **JSX** используется имя свойства в DOM: `className`, так как `class` - это зарезервированное слово для создания классов
- Вместо атрибута `for` в **JSX** используется `htmlFor` для `<label>` и `<output>` для связывания с некоторым элементом управления, так как `for` - это зарезервированное слово для создания циклов;

```jsx
const vdom = <img src={logo} className="app-logo" alt="logo" />;

// На выходе получим:
React.createElement('img', { className: 'title', src: '...', alt: 'logo' });
```

### Использование вложенных элементов в JSX

Теги (элементы/компоненты) JSX могут содержать дочерние элементы

```jsx
const element = (
  <header>
    <h1 className="title">Hello, React!</h1>
  </header>
);
```

Все компоненты в React должны возвращать один корневой элемент, включающий в себя всё остальное:

```jsx
return (
  <header>
    <h1 className="title">Hello, React!</h1>
  </header>
);
```

## Использование фрагментов `<Fragment></Fragment>`

Для группировки нескольких элементов используется обертка в виде `<Fragment>`. Группировка элементов во фрагменте не влияет на результирующий DOM; это то же самое, как если бы элементы не были сгруппированы:

```jsx
import { Fragment } from 'react';

const Post = () => {
  return (
    <Fragment>
      <h1 className="title">Hello, React!</h1>
      <div className="body">Rendering a Fragment</div>
    </Fragment>
  );
};
```

Пустой тег `<></>` является сокращением `<Fragment></Fragment>`.

```jsx
const Post = () => {
  return (
    <>
      <h1 className="title">Hello, React!</h1>
      <div className="body">Rendering a Fragment</div>
    </>
  );
};
```

Любой текст, записанный внутри тегов, остаётся просто статическим текстом на выводе.

## Встраивание выражений в JSX

Встраивание выражений в **JSX** осуществляется посредством фигурных скобок `{...}` (интерполяция, аналог как в JavaScript), внутрь которых мы можем поместить любое корректное выражение JavaScript:

```jsx
const name = 'Eva';
const someStyleClass = 'container';

const vdom1 = <div>Hello, {name}</div>;
const vdom2 = <div>Hello, {name.repeat(3)}</div>;
const vdom3 = <div className={someStyleClass}>Hello!</div>;
```

**JSX-элементы** являются выражениями, то есть вы можете использовать их в любых местах JavaScript-кода, которые работают с выражениями:

```jsx
const isBlock = Math.random() > 0.5;

const name = 'Mike';
const vdom = isBlock ? <div>hello, {name}</div> : <span>i am span</span>;
```

### JSX, как и любой язык программирования, имеет рекурсивную структуру

Чтобы встроить выражение на JavaScript внутрь **JSX** нужно использовать фигурные скобки. Следовательно, вы можете встроить **JSX** внутрь самого **JSX** пока вы пишете **JSX**:

```jsx
const vdom = (
  <div>
    {isAdmin ? (
      <p>
        <a href="#">{text}</a>
      </p>
    ) : (
      <p>{text}</p>
    )}
    <div className="hello">Hello, React!</div>
  </div>
);
```

⚠️ Невозможность использовать условную конструкцию внутри JSX, в место нее можно использовать тернарную операцию к в примере выше.

Следующий код работать не будет, будет выброшено исключение с `Unexpected token`:

```jsx
<div id={if (isAdmin) { 'msg' }}>Hello, React!</div>
```

Переписанный код с использованием тернарного оператора:

```jsx
<div id={isAdmin ? 'msg' : ''}>Hello, React!</div>
```

## Необработанные строки HTML внутри JSX

В JavaScript существует понятие `innerHTML`, которое позволяет задать HTML-содержимое элемента в формате строки.

В React для таких целей предусмотрен специальное свойство (property), которе передается в качестве атрибута - `dangerouslySetInnerHTML`. Это свойство позволяет вставить HTML в элемент таким образом:

```jsx
<div dangerouslySetInnerHTML={__html: '<p>some html</p>'} />
```

⚠️ Использование dangerouslySetInnerHTML может представлять угрозу безопасности. Его использование открывает возможности для атак типа XSS, если вставляемый HTML-код не фильтруется и не обезвреживается.

Название атрибута уже говорит о том, что его использование потенциально опасно.
