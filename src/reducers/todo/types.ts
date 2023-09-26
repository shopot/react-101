export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodoState = Todo[];

export type TodoAction = {
  type: string;
  todoId?: string;
  title?: string;
};
