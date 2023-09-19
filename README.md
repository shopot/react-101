# Знакомство с хуком useContext

📚 Содержание

- [Передача данных в глубь дерева компонентов](#передача-данных-в-глубь-дерева-компонентов)

### Передача данных в глубь дерева компонентов

Для передачи данных между компонентами в React используются пропсы, которые передаются от родительского компонента
дочернему - это одна из основных концепций React.

Когда несколько компонентов имеют общее состояние и нужно, что бы это состояние менялось в двух компонентах
одновременно, то в этом случае используется "подъем состояния" (Lifting State Up).

В процессе "подъема состояния" состояние, которое было определено в дочернем компоненте, "поднимается" на уровень выше и
становится свойством родительского компонента. Дочерние компоненты получают это состояние через пропсы и могут обновлять
его с помощью функций обратного вызова (callback functions), переданных родительскому компоненту.

Такой подход делает управление состоянием более предсказуемым и простым, что упрощает отладку и поддержку кода.

Однако, использование пропсов в такой манере может порождать проблему, известную как "prop drilling". Проблема
заключается в том, что если необходимые пропсы хранятся на нескольких уровнях цепочки компонентов, то приходится
передавать пропсы через каждый компонент, который находится между родительским и дочерним компонентом.

![Props list](props-list.png)

"Prop drilling" имеет следующие негативные последствия:

- Сложность чтения и поддержки кода: при передаче пропс через множество уровней вложенности компонентов, код может стать
  сложным для чтения и понимания, что затрудняет его сопровождение и поддержку.
- Проблемы с производительностью: каждый раз при передаче пропсов происходит новый рендеринг компонента, что может
  негативно сказаться на производительности, особенно если уровень вложенности компонентов очень высок.
- Необходимость передачи ненужных данных: часто требуется передавать данные через несколько уровней вложенности, даже
  если они нужны только в одном компоненте, что может привести к передаче ненужных данных.
- Невозможность повторного использования: когда компоненты зависят от конкретных пропсов, их повторное использование в
  другом контексте может быть затруднено без модификации кода компонента.

Помимо стандартного подхода с передачей пропсов от родительского компонента дочернему, React позволяет передавать данные
в приложение и получать эти данные внутри любого компонента напрямую, минуя пропсы, через механизм контекста.

В React контекст (React Context API) - это встроенный в React механизм передачи данных от родительских компонентов к
вложенным компонентам без необходимости передавать пропсы через каждый уровень иерархии компонентов.

![useContext](use-context.png)

`useContext()` - это React Hook, который позволяет вам читать и подписываться на контекст из вашего компонента.

### Использование React Context API

Объект контекст (Context) в React создается с помощью функции `createContext()`.
Значение контекста может быть доступно любому компоненту, который является потомком компонента, который был обернут в
провайдер (Context.Provider) контекста.

Чтобы использовать контекст в React, нужно выполнить три основных шага:

1. Создать новый объект контекста с помощью функции `createContext()`.
2. Создать провайдер (Provider) контекста в родительском компоненте, передав ему значение контекста.
3. Обновить значения контекста с помощью функции-сеттера в любом вложенном компоненте, который имеет доступ к контексту.

### Создание контекста - `createContext()`

[⬆ Back to Top](#знакомство-с-хуком-usecontext)

🔗 [Ссылка на деплой приложения](https://todo-app-context-ab1e50.netlify.app/)

Готовый пример с приложением находится в `src` раздела chapter-17.

Для запуска примера с готовым приложением выполните команды:

```shell
git clone https://github.com/shopot/react-101.git

git checkout chapter-17

npm install

npm run dev
```

Документация по теме:

- 🔗 [React Hook useContext()](https://react.dev/reference/react/useContext)

[⬆ Back to Top](#знакомство-с-хуком-usecontext)
