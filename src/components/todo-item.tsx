import { ButtonRemove } from '@/shared/ui';
import { Todo } from '@/types';

export const TodoItem = ({ todo, onToggleComplete, onRemove }: Props) => {
  const { id, title, completed } = todo;

  const lineThroughClass = completed ? 'line-through text-gray-500' : '';

  return (
    <div className="flex items-center justify-between w-full border-b border-gray-300">
      <div className="flex items-center mb-1">
        <input
          checked={completed}
          onChange={() => onToggleComplete(id)}
          type="checkbox"
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-0"
        />
      </div>
      <div className={`w-full pl-3 ${lineThroughClass}`}>{title}</div>
      <ButtonRemove onCLick={() => onRemove(id)} />
    </div>
  );
};

type Props = {
  todo: Todo;
  onToggleComplete: (todoId: number) => void;
  onRemove: (todoId: number) => void;
};
