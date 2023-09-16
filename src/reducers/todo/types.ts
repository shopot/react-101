export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoState = Todo[];

export type TodoAction = {
  type: string;
  todoId?: number;
  title?: string;
};
