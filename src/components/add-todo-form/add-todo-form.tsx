import { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './add-todo-form.module.css';

import { Button } from '@/shared/ui';

import { addNewTodo } from '@/reducers/todo';
import { useTodoDispatch } from '@/contexts';

export const AddTodoForm = (): ReactElement => {
  const [title, setTitle] = useState('');

  const dispatch = useTodoDispatch();

  const handleClick = (): void => {
    const trimmedValue = title.trim();

    if (!trimmedValue) {
      return;
    }

    const id: string = uuidv4();

    dispatch(addNewTodo(id, trimmedValue));

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
