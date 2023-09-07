import { ReactElement, useState } from 'react';

import styles from './app.module.css';

import { TodoList } from '@/components/todo-list';
import { AddTodoForm } from '@/components/add-todo-form';
import { deepCopy } from '@/util';
import { Todo } from '@/types';

// Начальное значение для переменной состояния todos
const initialState = [
  {
    id: 1,
    title: 'learn in the tutorial are fundamental to building any React app',
    completed: false,
  },
];

const App = (): ReactElement => {
  // Объявляем переменную состояния для хранения списка todo при помощи useState
  // начальное значение - массив с одним элементом
  const [todos, setTodos] = useState<Todo[]>(initialState);

  // Объявляем переменную состояния для хранения текущего значения id
  // начальное значение = 1
  // можно было использовать библиотеку uuid: https://www.npmjs.com/package/uuid
  const [todoIndex, setTodoIndex] = useState(1);

  // Метод для переключения статуса completed
  const toggleTodoComplete = (todoId: number) => {
    // Находим индекс массива todo по id
    const findIndex = todos.findIndex(({ id }) => id === todoId);

    if (findIndex !== -1) {
      // Создаем полную копию списка todo, объекты нельзя скопировать простым присваиванием
      // Полная копия нужна, потому что в setTodos нужно передать новое значение,
      // поэтому мы не можем поменять часть переменной состояния при использовании useState
      const newState = deepCopy<Todo[]>(todos);

      const todo = newState[findIndex];

      // Обновляем значение completed уже в копии массива todo
      newState[findIndex] = { ...todo, completed: !todo.completed };

      // Обновляем переменную состояния новым значением из списка todo
      setTodos(newState);
    }
  };

  // Метод для удаления todo по id
  const removeTodo = (todoId: number) => {
    // Удаляем элемент из массива используя копию массива
    const newState = deepCopy<Todo[]>(todos).filter(({ id }) => id !== todoId);

    // Обновляем переменную состояния новым значением из списка todo
    setTodos(newState);
  };

  // Метод для добавления нового todo массив из todo
  const addTodo = (title: string) => {
    // Создаем новый элемент для списка todo
    const newTodo = {
      id: todoIndex + 1,
      title,
      completed: false,
    };

    // Обновляем переменную состояния todoIndex увеличивая на 1
    setTodoIndex(todoIndex + 1);

    // Получаем копию массива списка todo
    const newState = deepCopy<Todo[]>(todos);

    // Добавляем в него новый элемент
    newState.push(newTodo);

    // Обновляем переменную состояния новым значением из списка todo
    setTodos(newState);
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} onToggleComplete={toggleTodoComplete} onRemove={removeTodo} />
    </div>
  );
};

export default App;
