import { create } from 'zustand';

import { API } from '../api';
import { TodoType } from '../types';

type TodosStateType = {
  todos: TodoType[];
  isLoading: boolean;
};

const initialState: TodosStateType = {
  todos: [],
  isLoading: false,
};

const store = create<TodosStateType>(() => ({
  ...initialState,
}));

export const loadAllTodos = async () => {
  store.setState({ isLoading: true });

  try {
    const todos = await API.getTodos();

    store.setState({ todos, isLoading: false });
  } catch (error) {
    console.log(error);

    store.setState({ isLoading: false });
  }
};

export const addTodo = async (title: string) => {
  store.setState({ isLoading: true });

  try {
    const newTodo = await API.addTodo(title);

    if (newTodo) {
      store.setState({ todos: [...store.getState().todos, newTodo] });
    }
  } catch (error) {
    console.log(error);
  }

  store.setState({ isLoading: false });
};

export const toggleTodo = async (id: string) => {
  store.setState({ isLoading: true });

  const findTodo = store.getState().todos.find((todo) => todo.id === id);

  if (findTodo) {
    try {
      await API.updateTodoById(id, !findTodo.completed);

      await loadAllTodos();
    } catch (error) {
      console.log(error);
    }
  }

  store.setState({ isLoading: false });
};

export const deleteTodo = async (id: string) => {
  try {
    await API.deleteTodoById(id);

    await loadAllTodos();
  } catch (error) {
    console.log(error);
  }
};

export const useTodosStore = () => store.getState();

export { store as useStore };
