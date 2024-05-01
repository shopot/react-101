# Знакомство с Zustand


📚 Содержание

- [Знакомство с Zustand](#знакомство-с-zustand)
  - [Общее описание](#общее-описание)
  - [Термины и соглашения](#термины-и-соглашения)
  - [Установка](#установка)
  - [Создание состояния Store](#создание-состояния-store)
    - [Иммутабельность  и слияние состояния](#иммутабельность--и-слияние-состояния)
    - [Использование get/getState](#использование-getgetstate)
  - [Использование состояния в React компонентах](#использование-состояния-в-react-компонентах)
  - [Автогенерация селекторов](#автогенерация-селекторов)
  - [Асинхронные действия (Async actions)](#асинхронные-действия-async-actions)
  - [Инициализация состояние с помощью реквизитов (props)](#инициализация-состояние-с-помощью-реквизитов-props)
  - [Как сбросить состояние](#как-сбросить-состояние)
  - [Best practices](#best-practices)
    - [Single store](#single-store)
    - [Slices Pattern (multiple stores)](#slices-pattern-multiple-stores)
    - [Используйте set/setState для обновления состояния](#используйте-setsetstate-для-обновления-состояния)
    - [Размещайте функции-действия для изменения состояния внутри Store](#размещайте-функции-действия-для-изменения-состояния-внутри-store)
    - [Splitting code (No store actions pattern)](#splitting-code-no-store-actions-pattern)
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

## Термины и соглашения

- **Действия (actions)** - Это функции, которые мутируют (обновляют) наблюдаемые переменные состояния.
- **Store-объект (состояние, хранилище)** - Это объект который содержит переменные состояния и возможно действия (actions), другими словами это состояние (state) приложения.
- **Pub/Sub** - Обмен сообщениями по модели "издатель – подписчик", это поведенческий шаблон проектирования передачи сообщений.

⬆ [Back to Top](#знакомство-с-zustand)

## Установка

Zustand доступен в виде пакета на NPM, без необходимои установки дополнительных пакетов для TypeScript:

```shell
# NPM
npm install zustand
```

⬆ [Back to Top](#знакомство-с-zustand)

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

⬆ [Back to Top](#знакомство-с-zustand)

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

⬆ [Back to Top](#знакомство-с-zustand)

### Использование get/getState

Несмотря на то, что `set()` позволяет получить доступ к текущему состоянию `set(state => result)`, у вас так же есть возможность получить доступ к состоянию за его пределами через `get()`:

```ts
const useSoundStore = create<SoundStoreType>((set, get) => ({
  sound: 'grunt',
  someAction: () => {
    const sound = get().sound
    ...
```

⬆ [Back to Top](#знакомство-с-zustand)

## Использование состояния в React компонентах

Для того, что бы получить данные из состояния и действия, достаточно использовать хук где угодно, без необходимости использования каких либо провайдеров:

```ts
import type { JSX } from 'react';
import { useCounterStore } from './counter-store'

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

⬆ [Back to Top](#знакомство-с-zustand)

## Автогенерация селекторов

Получение значений через селектор хука вида:

```ts
const counter = useCounterStore((state) => state.value);
```
может быть утомительным, если это так, вы можете автоматически генерировать селекторы определив собственную функцию-обертку `createSelectors`:

```ts
// utils/store.ts
import {UseBoundStore, StoreApi } from 'zustand';

export type WithSelectors<S> = S extends { getState: () => infer T } ? S & { use: { [K in keyof T]: () => T[K] } } : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;

  store.use = {};

  for (const k of Object.keys(store.getState())) {
    (store.use as Record<string, () => unknown>)[k] = () => store((s) => s[k as keyof typeof s]);
  }
```

Пример с использованием `createSelectors`:

```ts
import { create } from 'zustand';
import { createSelectors } from 'utils/store';

const useCounterStore = create<CounterStateType>(() => ({ value: 0 }));

const counterStore = createSelectors(useCounterStore);

// ...
const MyCounterValue = (): JSX.Element => {
  const count = counterStore.use.value();

  return (
    <h1>Count is {count}</h1>
  );
};
```

Теперь селекторы генерируются автоматически, и вы можете получить к ним прямой доступ через свойство `use`, как переменным состояния так и как действиям если они определены внутри стора.

⬆ [Back to Top](#знакомство-с-zustand)


## Асинхронные действия (Async actions)

Для Zustand не имеет значения, являются ли ваши действия асинхронными или нет, просто используйте вызовы API как обычно и обновляйте состояние когда будете готовы:

```ts
// ...
const usePostStore = create<PostStoreType>((set) => ({
  posts: PostType[],
  isLoading: false,

  fetchItems: async (url: string) => {
    set({isLoading: true});

    try {
      const response = await fetch(url)

      set({ posts:  (await response.json()) as PostType[], isLoading: false})
    } catch {
      set({isLoading: false});
    }
  },
}))
```

⬆ [Back to Top](#знакомство-с-zustand)

## Инициализация состояние с помощью реквизитов (props)

В случаях, когда необходимо внедрение зависимостей, например, когда состояние должно быть инициализировано реквизитами из компонента, рекомендуемый подход - использовать хранилище с `React.Context`.

Пример реализации можно посмотреть в официальной документации:

https://docs.pmnd.rs/zustand/guides/initialize-state-with-props

В реальности, реализация данного кейса будет отличаться от того, что написано в документации, это связано с природой `React.Context`, лучшем вариантом будет использовать [Splitting code (No store actions pattern)](#splitting-code-no-store-actions-pattern) совместно с `React.Context`.
Это позволит отделить действия от самого стора и тогда изменение состояния стора  внутри контекста не будет вызывать повторный рендеринг компонентов, которые будут использовать только действия для мутации состояния.

⬆ [Back to Top](#знакомство-с-zustand)

## Как сбросить состояние

Пример сброса состояния до исходного значения при помощи начального значения:

```ts
import { create } from 'zustand'

type CounterStateType = {
  value: number;
  // ...
}

const initialState: CounterStateType = {
  value: 0,
}

const useCounterStore = create<CounterStateType>((set) => {
  return {
    value: 0, // переменная состояния
    // ...
    reset: () => set(initialState),
  }
})
```

Больше примеров с разными паттернами можно посмотреть в официальной документации:

https://docs.pmnd.rs/zustand/guides/how-to-reset-state

⬆ [Back to Top](#знакомство-с-zustand)

## Best practices

### Single store

Глобальное состояние вашего React-приложения должно быть расположено в одном Zustand Store.

Если у вас большое приложение используйте поход **Slices Pattern**, разделение состояния на основе концепции модульности.

⬆ [Back to Top](#знакомство-с-zustand)

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

⬆ [Back to Top](#знакомство-с-zustand)

### Используйте set/setState для обновления состояния

Всегда используйте `set()` (или `setState()`) для обновления вашего состояния. `set()`(и `setState()`) гарантирует правильное объединение описанного обновления и соответствующее уведомление подписчиков (паттерн Pub/Sub).

⬆ [Back to Top](#знакомство-с-zustand)

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

⬆ [Back to Top](#знакомство-с-zustand)

### Splitting code (No store actions pattern)

Основная рекомендация от разработчиков Zustund звучит так:

> Рекомендуемое использование - совмещать действия и состояния в Store (пусть ваши действия будут располагаться вместе с вашим состоянием).

Тем не менее существует альтернативный подход при котором, можно определить действия на уровне модуля, внешнего по отношению к store.

Пример с Counter:

```ts
// counter/stores/counter-store.ts
import { create } from 'zustand';

export type CounterStateType = {
  value: number;
};

export const useCounterStore = create<CounterStateType>(() => ({ value: 0 }));
```

Модуль с определением действий:

```ts
// counter/stores/counter-actions.ts
import { useCounterStore } from './counter-store';

export type CounterActionType = {
  increment: () => void;
  decrement: () => void;
};

export const increment = () => useCounterStore.setState((s) => ({ value: s.value + 1 }));

export const decrement = () => useCounterStore.setState((s) => ({ value: s.value + 1 }));
```

Public API для `counter/stores`
```ts
// counter/stores/index.ts
import { UseBoundStore, StoreApi } from 'zustand';

import { type CounterStateType } from './counter-store';
import { type CounterActionType } from './counter-actions';

export * from './counter-store';
export * from './counter-actions';

// Глобальный тип для стора включающий состояние и действия
export type CounterStoreType = UseBoundStore<StoreApi<CounterStateType & CounterActionType>>;
```

Пример вызова действия внутри React компонента:

```ts
// counter/components/my-counter-controls.tsx
import type { JSX } from 'react';
import { increment, decrement } from '../stores'

const MyCounterControl = (): JSX.Element => (
  <>
    <button onClick={increment}>One up</button>
    <button onClick={decrement}>One down</button>
  </>
);
```

Этот паттерн имеет несколько преимуществ:
- Для вызова действия не требуется хук;
- Облегчает разделение кода.

Иногда отделение действий от стора делается в пределах одного модуля (файла), то есть без раскидывания сущностей стора по разным файлам, такой вариант встречается не мее часто, чем вариант с размещением действий внутри стора.

⬆ [Back to Top](#знакомство-с-zustand)

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
