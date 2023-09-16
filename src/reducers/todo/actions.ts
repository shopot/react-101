import { ADD_NEW_TODO, REMOVE_TODO, TOGGLE_COMPLETED } from './constants';
import { TodoAction } from './types';

export const doAddNewTodo = (title: string): TodoAction => ({ type: ADD_NEW_TODO, title });

export const doRemoveTodo = (todoId: number): TodoAction => ({ type: REMOVE_TODO, todoId });

export const doToggleCompleted = (todoId: number): TodoAction => ({
  type: TOGGLE_COMPLETED,
  todoId,
});
