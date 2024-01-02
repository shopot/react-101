import { JSX, useState } from 'react';

import styles from './add-todo-form.module.css';

import { Button } from '@/components/button';
import { todosStore } from '../../stores/todos-store';

export const AddTodoForm = (): JSX.Element => {
  const [text, setText] = useState('');

  const handleAddNewTodo = (): void => {
    const trimmedValue = text.trim();

    if (trimmedValue) {
      console.log('addTodo:', trimmedValue);

      void todosStore.addTodo(trimmedValue);

      setText('');
    }
  };

  return (
    <form className={styles.formWrapper}>
      <div className={styles.formInputWrapper}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.formInput}
          type="text"
          placeholder="Add your new todo"
          aria-label="Add your new todo"
        />
        <Button onCLick={handleAddNewTodo}>Add new</Button>
      </div>
    </form>
  );
};
