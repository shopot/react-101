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
  const getLastId = () => (todos.length ? todos[todos.length - 1].id : 0);

  // Метод для переключения статуса completed
  const handleToggleTodo = (todoId: number) => {
    // Обновляем значение completed
    const newTodos = todos.map((t) => {
      if (t.id === todoId) {
        return { ...t, completed: !t.completed };
      }

      return t;
    });

    // Обновляем переменную состояния новым значением из списка todo
    setTodos(newTodos);
  };

  // Метод для удаления todo по id
  const handleRemoveTodo = (todoId: number) => {
    // Удаляем элемент из массива
    const newTodos = todos.filter(({ id }) => id !== todoId);

    // Обновляем переменную состояния новым значением из списка todo
    setTodos(newTodos);
  };

  // Метод для добавления нового todo массив из todo
  const handleAddTodo = (title: string) => {
    // Добавляем в него новый элемент
    const newTodos = [...todos, { id: getLastId() + 1, title, completed: false }];

    // Обновляем переменную состояния новым значением из списка todo
    setTodos(newTodos);
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
