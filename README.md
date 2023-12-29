
# Новые возможности в Redux Toolkit 2.0

📚 Содержание

* [combineSlices API для разделения кода](#combineslices-api-для-разделения-кода)
  * [Объединение слайсов и отдельных редюсеров с помощью `combineReducers`](#объединение-слайсов-и-отдельных-редюсеров-с-помощью-combinereducers)
  * [Динамическое подключение slice-редюсера с помощью `.inject()`](#динамическое-подключение-slice-редюсера-с-помощью-inject)
* [Определение селекторов с помощью `createSlice`](#определение-селекторов-с-помощью-createslice)
* [`createSlice.reducers` callback синтаксис и поддержка асинхронной логики](#createslicereducers-callback-синтаксис-и-поддержка-асинхронной-логики)
* [Динамическое добавление Middleware в Redux Store](#динамическое-добавление-middleware-в-redux-store)
* [Codemod](#codemod)
* [Руководство по установке Next.js](#руководство-по-установке-nextjs)
* [Пример с приложением Counter App](#пример-с-приложением-counter-app)

Частичный перевод [Migrating to RTK 2.0 and Redux 5.0: New Features](https://redux-toolkit.js.org/usage/migrating-rtk-2#new-features) по состоянию на 28.11.2023. 

> Эти функции являются новыми в Redux Toolkit 2.0 и помогают охватить дополнительные варианты использования, о которых, как мы видели, пользователи просили в экосистеме.


## combineSlices API для разделения кода

В новой версии RTK 2.0 добавлен новый API-интерфейс `combineReducers()`, предназначенный для обеспечения отложенной загрузки редюсеров во время выполнения (lazy load). 
Он принимает отдельные слайсы (slices) или объект, содержащий слайсы, в качестве аргументов и автоматически вызывает `combineReducers` с `sliceObject.name` в качестве ключа для каждого поля состояния.

Результатом выполнения `combineReducers()` является функция-редюсер, включающая в себя дополнительный метод `.inject()`, который можно использовать для динамического подключения дополнительных слайсов (slices) во время выполнения.
`combineReducers()` также включает метод `.withLazyLoadedSlices()`, который можно использовать для генерации типов TypeScript для редюсеров, которые будут добавлены позже.
См. [#2776](https://github.com/reduxjs/redux-toolkit/issues/2776) первоначального обсуждения этой идеи.

### Объединение слайсов и отдельных редюсеров с помощью `combineReducers`

```ts
const stringSlice = createSlice({
  name: 'string',
  initialState: '',
  reducers: {},
})

const numberSlice = createSlice({
  name: 'number',
  initialState: 0,
  reducers: {},
})

const booleanReducer = createReducer(false, () => {})

const api = createApi(/*  */)

const combinedReducer = combineSlices(
  stringSlice,
  {
    num: numberSlice.reducer,
    boolean: booleanReducer,
  },
  api
)

expect(combinedReducer(undefined, dummyAction())).toEqual({
  string: stringSlice.getInitialState(),
  num: numberSlice.getInitialState(),
  boolean: booleanReducer.getInitialState(),
  api: api.reducer.getInitialState(),
})
```

### Динамическое подключение slice-редюсера с помощью `.inject()`

```ts
// Create a reducer with a TS type that knows `numberSlice` will be injected
const combinedReducer =
  combineSlices(stringSlice).withLazyLoadedSlices<
    WithSlice<typeof numberSlice>
  >()

// `state.number` doesn't exist initially
expect(combinedReducer(undefined, dummyAction()).number).toBe(undefined)

// Create a version of the reducer with `numberSlice` injected (mainly useful for types)
const injectedReducer = combinedReducer.inject(numberSlice)

// `state.number` now exists, and injectedReducer's type no longer marks it as optional
expect(injectedReducer(undefined, dummyAction()).number).toBe(
  numberSlice.getInitialState()
)

// original reducer has also been changed (type is still optional)
expect(combinedReducer(undefined, dummyAction()).number).toBe(
  numberSlice.getInitialState()
)
```

См. [combineSlices (redux-toolkit.js.org)](https://redux-toolkit.js.org/api/combineSlices)

⬆ [Back to Top](#новые-возможности-в-redux-toolkit-20)

## Определение селекторов с помощью `createSlice`

API `createSlice` теперь поддерживает определение селекторов непосредственно как часть слайса (Redux Slice):

```ts
const counterSlice = createSlice({
  name: 'counter',
  initialState: 42,
  reducers: {},
  selectors: {
    selectSlice: (state) => state,
    selectMultiple: (state, multiplier: number) => state * multiplier,
  },
})

export const { selectSlice, selectMultiple } = counterSlice.selectors
```

См. [createSlice и selectors (redux-toolkit.js.org)](https://redux-toolkit.js.org/api/createSlice#selectors)

⬆ [Back to Top](#новые-возможности-в-redux-toolkit-20)

## `createSlice.reducers` callback синтаксис и поддержка асинхронной логики

Новый синтаксис позволяет описывать асинхронную логику внутри создаваемого Redux Slice.

Чтобы создавать асинхронные thunk-функции с помощью `createSlice()`, вам необходимо настроить специальную версию `createSlice()`, имеющую доступ к `createAsyncThunk()`.

Пример взят из документации:

```ts
import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'

// This name is up to you
export const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})
```

Функция `createSliceWithThunks()` будет использоваться для создания Redux Slice вместо функции `createSlice()`.

Рассмотрим пример создания салайса для Counter App:

```ts
const counterSlice = createSliceWithThunks({
  name: 'counter',
  initialState: {
    loading: false,
    value: 0,
    error: null,
  } as CounterState,
  reducers: (create) => ({
    // Обычный "case reducer", как всегда
    increment: create.reducer((state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }),
    // "case reducer" с функцией подготовки "prepare callback" для кастомизации действия "action"
    decrement: create.preparedReducer(
      (num: number) => ({ payload: num * 2 }),
      // объект "action" будет получен из функции подготовки "prepare callback"
      (state, action) => {
        state.value -= action.payload;
      }
    ),
    // Асинхронная thunk-функция
    incrementByAmount: create.asyncThunk(
      // функция payloadCreator в качестве первого аргумента
      async (amout: number, thunkApi) => {
        const response = await counterApi.getAmount(amout);

        return response.data;
      },
      // Вторым аргументом предается объект содержащий действия жизненного цикла:
      // `{ pending?, rejected?, fulfilled?, settled?, options? }`
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.value += action.payload;
        },
        // settled вызывается как для отклоненных (rejected), так и для выполненных действий (fulfilled)
        settled: (state, action) => {
          state.loading = false
        },
      }
    ),
  }),
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
```

Объект `create` (ReducerCreators) содержит три метода для создания редюсеров:

  - `create.reducer()` - для создание обычного редюсера "case reducer", принимает один параметр в виде функции case-редюсера:
    ```ts
    create.reducer<T>((state, action) => {/*...*/});
    ``` 
  - `create.preparedReducer()` - для создания редюсера с callback-функцией подготовки "prepare callback", принимает два параметра:
    - **prepareAction** - callback-функция подготовки, возваращающая объект действия (action), который будет передан в функцию case-редюсер.
    - **reducer** - функция case-редюсер.
      ```ts
      create.preparedReducer(
          (arg: SomeArg) => {}, 
          (state, action) => {/*...*/}
      );
      ```
  - `create.asyncThunk()` - для создания thunk-функции (async thunk) вместо генератора действия (action creator), принимает два параметра:
    - **payloadCreator** - функция обратного вызова (callback), которая выполняет асинхронную операцию и возвращает обещание (promise) с результатом операции, это та же самая функция, что передается при вызове [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk).
    - **config** - необязательный параметр в виде объекта конфигурации, который содержит функции case-редюсеры для каждого [Promise Lifecycle Actions](https://redux-toolkit.js.org/api/createAsyncThunk#promise-lifecycle-actions).
      ```ts
      create.asyncThunk(
        async (arg: SomeArg, thunkApi) => {/*...*/},
        {
          pending: (state) => {/*...*/},
          rejected: (state, action) => {/*...*/},
          fulfilled: (state, action) => {/*...*/},
          settled: (state, action) => {/*...*/},
          options: {/*...*/},
        }
      )
      ```

См. [The reducers "creator callback" notation](https://redux-toolkit.js.org/api/createSlice#the-reducers-creator-callback-notation)

⬆ [Back to Top](#новые-возможности-в-redux-toolkit-20)

## Динамическое добавление Middleware в Redux Store

Метод `store.addMiddleware()` позволяет внедрить middleware уже после создания экземпляра Redux Store:

```ts
import { createDynamicMiddleware, configureStore } from '@reduxjs/toolkit'

const dynamicMiddleware = createDynamicMiddleware()

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(dynamicMiddleware.middleware),
})

// later
dynamicMiddleware.addMiddleware(someOtherMiddleware)
```

См. [addMiddleware (redux-toolkit.js.org)](https://redux-toolkit.js.org/api/createDynamicMiddleware#addmiddleware)

⬆ [Back to Top](#новые-возможности-в-redux-toolkit-20)

## Codemod

Object-синтаксис в новой версии RTK 2.0 является устаревшим.

Чтобы упростить обновление кодовой базы и переход на новую версию RTK 2.0, разработчики Redux опубликовали набор модов, которые автоматически преобразуют устаревший синтаксис «object» в эквивалентный синтаксис с использованием «builder callback».

Пакет codemods доступен в NPM как `@reduxjs/rtk-codemods`.  В настоящее время он содержит следующие кодовые моды (<TRANSFORM NAME>):

- `createReducerBuilder`: для миграции вызовов `createReducer` с устаревшего синтаксиса с использованием «object»,  в синтаксис с использованием «builder callback».
- `createSliceBuilder`: для миграции вызовов `createSlice` с устаревшего синтаксиса с использованием «object»,  в синтаксис с использованием «builder callback».
- `createSliceReducerBuilder`: для миграции вызовов createSlice, которые используют все еще стандартный синтаксис «object» для редюсеров, на дополнительный синтаксис с использованием «builder callback», включая использование подготовленных редукторов.

Синтаксис команды для запуска codemods:

```shell
npx @reduxjs/rtk-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

Пример запуска

```shell
npx @reduxjs/rtk-codemods createReducerBuilder ./src

npx @reduxjs/rtk-codemods createSliceBuilder ./packages/my-app/**/*.ts
```

До использования codemod:

```ts
const slice1 = createSlice({
  name: 'a',
  initialState: {},
  extraReducers: {
    [todoAdded1a]: (state, action) => {
      // stuff
    },
    [todoAdded1b]: (state, action) => action.payload,
  },
})
```
После использования codemods:

```ts
const slice1 = createSlice({
  name: 'a',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(todoAdded1a, (state, action) => {
      // stuff
    });
    builder.addCase(todoAdded1b, (state, action) => action.payload);
  },
})
```
См. [Codemods (redux-toolkit.js.org)](https://redux-toolkit.js.org/api/codemods).


⬆ [Back to Top](#новые-возможности-в-redux-toolkit-20)

## Руководство по установке Next.js

Добавлена страница документации, на которой рассказывается, как правильно настроить Redux с помощью Next.js.

См. [Redux Toolkit Setup with Next.js (redux-toolkit.js.org)](https://redux.js.org/usage/nextjs)


⬆ [Back to Top](#новые-возможности-в-redux-toolkit-20)



## Пример с приложением Counter App

Готовый пример с приложением находится в директории `src` раздела `redux-tollkit-2`.

Для запуска примера с готовым приложением выполните команды:

```shell
git clone https://github.com/shopot/react-101.git

git checkout redux-tollkit-2

npm install

npm run dev
```

Документация по теме:

- 🔗 [Migrating to RTK 2.0 and Redux 5.0](https://redux-toolkit.js.org/usage/migrating-rtk-2)
  
⬆ [Back to Top](#новые-возможности-в-redux-toolkit-20)
