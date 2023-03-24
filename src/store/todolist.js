import { create } from 'zustand';

const addTodo = (todos, text) => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

const updateTodo = (todos, id, text) =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

const removeTodo = (todos, id) => todos.filter((todo) => todo.id !== id);

const toggleTodo = (todos, id) =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const useStore = create((set) => ({
  todos: [],
  newTodo: '',
  setTodos: (todos) =>
    set((state) => ({
      ...state,
      todos,
    })),
  setNewTodo: (newTodo) =>
    set((state) => ({
      ...state,
      newTodo,
    })),
  addTodo: () =>
    set((state) => ({
      ...state,
      todos: addTodo(state.todos, state.newTodo),
      newTodo: '',
    })),
  updateTodo: (id, text) =>
    set((state) => ({
      ...state,
      todos: updateTodo(state.todos, id, text),
    })),
  removeTodo: (id) =>
    set((state) => ({
      ...state,
      todos: removeTodo(state.todos, id),
    })),
  toggleTodo: (id) =>
    set((state) => ({
      ...state,
      todos: toggleTodo(state.todos, id),
    })),
}));

export default useStore;
