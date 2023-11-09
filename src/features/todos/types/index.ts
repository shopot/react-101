export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  color?: string;
};

export type TodosState = {
  results: Todo[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
};
