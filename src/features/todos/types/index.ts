export type TodosApiState = {
  results: Todo[];
  totalCount: number;
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
