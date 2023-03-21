import { create } from 'zustand';

import { Todo } from '@/utils/interfaces/todolist';
import { TodoStore } from '@/utils/types/todolist';

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const useStore = create<TodoStore>(
  (set): TodoStore => ({
    todos: [],
    newTodo: '',
    setTodos: (todos: Todo[]) =>
      set((state) => ({
        ...state,
        todos,
      })),
    setNewTodo: (newTodo: string) =>
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
    updateTodo: (id: number, text: string) =>
      set((state) => ({
        ...state,
        todos: updateTodo(state.todos, id, text),
      })),
    removeTodo: (id: number) =>
      set((state) => ({
        ...state,
        todos: removeTodo(state.todos, id),
      })),
    toggleTodo: (id: number) =>
      set((state) => ({
        ...state,
        todos: toggleTodo(state.todos, id),
      })),
  })
);

export default useStore;
