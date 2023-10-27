import { ReactElement } from 'react';

import styles from './app.module.css';

import { TodoList } from '@/components/todo-list';
import { AddTodoForm } from '@/components/add-todo-form';

const App = (): ReactElement => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
