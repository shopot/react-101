export default [
  {
    ask: 'Что такое React.js?',
    answers: [
      {
        text: 'Серверный веб-фреймворк',
        isCorrect: false,
      },
      {
        text: 'UI фреймворк',
        isCorrect: false,
      },
      {
        text: 'Библиотека для разработки пользовательских интерфейсов',
        isCorrect: true,
      },
      {
        text: 'Ничего из вышеперечисленного',
        isCorrect: false,
      },
    ],
  },
  {
    ask: 'Какое из следующих утверждений верно для управляемых компонентов в React.js?',
    answers: [
      {
        text: 'Источник истины это DOM',
        isCorrect: false,
      },
      {
        text: 'Источником истины может быть что угодно',
        isCorrect: false,
      },
      {
        text: 'Источник истины это состояние компонента',
        isCorrect: true,
      },
      {
        text: 'Ничего из вышеперечисленного',
        isCorrect: false,
      },
    ],
  },
  {
    ask: 'Как установить значение по умолчанию для неконтролируемого компонента формы?',
    answers: [
      {
        text: 'Используя свойство value',
        isCorrect: false,
      },
      {
        text: 'Используя свойство defaultValue',
        isCorrect: true,
      },
      {
        text: 'Используя свойство по default',
        isCorrect: false,
      },
      {
        text: 'Он назначается автоматически',
        isCorrect: false,
      },
    ],
  },
];
