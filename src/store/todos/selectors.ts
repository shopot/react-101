import { TodosState } from './types';

export const selectTodos = (state: TodosState) => state.todos;
