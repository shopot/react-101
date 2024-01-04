import { JSX } from 'react';

import styles from './todo-list.module.css';

import type { Todo } from '@/types';
import { TodoItem } from '../todo-item';

type Props = {
  todos: Todo[];
  onToggle: (todoId: string) => void;
  onRemove: (todoId: string) => void;
};

export const TodoList = ({ todos, onToggle, onRemove }: Props): JSX.Element => {
  // Формируем список JSX элементов из наших todo
  // в качестве ключа используем todo.id
  // передаем обработчики событий полученные из родительского компонента
  const todoList = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
  ));

  return <div className={styles.todoList}>{todoList}</div>;
};
