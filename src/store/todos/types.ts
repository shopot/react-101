/**
 * Write Action Types as domain/eventName like Redux Toolkit's createSlice style
 * https://redux.js.org/style-guide/#priority-c-rules-recommended
 */
export const enum TodosActionType {
  ADD_NEW_TODO = '@todos/addNewTodo',
  REMOVE_TODO = '@todos/removeTodo',
  TOGGLE_COMPLETED = '@todos/toggleCompleted',
}

export type TodosAction = {
  type: TodosActionType;
  payload: string;
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodosState = {
  todos: Todo[];
};

export type TodosDispatch = (args: TodosAction) => TodosAction;
