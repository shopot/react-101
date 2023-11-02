import { JSX, useState } from 'react';

import styles from './add-todo-form.module.css';

import { Button } from '@/components/button';
import { useAddTodoMutation } from '../../api/todos-api';

export const AddTodoForm = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [addTodo] = useAddTodoMutation();

  const handleClick = (): void => {
    const trimmedValue = title.trim();

    if (trimmedValue) {
      void addTodo({ title: trimmedValue });

      setTitle('');
    }
  };

  return (
    <form className={styles.formWrapper}>
      <div className={styles.formInputWrapper}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.formInput}
          type="text"
          placeholder="Add your new todo"
          aria-label="Add your new todo"
        />
        <Button onCLick={handleClick}>Add new</Button>
      </div>
    </form>
  );
};
