import { ReactElement } from 'react';

import { TodoItem } from '@/components/todo-item';
import { Todo } from '@/types';

export const TodoList = ({ todos, onToggleComplete, onRemove }: Props): ReactElement => {
  // Формируем список JSX элементов из наших todo
  // в качестве ключа используем todo.id
  // передаем обработчики событий полученные из родительского компонента
  const todoList = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} onRemove={onRemove} />
  ));

  return <div className="flex flex-col items-start  py-2 ">{todoList}</div>;
};

type Props = {
  todos: Todo[];
  onToggleComplete: (todoId: number) => void;
  onRemove: (todoId: number) => void;
};
