import { ReactElement, useState } from 'react';

import styles from './app.module.css';

import { TodoList } from '@/components/todo-list';
import { AddTodoForm } from '@/components/add-todo-form';
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
  // Объявляем переменную состояния для хранения списка todo при помощи useState()
  // начальное значение - массив с одним элементом
  const [todos, setTodos] = useState<Todo[]>(initialState);

  // Функция для получения последнего id списка
  const getLastId = () => {
    if (todos.length === 0) {
      return 0;
    }

    return todos[todos.length - 1].id;
  };

  // Метод для переключения статуса completed
  const handleToggleTodo = (todoId: number) => {
    // Находим индекс массива todo по id
    const findIndex = todos.findIndex(({ id }) => id === todoId);

    if (findIndex !== -1) {
      // Создаем полную копию списка todo, объекты нельзя скопировать простым присваиванием
      // Полная копия нужна, потому что в setTodos нужно передать новое значение,
      // поэтому мы не можем поменять часть переменной состояния при использовании useState()
      const newState = structuredClone<Todo[]>(todos);

      const todo = newState[findIndex];

      // Обновляем значение completed уже в копии массива todo
      newState[findIndex] = { ...todo, completed: !todo.completed };

      // Обновляем переменную состояния новым значением из списка todo
      setTodos(newState);
    }
  };

  // Метод для удаления todo по id
  const handleRemoveTodo = (todoId: number) => {
    // Удаляем элемент из массива используя копию массива
    const newState = structuredClone<Todo[]>(todos).filter(({ id }) => id !== todoId);

    // Обновляем переменную состояния новым значением из списка todo
    setTodos(newState);
  };

  // Метод для добавления нового todo массив из todo
  const handleAddTodo = (title: string) => {
    // Создаем новый элемент для списка todo
    const newTodo = {
      id: getLastId() + 1,
      title,
      completed: false,
    };

    // Получаем копию массива списка todo
    const newState = structuredClone<Todo[]>(todos);

    // Добавляем в него новый элемент
    newState.push(newTodo);

    // Обновляем переменную состояния новым значением из списка todo
    setTodos(newState);
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>Todo App</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleComplete={handleToggleTodo} onRemove={handleRemoveTodo} />
    </div>
  );
};

export default App;
