# Знакомство с Zustand


📚 Содержание

- [Знакомство с Zustand](#знакомство-с-zustand)
  - [Общее описание](#общее-описание)
  - [Установка](#установка)
  - [Создание состояния Store](#создание-состояния-store)
    - [Иммутабельность  и слияние состояния](#иммутабельность--и-слияние-состояния)
    - [Использование getState()](#использование-getstate)
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

Пример из документации пример из документации демонстрирующий частичное обновление состояния:

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

### Использование getState()

Несмотря на то, что `set()` позволяет получить доступ к текущему состоянию `set(state => result)`, но у вас так же есть доступ к состоянию за его пределами через `get()`:

```ts
const useSoundStore = create<SoundStoreType>((set, get) => ({
  sound: 'grunt',
  someAction: () => {
    const sound = get().sound
    ...
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
