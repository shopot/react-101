# Знакомство с Zustand


📚 Содержание

- [Знакомство с Zustand](#знакомство-с-zustand)
  - [Общее описание](#общее-описание)
  - [Установка](#установка)
  - [Создание состояния Store](#создание-состояния-store)
    - [Иммутабельность  и слияние состояния](#иммутабельность--и-слияние-состояния)
    - [Использование getState()](#использование-getstate)
  - [Использование состояния в React компонентах](#использование-состояния-в-react-компонентах)
  - [Best practices](#best-practices)
    - [Single store](#single-store)
    - [Slices Pattern (multiple stores)](#slices-pattern-multiple-stores)
    - [Используйте set/setState для обновления состояния](#используйте-setsetstate-для-обновления-состояния)
    - [Размещайте функции-действия для изменения состояния внутри Store](#размещайте-функции-действия-для-изменения-состояния-внутри-store)
  - [Пример Todos](#пример-todos)


## Общее описание

![GitHub Repo stars](https://img.shields.io/github/stars/pmndrs/zustand%20?style=social&label=Zustand&link=https%3A%2F%2Fgithub.com%2Fpmndrs%2Fzustand)


Zustand - это небольшое, быстрое и масштабируемое решение для управления состоянием React-приложений (так же есть поддержка Vanilla JS) основанное на принципах Flux и immutable state.
Zustand имеет удобный API для работы с React, основанный на хуках.
Не имеет проблем с Zombie children и context loss и отлично работает в React concurrency mode.

Его архитектура базируется на publish/subscribe объекте и реализации единственного хука для React.

Ссылка на документацию:

https://docs.pmnd.rs/zustand/getting-started/introduction

Ссылка на репозиторий github:

https://github.com/pmndrs/zustand


## Установка

Zustand доступен в виде пакета на NPM, без необходимои установки дополнительных пакетов для TypeScript:

```shell
# NPM
npm install zustand
```

## Создание состояния Store

Для создания Zustand Store необходимо воспользоваться функцией `create` из пакета `zustand`:

```ts
import { create } from 'zustand'

const usStoreHook = create((set, get) => { /*... store config ...*/ });
```

Функция `create` принимает в качестве аргумента колбэк-функцию **StateCreator**, которая в свою очередь должна возвращать объект описывающий Store (стояние).

```ts
// Упрощенная версия сигнатуры функции zustand.create
create<T>(initializer: StateCreator<T>): UseBoundStore<StoreApi<T>>
```

Результатом выполнения функции `create` будет хук (функция), которая так же будет содержать `StoreApi` в виде нескольких статических методов:

```ts
interface StoreApi<T> {
    setState: SetStateInternal<T>;
    getState: () => T;
    getInitialState: () => T;
    subscribe: (listener: (state: T, prevState: T) => void) => () => void;
}
```

В качестве примера посмотрим на реализацию счетчика:

```ts
const counter = {
  value: 0,

  increment() {
    this.value ++;
  },

  decrement() {
    this.value --
  }
}
```
Это обычный объект в представлении JavaScript (TypeScript), с одним полем `value` в качестве переменной состояния и двумя методами `increment`  и `decrement` (actions).

При создании Store с использованием функции `create`, наличие контекста `this` в реализации объекта должно игнорироваться, вместо этого нужно использовать методы `setState` и `getState`, которые передаются в колбэк-функцию **StateCreator**:

```ts
import { create } from 'zustand';

type StateType = {
  value: number;
}

type ActionType = {
  increment: () => void;
  decrement: () => void;
}

// Здесь метод setState() передается как set()
const useCounterStore = create<StateType & ActionType>((set) => {
  return {
    value: 0, // переменная состояния

    // Действия (actions) для изменения переменной состояния
    increment: () => set((state) => ({value: state.value + 1})),
    decrement: () => set((state) => ({value: state.value - 1}))
  }
})
```

### Иммутабельность  и слияние состояния

Метод `set()` в реализации `useCounterStore` работает точно так же как и функция сеттер при использован хука `useState`:

```ts
const [counter, setCounter] = useState({value: 0})
//...

const  handleClick = () => {
  setAge((prevState) => {
    return {
      ...prevState
      value: prevState.value + 1
    };
  });
}
```

Что эквивалентно записи:

```ts
// Метод setState
// set((state) => ({value: state.value +1})
set((state) => {
  return {
    ...state,
    value: state.value + 1
  }
})
```

Этот пример записи демонстрирует распространенный паттерн работы с иммутабельным состоянием.

> Неизменяемым (англ. immutable) называется объект, состояние которого не может быть изменено после создания. Результатом любой модификации такого объекта всегда будет новый объект, при этом старый объект не изменится.

То есть при любых изменениях гарантируется, что метод `set()` вернет новый объект с новым состоянием.

В примере реализации `useCounterStore` метод `increment` как и `decrement`

```ts
set((state) => ({value: state.value + 1}))
```
использует подход неглубокого слияния - **shallowly merged**, где `set()` фактически объединяет состояние, то есть **Zustand** позволяет менять часть состояния без потребности замены всего объекта как в случае с иммутабельным состоянием.

Пример из документации демонстрирующий частичное обновление состояния:

```ts
import { create } from 'zustand';

type StateType = {
  firstName: string
  lastName: string
}

type ActionType = {
  updateFirstName: (firstName: StateType['firstName']) => void
  updateLastName: (lastName: StateType['lastName']) => void
}

// Создание Store, которое включает в себя и состояние, и (необязательно) действия
const usePersonStore = create<StateType & ActionType>((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}))
```

Чтобы отключить поведение слияния, вы можете указать логическое значение замены для набора следующим образом:

```ts
set((state) => newState, true)
```
 Вторым параметром в `set()` передается значение типа `bool` установленное в `true`.

### Использование getState()

Несмотря на то, что `set()` позволяет получить доступ к текущему состоянию `set(state => result)`, у вас так же есть возможность получить доступ к состоянию за его пределами через `get()`:

```ts
const useSoundStore = create<SoundStoreType>((set, get) => ({
  sound: 'grunt',
  someAction: () => {
    const sound = get().sound
    ...
```

## Использование состояния в React компонентах

Для того что получить данные из состояния и функции-действия (actions), достаточно использовать хук где угодно, без необходимости использования каких либо провайдеров:

```ts
import type { JSX } from 'react';

const MyCounter = (): JSX.Element => {
  const counter = useCounterStore((state) => state.value);

  return <h1>{counter} around here...</h1>;
}

const MyCounterControl = (): JSX.Element => {
  /* const [increment, decrement]
      = useCounterStore(({increment, decrement}) => [increment, decrement]);*/
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <button onClick={increment}>One up</button>
      <button onClick={decrement}>One down</button>
    </>
  );
}
```

## Best practices

### Single store

Глобальное состояние вашего React-приложения должно быть расположено в одном Zustand Store.

Если у вас большое приложение используйте поход **Slices Pattern**, разделение состояния на основе концепции модульности.

### Slices Pattern (multiple stores)

Вы можете разделить свой основной стор на отдельные сторы меньшего размера в соответствии с функциональной принадлежностью, чтобы добиться модульности.

Первый store для модуля Fish:

```ts
// ..module/fish/fish-store-slice.ts
import { StateCreator } from 'zustand'

export type FishSliceType = {
  fishes: number
  addFish: () => void
}

export const createFishSlice: StateCreator<FishSliceType, [], [], FishSliceType> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})
```

Следующий store для модуля Bear:

```ts
// ..module/bear/bear-store-slice.ts
import { StateCreator } from 'zustand'

export type BearSliceType = {
  bears: number
  addBear: () => void
}

export const createBearSlice: StateCreator<BearSliceType, [], [], BearSliceType> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
})
```

Теперь вы можете объединить оба стора в один bounded store:

```ts
// stores/use-bound-store.ts
import {type FishSliceType, createFishSlice} from '...';
import {type BearSliceType, createBearSlice} from '...';

export const useBoundStore = create<BearSlice & FishSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}))
```

Использование bounded store в React компонентах:

```ts
import { type JSX } from 'react';
import { useBoundStore } from './stores/use-bound-store';

const App = (): JSX.Element {
  const bears = useBoundStore((state) => state.bears);
  const fishes = useBoundStore((state) => state.fishes);
  const addBear = useBoundStore((state) => state.addBear);

 return (
    <div>
      <h2>Number of bears: {bears}</h2>
      <h2>Number of fishes: {fishes}</h2>
      <button onClick={() => addBear()}>Add a bear</button>
    </div>
  )
}
```

В официальной документации вы можете посмотреть полный пример с использованием взаимодействия между слайсами и пример обновления мульти-стора.

https://docs.pmnd.rs/zustand/guides/slices-pattern


### Используйте set/setState для обновления состояния

Всегда используйте `set()` (или `setState()`) для обновления вашего состояния. `set()`(и `setState()`) гарантирует правильное объединение описанного обновления и соответствующее уведомление подписчиков (паттерн Pub/Sub).

### Размещайте функции-действия для изменения состояния внутри Store

В Zustand, состояние может быть обновлено без использования вызова диспетчеров (dispatch action) и функций-редюсоров (reducers), которые находятся в других Flux-подобных библиотеках.

Функции-действия могут быть добавлены напрямую в Store, как показано ниже.

```ts
const useBoundStore = create((set) => ({
  storeSliceA: ...,
  storeSliceB: ...,
  storeSliceC: ...,
  updateX: () => set(...),
  updateY: () => set(...),
}))
```


> ...


## Пример Todos

```shell
# Clone repository
git clone https://github.com/shopot/react-101.git

cd ./react-101

git checkout zustand

# Install packages
npm install

# Run application
npm run dev
```
