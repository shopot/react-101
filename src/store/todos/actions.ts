import { TodosActionType, TodosAction } from './types';

/*
 * Action Creators
 */
export const addNewTodo = (title: string): TodosAction => ({
  type: TodosActionType.ADD_NEW_TODO,
  payload: title,
});

export const removeTodo = (id: string): TodosAction => ({
  type: TodosActionType.REMOVE_TODO,
  payload: id,
});

export const toggleCompleted = (id: string): TodosAction => ({
  type: TodosActionType.TOGGLE_COMPLETED,
  payload: id,
});
