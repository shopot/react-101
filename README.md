# Vitest: Установка и базовая настройка

📚 Содержание:

- [Установка Vitest](#установка-vitest)
- [Настройка - файл vitest.config.ts](#настройка---файл-vitestconfigts)
- [Настройка окружения - environment](#настройка-окружения---environment)
- [Настройка среды выполнения - setupFiles](#настройка-среды-выполнения---setupfiles)
- [Настройка покрытия - Coverage](#настройка-покрытия---coverage)
- [Настройка алиасов из Vite](#настройка-алиасов-из-vite)
- [Настройка tsconfig.json и eslint](#настройка-tsconfigjson-и-eslint)
- [Команды для запуска](#команды-для-запуска)

## Установка Vitest

🔗 [Docs: Scaffolding Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

Установка пакета Vitest
и [библиотеки для тестирования React](https://testing-library.com/docs/react-testing-library/intro) через NPM:

```shell
npm install -D vitest @testing-library/react
```

[⬆ Back to Top](#vitest-установка-и-базовая-настройка)

## Настройка - файл vitest.config.ts

Существует два способа настройки Vitest:

1. через `vite.config.ts`
2. через `vitest.config.ts` - имеет наибольший приоритет

Настройка на основе `vitest.config.ts` используется если вы хотите использовать раздельную конфигурацию для тестирования
или ваше приложение не использует Vite.

Vitest поддерживает те же расширения вашего файла конфигурации, что и
Vite: `.js`, `.mjs`, `.cjs`, `.ts`, `.cts`, `.mts`.

⛔ Vitest не поддерживает расширение `.json`.

Создайте файл `vitest.config.ts` в корне проекта следующего содержания:

```ts
// vitest.config.ts
import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Provide global APIs for explicitness
  },
});
```

Функция `defineConfig()` принимает аргументом JavaScript объект, для определения конфигурационных параметров.
Основная настройка Vitest описывается в свойстве `test`, весь список доступных параметров доступен на странице
официальной документации [Configuring Vitest](https://vitest.dev/config/)

`globals: true` - включает глобальные API (методы `describe`, `it`, `test`, `expect` будет импортированы глобально),
которые делают доступ к функциональности явным и легким для разработчика, по умолчанию отключено.

[⬆ Back to Top](#vitest-установка-и-базовая-настройка)

## Настройка окружения - environment

Следующим шагом необходимо установить и настроить окружение (environment) DOM API, которое будет использоваться для
тестирования.

```shell
npm install -D jsdom
```

```js
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Provide global APIs for explicitness
    environment: 'jsdom', // The environment that will be used for testing
  },
});
```

Средой выполнения по умолчанию в Vitest является среда Node.js. Для тестирования веб-приложений необходимо использовать
среду выполнения подобную браузеру [jsdom](https://github.com/jsdom/jsdom)
или [happy-dom](https://github.com/capricorn86/happy-dom).

[jsdom](https://github.com/jsdom/jsdom) и [happy-dom](https://github.com/capricorn86/happy-dom) - это реализация
веб-браузера на языке JavaScript без графического интерфейса для тестирования и веб-скрейпинга реальных веб-приложений,
которая включает в себя множество веб-стандартов WHATWG [DOM](https://dom.spec.whatwg.org/)
и [HTML](https://html.spec.whatwg.org/multipage/).

Добавив блок комментария или комментарий `@vitest-environment` в верхней части файла, вы можете указать другую среду,
которая будет использоваться для всех тестов в этом файле:

Docblock style:

```js
/**
 * @vitest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
```

Comment style:

```js
// @vitest-environment happy-dom

test('use happy-dom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
```

Для совместимости с Jest также существует `@jest-environment`:

```js
/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
```

[⬆ Back to Top](#vitest-установка-и-базовая-настройка)

## Настройка среды выполнения - setupFiles

`setupFiles` - позволяет указать модули (пути к файлам JavaScript или TypeScript), которые должны быть загружены перед
запуском тестов. Эти модули могут содержать код, который необходим для инициализации и настройки среды выполнения
тестов, например, подключение дополнительных библиотек, настройка мок-объектов, определение глобальных переменных и так
далее.

```js
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // ...
    setupFiles: ['src/tests/setup.jsdom.ts'],
  },
});
```

В этом файле нужно добавить импорт `@testing-library/jest-dom`, это позволит использовать в Vitest функции сопоставления
из дополнительной библиотеки [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom)

> Jest-DOM Matchers: toBeInTheDocument(), toHaveTextContent(), toHaveAttribute(), toBeInTheDocument(), etc.

предварительно установив сам пакет определение типов:

```shell
npm install -D @testing-library/jest-dom
```

```js
// src/tests/setup.jsdom.ts
import '@testing-library/jest-dom';
```

Это один из примеров расширения функциональности Vitest за счет стороннего API.

[⬆ Back to Top](#vitest-установка-и-базовая-настройка)

## Настройка покрытия - Coverage

Покрытие кода - это метрика, указывающая на то, какое количество кода проекта было проверено модульными тестами.

Vitest поддерживает покрытие нативного кода через [v8](https://v8.dev/blog/javascript-code-coverage) и покрытие
инструментированного кода через [istanbul](https://istanbul.js.org/).

> Инструментация кода означает добавление дополнительных конструкций или вызовов в исходный код, чтобы собирать
> информацию во время выполнения программы. В случае Istanbul, инструментация используется для сбора информации о том,
> какие участки кода были выполнены в ходе тестирования.

Для настройки [v8](https://v8.dev/blog/javascript-code-coverage) необходимо установить пакет `@vitest/coverage-v8` и
добавить соответствующие настройки в раздел `test`:

```shell
npm install -D @vitest/coverage-v8
```

```js
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // ...
    coverage: {
      // Coverage Providers: "v8" or "istanbul" or your custom provider
      provider: 'v8',
      // Coverage reporters to use
      reporter: ['text'],
      // Coverage folder location
      reportsDirectory: './tests/unit/coverage',
    },
  },
});
```

Страница официальной документации [Coverage](https://vitest.dev/guide/coverage.html)

[⬆ Back to Top](#vitest-установка-и-базовая-настройка)

### Настройка алиасов из Vite

Если в конфигурации Vite есть настройка алиасов, например с использованием префикса `@`, то в файл конфигурации Vitest
то
же необходимо включить поддержку алиасов для корректного импорта:

```js
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: [{find: '@', replacement: resolve(__dirname, './src')}],
  },
  test: {
    // ...
  },
})
;
```

Итоговый листинг файла конфигурации Vitest:

```js
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: [{find: '@', replacement: resolve(__dirname, './src')}],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/tests/setup.jsdom.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      reportsDirectory: './tests/unit/coverage',
    },
    css: false, // Должен ли обрабатываться CSS
  },
});
```

[⬆ Back to Top](#vitest-установка-и-базовая-настройка)

### Настройка tsconfig.json и eslint

Чтобы TypeScript работал с глобальными API (`globals: true`), добавьте `vitest/globals` в поле типов в
вашем `tsconfig.json`.

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  }
}
```

[https://vitest.dev/config/#globals](https://vitest.dev/config/#globals)

Указать файл `tsconfig.node.json` в `parserOptions.project` в файле конфигурации ESLint:

```
"project": ["./tsconfig.json", "./tsconfig.node.json"]
```

Указать файл `vitest.config.ts` для включения в программу в файле конфигурации `tsconfig.node.json`:

```
"include": ["vite.config.ts", "vitest.config.ts"]
```

[⬆ Back to Top](#vitest-установка-и-базовая-настройка)

### Команды для запуска

Чтобы запускать тесты через `npm run`, добавьте в `package.json` в раздел `scripts` следующие команды:

```
"test": "vitest run",
"coverage": "vitest run --coverage"
```

На этом установка и базовая настройка Vitest будет завершена.

Документация по теме:

- 🔗 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- 🔗 [Jest-DOM Testing Library](https://testing-library.com/docs/ecosystem-jest-dom/)
- 🔗 [Vitest: Getting Started](https://vitest.dev/guide/)
- 🔗 [Vitest: Code Coverage](https://vitest.dev/guide/coverage.html)
- 🔗 [Vitest: Config Reference](https://vitest.dev/config/)

[⬆ Back to Top](#vitest-установка-и-базовая-настройка)
