import { ReactElement, useState } from 'react';

import styles from './add-todo-form.module.css';

import { Button } from '@/shared/ui';

export const AddTodoForm = ({ onAddTodo }: Props): ReactElement => {
  // Объявляем переменную состояния для контролируемого компонента input,
  // начальное значение пустая строка
  const [title, setTitle] = useState('');

  // Объявляем обработчик событий для контролируемого компонента input
  const handleClick = (): void => {
    const trimmedValue = title.trim();

    if (!trimmedValue) {
      return;
    }

    // Вызываем метод полученный через пропсы от родительского компонента
    // и передаем туда обработанное значение title из переменной состояния
    onAddTodo(trimmedValue);

    // Сбрасываем input через переменную состояния
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

type Props = {
  onAddTodo: (title: string) => void;
};
