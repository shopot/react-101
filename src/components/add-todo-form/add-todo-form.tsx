import { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './add-todo-form.module.css';

import { Button } from '@/shared/ui';

export const AddTodoForm = (): ReactElement => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleClick = (): void => {
    const trimmedValue = title.trim();

    if (!trimmedValue) {
      return;
    }

    dispatch({ type: 'todos/addNewTodo', payload: trimmedValue });

    setTitle('');
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
