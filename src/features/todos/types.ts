export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodosState = {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};
