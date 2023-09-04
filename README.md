# Условный рендеринг

Условный рендеринг в React работает так же, как условные выражения работают в JavaScript. Вы можете условно визуализировать JSX, используя синтаксис `условного (тернарного) оператора` JavaScript или выражения с конструкциями `if/switch`.

### Условный возврат JSX

В зависимости от значения свойства `isPacked`, некоторые элементы будут отмечены галочками в конце.

```jsx
const Item = ({ name, isPacked }) => {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }

  return <li className="item">{name}</li>;
};

export const PackingList = () => {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
};
```

💡 Обратите внимание, логика ветвления создается с помощью операторов `if` и `return` JavaScript. В React поток управления (например, условия) обрабатывается JavaScript.

### Условный рендеринг и возврат null

В некоторых ситуациях не требуется возвращать ничего, то есть не требуется рендеринг компонента, тогда в качестве возвращаемого значения вместо JSX указывается объект `null`:

```jsx
if (isPacked) {
  return null;
}

return <li className="item">{name}</li>;
```

На практике возврат значения `null` из компонента встречается нечасто, поскольку это может удивить разработчика, пытающегося его отобразить. Чаще всего возврат null включает или исключает компонент из JSX родительского компонента.

### Условное рендеринг c использованием переменной

Записи вида `<li className="item">{name} ✔</li>` и `<li className="item">{name}</li>` практически идентичны, то есть здесь имеется некоторое дублирование и как результат нарушение принципа DRY.

Этот стиль является наиболее многословным, но и самым гибким.

```jsx
const Item = ({ name, isPacked }) => {
  let itemContent = name;

  if (isPacked) {
    itemContent = name + ' ✔';
  }

  return <li className="item">{itemContent}</li>;
};
```

Еще один вариант с использованием переменной:

```jsx
const Item = ({ name, isPacked }) => {
  let packed = '';

  if (isPacked) {
    packed = ' ✔';
  }

  return (
    <li className="item">
      {name}
      {packed}
    </li>
  );
};
```

💡Когда JSX разбирается, то удаляются все начальные и конечные пробелы и переводы строк из вложенных элементов. Варианты с добавлением пробела:

```
{name}
{' '}
{packed}
```

```
{name} {packed}
```

### Условный (тернарный) оператор (? :)

```js
const Item = ({ name, isPacked }) => {
  return <li className="item">{isPacked ? name + ' ✔' : name}</li>;
};
```

💡 Этот стиль хорошо работает для простых условий, если компонент имеет большое количество вложенной условной разметки, нужно рассматривать возможность извлечения дочерних компонентов (Декомпозиция), чтобы навести порядок.

### Логический оператор AND (&&)

Еще один типичный кейс это когда внутри компонентов React нужно отобразить некоторый JSX, когда условие истинно,

```jsx
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

💡 Выражение `&&` в JavaScript возвращает значение своей правой части, если левая часть (условие) истинна. Но если условие ложно, то все выражение становится ложным. React рассматривает `false` как "дыру" в дереве JSX, точно так же, как `null` или `undefined`, и ничего не отображает на ее месте.

💡 Если условие `isPacked` будет ложно, то пробел после `{name}` будет удален так как это будет конечный пробел.

### Итог

- В React вы управляете логикой ветвления с помощью JavaScript.
- Вы можете вернуть выражение JSX условно с помощью оператора if.
- Вы можете условно сохранить некоторый JSX в переменную, а затем включить его в другой JSX, используя фигурные скобки.
- В JSX `{condition ? <A /> : <B />}` означает если `condition` истина, то отображать `<A/>` иначе <`B/>`.
- В JSX `{condition && <A />}` означает если `condition` истина то отображать `<A />`, иначе "ничего".
- Сокращения с использованием тернарного оператора являются общими, но вам не обязательно их использовать, если вы предпочитаете простой формат.
