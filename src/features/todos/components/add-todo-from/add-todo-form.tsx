import { useState } from 'react';

import { Button } from '@/components';

import styles from './add-todo-form.module.css';

type AddTodoFormProps = {
  onAddTodo: (title: string) => void;
};

export const AddTodoForm = ({ onAddTodo }: AddTodoFormProps): JSX.Element => {
  const [value, setValue] = useState('');

  const handleAddTodo = (): void => {
    const trimmedValue = value.trim();

    if (trimmedValue) {
      onAddTodo(trimmedValue);

      setValue('');
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Add new todo"
          aria-label="Add new todo"
        />
        <Button onCLick={handleAddTodo}>Add new todo</Button>
      </div>
    </form>
  );
};
