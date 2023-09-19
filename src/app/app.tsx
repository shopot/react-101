import { ReactElement } from 'react';

import styles from './app.module.css';

import { TodoProvider } from '@/providers';

import { AddTodoForm } from '@/components/add-todo-form';
import { TodoList } from '@/components/todo-list';

const App = (): ReactElement => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>Todo App</h1>
      <TodoProvider>
        <AddTodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default App;
