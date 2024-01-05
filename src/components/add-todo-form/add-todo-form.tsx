import { ReactElement, useState } from 'react';

import styles from './add-todo-form.module.css';

import { Button } from '@/shared/ui';

type AddTodoFormProps = {
  onAddTodo: (title: string) => void;
};

export const AddTodoForm = ({ onAddTodo }: AddTodoFormProps): ReactElement => {
  const [title, setTitle] = useState('');

  const handleClick = (): void => {
    const trimmedValue = title.trim();

    if (!trimmedValue) {
      return;
    }

    onAddTodo(trimmedValue);

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
