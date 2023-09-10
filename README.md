# Совместное использование состояния между компонентами

📚 Содержание:

- [Подъём состояния (Lifting state up)](#подъём-состояния-lifting-state-up)
- [Подъём состояния на примере Accordion](#подъём-состояния-на-примере-accordion)
- [Контролируемые и неконтролируемые компоненты](#контролируемые-и-неконтролируемые-компоненты)
- [Prop drilling - проблема с передачей пропсов](#prop-drilling---проблема-с-передачей-пропсов)
- [Приложение React Roadmap (Accordion)](#приложение-react-roadmap-accordion)

### Подъём состояния (Lifting state up)

Иногда нужно, чтобы состояние двух компонентов всегда менялось одновременно. Для этого нужно удалить состояние из обоих
компонентов и переместить состояние к их ближайшему общему родительскому компоненту, а затем состояние будет
передаваться им в виде пропса (атрибута). Этот прием известен как ***Подъём состояния (Lifting state up)***, и это одна
из самых
распространенных вещей, которые вы будете делать при написании кода React.

[⬆ Back to Top](#совместное-использование-состояния-между-компонентами)

### Подъём состояния на примере Accordion

В этом примере родительский компонент `<Accordion />` отображает две отдельные панели:

- `<Accordion />`
  - `<Panel />`
  - `<Panel />`

Каждый компонент `Panel` имеет логическое состояние `isActive`, которое определяет, видимо ли его содержимое.

```jsx
import { useState } from 'react';

const Panel = ({title, children}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section>
      <button onClick={() => setIsActive(true)}>{title}</button>
      {isActive && (<p>{children})</p>)}
    </section>
  );
};

export const Accordion = () => {
  return (
    <>
      <Panel title="CLI Tools">
        Vite, Webpack, CRA.
      </Panel>
      <Panel title="Components">
        Lifecycle of Reactive Effects, Lists and Keys, Render Props...
      </Panel>
    </>
  );
};
```

Но теперь предположим, что вы хотите изменить его так, чтобы в любой момент времени была открыта только одна панель. При
таком дизайне открытие второй панели должно свернуть первую.

Чтобы скоординировать эти две панели, вам нужно «поднять их состояние» до родительского компонента в три этапа:

1. Удалить состояние из дочерних компонентов.
2. Передать данные от общего родителя.
3. Добавить состояние в общем родительском компоненте и передать его вместе с обработчиками событий.

Это позволит компоненту `<Accordion />` координировать обе панели и открывать их только по одной.

```jsx
import { useState } from 'react';

const Panel = ({title, children, isActive, onShow}) => {
  return (
    <section>
      <button onClick={onShow}>{title}</button>
      {isActive && (<p>{children})</p>)}
    </section>
  );
};

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Panel
        title="CLI Tools"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Vite, Webpack, CRA.
      </Panel>
      <Panel
        title="Components"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lifecycle of Reactive Effects, Lists and Keys, Render Props...
      </Panel>
    </>
  );
}
```

На этом подъем состояния завершен!  Перемещение состояния в общий родительский компонент позволило скоординировать две
панели. Использование активного индекса вместо двух флагов `«is shown»` гарантировало, что в данный момент времени
активна
только одна панель. А передача обработчика событий дочернему элементу позволила дочернему элементу изменить состояние
родителя.

[⬆ Back to Top](#совместное-использование-состояния-между-компонентами)

### Контролируемые и неконтролируемые компоненты

Компонент ***с некоторым локальным состоянием*** принято называть `неконтролируемым`. Например, исходный
компонент `<Panel />` с переменной состояния `isActive` не контролируется, поскольку его родительский компонент не может
влиять на то, активна панель или нет.

Напротив, вы можете сказать, что компонент `контролируемый`, когда важная информация в нем управляется через пропсы, а
не его собственным локальным состоянием. Это позволяет родительскому компоненту полностью определять поведение дочернего
компонента, как в последнем примере, компонент `<Panel />` с пропсом `isActive` управляется компонентом `<Accordion />`.

Аналогично, если речь идет о встроенных компонентах браузера, например `<input>`, то передача пропса `value` делает его
контролируемым, в противном случае `<input>` будет использовать свое локальное состояние.

На практике `контролируемый` и `неконтролируемый` не являются строгими техническими терминами - каждый компонент обычно
имеет некоторое сочетание как локального состояния, так и пропсов.

[⬆ Back to Top](#совместное-использование-состояния-между-компонентами)

### Prop drilling - проблема с передачей пропсов

Пропсы представляют собой данные, которые компоненты принимают в качестве аргументов. Они передаются от родительского
компонента дочернему компоненту с помощью атрибутов. Когда компонент содержит несколько уровней вложенности, передача
данных через все компоненты может стать очень неудобной и затруднительной задачей, это может привести к ситуации,
называемой ***Prop drilling***.

**Prop drilling** - это процесс передачи данных (пропсы) из одного компонента вложенного в другой компонент через
несколько уровней вложенности. Это означает, что если необходимо передать данные от компонента A к компоненту D, и
компоненты B, C находится между ними, то необходимо передать данные от A в B, а затем от B в C и затем от C в D.

![prop drilling](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.dark.png&w=640&q=75)

⚠️ **Prop drilling** может привести к тому, что код станет более сложным и трудно редактируемым. Кроме того, если пропсы
нужно передавать через много компонентов, это может привести к проблемам c производительностью при рендеринге
компонентов.

Для того чтобы избежать **Prop drilling**, в React используются более продвинутые концепции передачи данных, такие как
контекст (Сontext) и библиотеки управление состоянием (state management), которые позволяют передавать данные между
компонентами без использования пропсов и без необходимости выстраивания цепочки компонентов.

💡 Принято считать, что если пропсы проходят через более чем три уровня вложенности, это может быть признаком того, что
необходимо пересмотреть архитектуру компонентов.

[⬆ Back to Top](#совместное-использование-состояния-между-компонентами)

### Итог

- Если вы хотите скоординировать два компонента, переместите их состояние к их общему родительскому компоненту.
- Затем передайте информацию через пропс (props) от их общего родителя.
- Наконец, передайте обработчики событий из родительского компонента, чтобы дочерние компоненты могли изменить состояние
  родительского компонента.
- Полезно рассматривать компоненты как `«контролируемые»` (управляемые пропсами) или `«неуправляемые»` (управляемые
  состоянием).
- Для того чтобы избежать `prop drilling`, используйте более продвинутые концепции передачи данных, такие как `Context`
  или библиотеки управления состоянием (state management), такие как `Redux` или `MobX`

[⬆ Back to Top](#совместное-использование-состояния-между-компонентами)

### Приложение React Roadmap (Accordion)

🔗 [Ссылка на деплой приложения React Roadmap (Accordion)](https://react-roadmap-ab1e50.netlify.app/)

Готовый пример с приложением находится в src раздела chapter-10.

Для запуска примера с готовым приложением выполните команды:

```shell
git clone https://github.com/shopot/react-101.git

git checkout chapter-10

npm install

npm run dev
```

Документация по теме:

- 🔗 [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)

[⬆ Back to Top](#совместное-использование-состояния-между-компонентами)

