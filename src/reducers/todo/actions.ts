import { TodoAction } from './types';

/*
 * Action types
 */
export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

/*
 * Action Creators
 */
export const addNewTodo = (title: string): TodoAction => ({ type: ADD_NEW_TODO, title });

export const removeTodo = (todoId: string): TodoAction => ({ type: REMOVE_TODO, todoId });

export const toggleCompleted = (todoId: string): TodoAction => ({
  type: TOGGLE_COMPLETED,
  todoId,
});
