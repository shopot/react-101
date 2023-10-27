import { ReactElement } from 'react';

import styles from './todo-list.module.css';

import { Todo } from '@/types';
import { TodoItem } from '../todo-item';

export const TodoList = ({ todos, onToggleComplete, onRemove }: Props): ReactElement => {
  // Формируем список JSX элементов из наших todo
  // в качестве ключа используем todo.id
  // передаем обработчики событий полученные из родительского компонента
  const todoList = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} onRemove={onRemove} />
  ));

  return <div className={styles.todoList}>{todoList}</div>;
};

type Props = {
  todos: Todo[];
  onToggleComplete: (todoId: string) => void;
  onRemove: (todoId: string) => void;
};
