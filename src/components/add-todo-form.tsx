import { ReactElement, useState } from 'react';

import { Button } from '@/shared/ui';

export const AddTodoForm = ({ addTodo }: Props): ReactElement => {
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
    addTodo(trimmedValue);

    // Сбрасываем input через переменную состояния
    setTitle('');
  };

  return (
    <form className="w-full max-w-lg">
      <div className="flex items-center border-b border-blue-500 py-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add your new todo"
          aria-label="Full name"
        />
        <Button onCLick={handleClick}>Add new</Button>
      </div>
    </form>
  );
};

type Props = {
  addTodo: (title: string) => void;
};
