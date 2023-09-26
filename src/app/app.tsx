import { ReactElement, useState } from 'react';

import styles from './app.module.css';

import { TodoList } from '@/components/todo-list';
import { AddTodoForm } from '@/components/add-todo-form';
import { TodoState } from '@/types';

// Начальное значение для переменной состояния todos
const initialState: TodoState = [
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'learn in the tutorial are fundamental to building any React app',
    completed: false,
  },
];

const App = (): ReactElement => {
  // Объявляем переменную состояния для хранения списка todo при помощи useState()
  // начальное значение - массив с одним элементом
  const [todos, setTodos] = useState<TodoState>(initialState);

  // Метод для переключения статуса completed
  const handleToggleTodo = (todoId: string) => {
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
  const handleRemoveTodo = (todoId: string) => {
    // Удаляем элемент из массива
    const newTodos = todos.filter(({ id }) => id !== todoId);

    // Обновляем переменную состояния новым значением из списка todo
    setTodos(newTodos);
  };

  // Метод для добавления нового todo массив из todo
  const handleAddTodo = (todoId: string, title: string) => {
    // Добавляем в него новый элемент
    const newTodos = [...todos, { id: todoId, title, completed: false }];

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
