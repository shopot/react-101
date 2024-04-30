# Знакомство с Zustand


📚 Содержание

- [Знакомство с Zustand](#знакомство-с-zustand)
  - [Общее описание](#общее-описание)
  - [Установка](#установка)
  - [Создание состояния Store](#создание-состояния-store)
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
type CounterType = {
  value: number;
  increment: () => void;
  decrement: () => void;
}

const counter: CounterType = {
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
type CounterType = {
  value: number;
  increment: () => void;
  decrement: () => void;
}

const useCounterStore = create<CounterType>((set) => {
  return {
    value: 0, // переменная состояния

    // Действия (actions) для изменения переменной состояния
    increment: () => set((state) => ({value: state.value + 1})),
    decrement: () => set((state) => ({value: state.value - 1}))
  }
})
```

Здесь метод `set()` работает точно так же как и функция сеттер при использован хука `useState`:

```ts
const [age, setAge] = useState(42)
//...

const  handleClick = () => {
  // setAge(42 => 43), age = 43
  setAge((pendingState) => {
    return nextState + 1;
  });
}
```

Что эквивалентно записи:

```ts
// set((state) => ({value: state.value - 1})
set((state) => {
  return {
    value: state.value - 1
  }
})
```

Вместо значения возвращаем объект который содержит свойство `value` с новым значением на основе предыдущего значения.

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
